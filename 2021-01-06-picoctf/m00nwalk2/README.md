https://medium.com/analytics-vidhya/get-secret-message-from-audio-file-8769421205c3

As with image files, stegonagraphy might be used to embed a secret message/flag in the (meta-) data, thus a quick win is to use tools like exifool, strings, mediaInfo, file and binwalk. Other tools include Audacity or Sonic Visualiser, which might give some information about encoded text in the audio waveforms or spectogram.

file command has the same results for all files:
RIFF (little-endian) data, WAVE audio, Microsoft PCM, 16 bit, mono 48000 Hz

```
brew install exiftool
exiftool clue1.wav
```

Durations:
clue1 2:00
clue2 1:17
clue3 1:04
message 1:55

All files have 1 channel.

Downloaded Sonic Visualizer
https://www.sonicvisualiser.org/download.html

Tried LSB. Used Python wave library.
`pip3 install wave`

Looking at the LSB for each frame produced gibberish.

Decided to look at the hexdump in case there are any obvious patterns.

`hexdump -C clue1.wav | less`

Didn't see any patterns. Lost interest.