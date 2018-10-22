package fizzbuzz

import "strconv"

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
