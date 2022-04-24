package main

import (
	"fmt"
	"problems/roman"
)

func main() {
	fmt.Println("I", roman.RomanToInteger("I"))
	fmt.Println("V", roman.RomanToInteger("V"))
	fmt.Println("VI", roman.RomanToInteger("VI"))
	fmt.Println("IV", roman.RomanToInteger("IV"))
	fmt.Println("MMCMXCIII (expect 2993)", roman.RomanToInteger("MMCMXCIII"))
}
