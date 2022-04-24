package roman

import (
	"testing"
)

func testCommon(t *testing.T, input string, expected int) {
	actual := RomanToInteger(input)
	if actual != expected {
		t.Errorf("RomanToInteger(\"%s\") = %d; expected %d", input, actual, expected)
	}
}

func TestAll(t *testing.T) {
	testCommon(t, "I", 1)
	testCommon(t, "V", 5)
	testCommon(t, "VI", 6)
	testCommon(t, "IV", 4)
	testCommon(t, "MMCMXCIII", 2993)
}
