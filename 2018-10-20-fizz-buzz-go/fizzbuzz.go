package main

import (
	"fmt"
	"strconv"
)

// FizzBuzz returns a string based on what numbers the input is evenly divisible by.
func FizzBuzz(n int) string {
	words := ""

	if n%3 == 0 {
		words += "fizz"
	}
	if n%5 == 0 {
		words += "buzz"
	}
	if n%7 == 0 {
		words += "bizz"
	}

	if words == "" {
		return strconv.Itoa(n)
	}

	return words
}

func main() {
	for i := 1; i < 20; i++ {
		fmt.Printf("%d=%s\n", i, FizzBuzz(i))
	}
}
