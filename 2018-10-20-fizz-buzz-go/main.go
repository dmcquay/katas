package main

import (
	"fizzbuzz"
	"fmt"
)

func main() {
	for i := 1; i < 20; i++ {
		fmt.Printf("%d=%s\n", i, fizzbuzz.FizzBuzz(i))
	}
}
