It seems that looking at every third cell with a follow up of looking at every cell, with hit followup is the best strategy with an average of 62 shots fired to solve.

# Learnings about channels

I first made the solver goroutines write each board solution to the channel. In this setup,
adding channels actually slowed down. For example with 1000000 iterations split into 5 goroutines,
total execution time was 47 seconds, but with only 1 goroutine it was 20 seconds.

I tried to solve this by creating a larger buffer in the channel (as large as 100000) and that didn't
change the execution time at all. Setting the buffer size to 1 actually marginally improved performance
(43 seconds with 5 goroutines).

Next I tried dramatically reducing the chatter across the channel by making each goroutine aggregate
its own results so only N results were sent back over the channel where N is the number of workers.
This produced better results for 1 goroutine (12 seconds). 5 goroutines remained at around 44 seconds.

Nice explanation about how goroutines might slow you down here:
https://appliedgo.net/concurrencyslower/

But, I *think* I'm already doing what they suggest as the correct solution. So...?