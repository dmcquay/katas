## Goal

You have a monorepo with several apps and a shared lib kind of directory. When building container images you generally need one app directory + the shared directory.

Goal is to demonstrate various ways to send the minimal context to docker engine to build the image.

First, run `./send-full-context.sh` to see the problem. You'll see a line like this:

```
Sending build context to Docker daemon  40.45kB
```

We're only wanting to build app1 and also include the shared folder. The should only be about 32 bytes.

What I wish I could do is literally ignore everything except the folders I want for a given image.
e.g. For app1, I want to include only app1 and shared. I want to ignore all of app2.

## Dockerignore strategy

Create a .dockerignore file in the root of the build context. Ignore anything unnecessary. 

This doesn't allow me to ignore all of app2 because then when I want to build the app2 image, it would ignore
all of app2 in that case too. You can only ignore things that are okay to ignore for all images. For
example, `node_modules` typically falls in this category.

As limiting as that feels, your actual code is usually quite light and therefore this is typically sufficient.
It should be your goto strategy unless you have legitimately huge source code or some large assets that must
be included.

## BuildKit

Docker has rehauled the build architecture recently. The new build architecture is called BuildKit.

BuildKit is faster and more secure out of the box. And it includes the ability to specify what dockerignore
files to use per build. This allows you to do exactly what we want (completely ignore app2/* for the app1
image build and visa versa).

- To use this option, you need Docker 18.09 or later.
- BuildKit only supports buliding Linux containers.
- You must set the environment variable `DOCKER_BUILDKIT=1` to enable BuildKit.
- Alternatively you can permanently enable by adding this to your docker daemon configuration, typically
  located at `/etc/docker/daemon.json`: `{ "features": { "buildkit": true } }`

As you use BuildKit I think you will notice it is faster than the reduced context can account for. They've
made some other great speed improvements!

## Other strategies that give you full control

If you do have legitimately large directories after ignoring what you can and you can't use BuildKit for
some reason, then here are a few options that give you full control over what context is sent to the docker engine.
These require scripting beyond a simple docker build command and don't work with Docker Compose.

For the options below, I did a performance test with 233M of context spread across many files.

- Sending this context normally took ~10 seconds.
- With `tar` it took only ~8 seconds!
- Copying to a tempdir took ~25 seconds. :(
- Use of hardlinks with the tempdir option only reduced the time to ~23 seconds.

So really `tar` is the way to go, but I'll explain the alternatives anyway.

### Tar up the context

You can have complete control over your build context by building a custom tarball and piping it into docker build.
This option is superior to the options that follow both in it's simplicity and execution speed.

For an example, run `tar.sh`.

### Build a custom context directory at build time

This will require some custom scripting so it also will not be compatible with docker compose.

Make a tmp dir, copy everything you need into it and then run the build.

You might consider using hardlinks to speed up the process. I believe symlinks won't work though.

## Distributed shared folder as a package

You can bypass this problem entirely by building a separate versioned package from your shared folder and
installing it in your apps like any other package. Or you might also consider just duplicating the code if
there's not that much.

## Other learnings

- Sending huge files is really quite fast. (Generated single 49M file in app1, took 4.7 seconds to send context and build.)
- Installed Create React App (with node_modules). Total size is 233M. Context sent was 170M. Took around 10 seconds to send context. 8 seconds with tar. 25 seconds when copying into a tempdir. 23 seconds with hardlinks.

## Conclusion

- If possible, just ignore things like node_modules and otherwise send extra context. Only consider other options if it truly is slow after this. This is the only option that lets you use docker-compose (I think).
- Next best option is to tar up exactly what you need and pipe into docker build. You can't use this with docker-compose, but other than that it works beautifully. Fastest and gives you full control with one simple command.
- No other options are worth considering IMO.