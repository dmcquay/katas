package roman

var romanChars = map[byte]int{
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
}

func RomanToInteger(roman string) int {
	sum := 0

	for i := 0; i < len(roman); i++ {
		val := romanChars[roman[i]]
		if (i < (len(roman) - 1)) && val < (romanChars[roman[i+1]]) {
			sum -= val
		} else {
			sum += val
		}
	}

	return sum
}
