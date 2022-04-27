It seems that looking at every third cell with a follow up of looking at every cell, with hit followup is the best strategy with an average of 62 shots fired to solve.

# Learnings about channels

I first made the solver goroutines write each board solution to the channel. In this setup,
adding channels actually slowed down. For example with 1000000 iterations split into 5 goroutines,
total execution time was 47 seconds, but with only 1 goroutine it was 20 seconds.

I tried to solve this by creating a larger buffer in the channel (as large as 100000) and that didn't
change the execution time at all. Setting the buffer size to 1 actually marginally improved performance
(43 seconds with 5 goroutines).

