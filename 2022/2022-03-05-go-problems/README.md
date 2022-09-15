# go quickstart

Version of go at time of writing: 1.17.8

## Primary Docs

https://go.dev/learn/

## Install/Update Go & Configure Environment

I originally installed with `brew install go`, but that gave me 1.17.8, while the latest stable
version is actually 1.18 at the time of writing which is important to me because support for generics
was added in 1.18. Therefore I recommend installing by going go.dev and following the installation
instructions there.

i like to isolate go to current project directory. setting these env vars does that.

```
export GOROOT=$(pwd)
export GOPATH=$(pwd)
export GOBIN=$GOPATH/bin
export PATH="$GOBIN:$PATH"
```

## Write Some Code

your entry point can be in any file name/path you want
but that file must have `package main` at the top
and it must declare a function `main` that is the entrypoint

example:

```
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Hello")
}
```

Now run it with `go run path/to/file.go`

## Compile a Standalone Executable

## Write and Execute Tests

## Dependencies

install dependencies: `go get -t ./...`
`-t` tells it to install test dependencies

# Packages and Modules

## How to organize your code into packages

https://www.youtube.com/watch?v=T8pShHr8kiE

## How to organize your code into modules

Tutorial: https://go.dev/doc/tutorial/create-module

We're going to make two modules: a and b. b will import from a.

```
mkdir a; cd a
go mod init example.com/a
```

Now make a file `a/a.go`

```go
package a

func Name() string {
	return "Dustin"
}
```

Now we will make module b. Go back to the parent directory.

```
mkdir a; cd a
go mod init example.com/a
```

Write a main package that imports and uses `Name` from `a`:

```go
package main

import (
	"fmt"
	
	"example.com/a"
)

func main() {
	fmt.Println(a.Name())
}
```

If we were to run `go tidy` now, it would try to find module `a` via HTTP
at `example.com/a`, but it doesn't exist there (yet). We want to use it
locally instead. So we use the following command to tell go where to find
it locally.

`go mod edit -replace example.com/a=../a`

Now tidy: `go tidy`
And run: `go run .`

## Workspaces

A layer on top of modules that makes working with several modules at once more convenient.

https://go.dev/doc/tutorial/workspaces
