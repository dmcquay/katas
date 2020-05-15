## Goal

You have a monorepo with several apps and a shared lib kind of directory. When building container images you generally need one app directory + the shared directory.

Goal is to demonstrate various ways to send the minimal context to docker engine to build the image.

First, run `./send-full-context.sh` to see the problem. You'll see a line like this:

```
Sending build context to Docker daemon  40.45kB
```

We're only wanting to build app1 and also include the shared folder. The should only be about 32 bytes.

## Dockerignore strategy

Create a .dockerignore file in the root of the build context. Ignore anything unnecessary. Hopefully everything impactful can be ignored. For example, you can
generally ignore node_modules which tends to be the culprit of massive build contexts.

This should be your goto strategy. However, there's no way to have a different .dockerignore for each image.

## Separate Dockerignore per Image

I just said you can't do this. But you can. Sort of.

There is an undocumented feature that doesn't work on Windows that allows you to create a file named `[dockerfilename].dockerignore`. To use this, you must set
the environment variable `DOCKER_BUILDKIT=1` at build time. I believe this works with docker compose too.

Run `./custom-dockerignore.sh` to see this stratey.

## Tar up the context

You can have complete control over your build context by building a custom tarball and piping it into docker build.

Downside is I'm thinking this probably isn't possible to use with docker compose.

## Build a custom context directory at build time

This will require some custom scripting so it also will not be compatible with docker compose.

Make a tmp dir, copy everything you need into it and then run the build.

You might consider using hardlinks to speed up the process. I believe symlinks won't work though.

## Distributed shared folder as a package

You can bypass this problem entirely by building a separate versioned package from your shared folder and installing it in your apps like any other package.
Or you might also consider just duplicating the code if there's not that much.