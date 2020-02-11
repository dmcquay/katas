Written with Go 1.11

## Getting started

Go must be installed: `brew install go`

```
export GOPATH=$(pwd)
export GOBIN=$GOPATH/bin
```

Also, in VS Code project settings, I have set 

## Run main

```
go run main.go
```

## Run tests

All tests: `go test ./...`
Target specific test: `go test ./... -run TestFizzBuzz`

You can also specify a file, but you have to also list all files it depends on:
`go test fizzbuzz/fizzbuzz.go fizzbuzz/fizzbuzz_test.go`

## Run tests in watch mode

```
npm install -g nodemon
nodemon -e go --exec 'go test ./... || exit 1'
```

## Compile and run binary

```
go install fizbuzz.go
./bin/fizzbuzz
```

## Debugging

To debug in VS code specifically.
https://github.com/Microsoft/vscode-go/wiki/Debugging-Go-code-using-VS-Code

Exact steps I took:

- Install command line tools: `xcode-select --install`
- Install delve: Cmd + Shift + P -> Install/Upgrade Tools -> dlv
- Click on debug tab
- Click on "Debug"

## TODO

- Try using Ginkgo
- Try creating multiple packages and sharing them
- Try logging to console in a test
- Debug