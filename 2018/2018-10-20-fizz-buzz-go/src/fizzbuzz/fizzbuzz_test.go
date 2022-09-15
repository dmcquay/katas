package fizzbuzz

import "testing"

func TestFizzBuzz(t *testing.T) {
	cases := []struct {
		in   int
		want string
	}{
		{1, "1"},
		{3, "fizz"},
		{5, "buzz"},
		{3 * 5, "fizzbuzz"},
		{3 * 5 * 2, "fizzbuzz"},
		{7, "bizz"},
		{3 * 7, "fizzbizz"},
		{3 * 7 * 2, "fizzbizz"},
		{5 * 7, "buzzbizz"},
		{5 * 7 * 2, "buzzbizz"},
		{3 * 5 * 7, "fizzbuzzbizz"},
		{3 * 5 * 7 * 2, "fizzbuzzbizz"},
	}
	for _, c := range cases {
		got := FizzBuzz(c.in)
		if got != c.want {
			t.Errorf("FizzBuzz(%q) == %q, want %q", c.in, got, c.want)
		}
	}
}
