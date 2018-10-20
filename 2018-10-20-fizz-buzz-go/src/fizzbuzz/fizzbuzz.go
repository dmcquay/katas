package fizzbuzz

// FizzBuzz returns a string based on what numbers the input is evenly divisible by.
func FizzBuzz(n int) string {
	if n%3 == 0 {
		return "fizz"
	}
	return "buzz"
}
