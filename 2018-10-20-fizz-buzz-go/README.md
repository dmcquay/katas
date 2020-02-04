Written with Go 1.11

## Getting started

```
export GOPATH=$(pwd)
export GOBIN=$GOPATH/bin
```

## Run main

```
go run fizzbuzz.go
```

## Run tests

```
go test ./...
```

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