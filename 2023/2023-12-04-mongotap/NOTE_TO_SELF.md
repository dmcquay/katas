I finally got mongo server to work. See mongo1 folder. And it works to run ./sync-log and python3 create-posts.py.

Next up:
- Figure out how to set the oplog size rather high?
- And to set the session timeout really low?
- And add a super large array to posts?
- And edit script so that it edits all those arrays?
- Then do a bunch of those edits and then run ./sync-log and try to replicate the session timeout.
- Then maybe I try to run all of this with locally built tap instead of one installed with pip so that I can edit sources.
- Then I read sources and try to understand what needs to change and experiment to see if it resolves the problem?

Or:
- Just skip to reading the sources and try to identify where the change needs to be made without the ability to test it. Was still helpful to run locally just so I have a frame of reference when reading the code.