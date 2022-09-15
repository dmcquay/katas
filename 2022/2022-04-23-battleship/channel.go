package main

import "fmt"

func sumCh(nums *[]int, ch chan int) {
	ch <- sum(*nums)
}

func sum(nums []int) int {
	result := 0
	for i := 0; i < len(nums); i++ {
		result += nums[i]
	}
	return result
}

func main2() {
	c1 := make(chan int)
	nums1 := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 4, 5, 7, 57, 34, 23, 43, 56, 76, 6545, 34, 23, 23, 23, 45, 65, 7, 8, 8, 4, 2, 1, 1, 11, 3, 5, 7, 9, 90, 9, 8, 6, 5, 4, 3}
	nums2 := []int{3, 4, 5, 6, 5, 3, 2, 12, 3, 5, 7, 8, 9, 9, 8, 7, 6, 4, 3, 2, 1, 2, 34, 6, 7, 78, 8, 9, 8, 76, 554, 43, 32, 2, 24, 5, 6, 78, 9, 98, 76, 54, 3, 2, 34, 56, 78, 7, 654, 32, 3, 456, 78, 76, 5432, 34, 5678, 7654}
	var results []int = make([]int, 10)
	go sumCh(&nums1, c1)
	go sumCh(&nums2, c1)
	results = append(results, <-c1)
	results = append(results, <-c1)
	final := sum(results)
	fmt.Println(final)
}
