# go quickstart

Version of go at time of writing: 1.17.8

## Primary Docs

https://go.dev/learn/

## Install/Update Go & Configure Environment

install with `brew install go`
update with `brew upgrade go`

i like to isolate go to current project directory. setting these env vars does that.

```
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