// from https://appliedgo.net/concurrencyslower/
// to run, cd into `concurrencyslower` dir
// then: `go test -bench .`

package concurrencyslower

import (
	"runtime"
	"sync"
	"testing"
)

const (
	limit = 10000000000
)

func SerialSum() int {
	sum := 0
	for i := 0; i < limit; i++ {
		sum += i
	}
	return sum
}

func ConcurrentSum() int {
	n := runtime.GOMAXPROCS(0)
	sums := make([]int, n)
	wg := sync.WaitGroup{}
	for i := 0; i < n; i++ {
		wg.Add(1)
		go func(i int) {
			start := (limit / n) * i
			end := start + (limit / n)

			for j := start; j < end; j += 1 {
				sums[i] += j
			}

			wg.Done()
		}(i)
	}

	wg.Wait()

	sum := 0
	for _, s := range sums {
		sum += s
	}
	return sum
}

func ChannelSum() int {
	n := runtime.GOMAXPROCS(0)

	res := make(chan map[int]int)

	for i := 0; i < n; i++ {
		go func(i int, r chan<- map[int]int) {
			results := make(map[int]int)
			sum := 0
			start := (limit / n) * i
			end := start + (limit / n)
			for j := start; j < end; j += 1 {
				sum += j
				results[j%5]++
			}
			r <- results
		}(i, res)
	}

	// sum := 0
	// for i := 0; i < n; i++ {
	// 	sum += <-res
	// }
	return 0
}

func BenchmarkSerialSum(b *testing.B) {
	for i := 0; i < b.N; i++ {
		SerialSum()
	}
}

func BenchmarkConcurrentSum(b *testing.B) {
	for i := 0; i < b.N; i++ {
		ConcurrentSum()
	}
}

func BenchmarkChannelSum(b *testing.B) {
	for i := 0; i < b.N; i++ {
		ChannelSum()
	}
}
