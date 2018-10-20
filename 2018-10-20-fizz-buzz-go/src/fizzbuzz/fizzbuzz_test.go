package fizzbuzz

import "testing"

func TestFizzBuzz(t *testing.T) {
	cases := []struct {
		in   int
		want string
	}{
		{3, "fizz"},
		{5, "buzz"},
	}
	for _, c := range cases {
		got := FizzBuzz(c.in)
		if got != c.want {
			t.Errorf("FizzBuzz(%q) == %q, want %q", c.in, got, c.want)
		}
	}
}
