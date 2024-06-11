import json
import struct

f = open('data.bin', 'rb')
position = 0
frame = 1

def read_header():
    header = f.read(8)
    if len(header) < 8:
        print('end of file')
        return  # End of file
    current_frame_size, previous_frame_size = struct.unpack('>II', header)
    return current_frame_size, previous_frame_size

def read():
    global position, frame
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    frame_data = f.read(current_frame_size)
    group = json.loads(frame_data)
    print(f"Frame {frame} at position {position}: {group}")

def next():
    global position, frame
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    position += 8 + current_frame_size
    frame += 1
    print(f"Seeked to frame {frame} at position {position}")

def prev():
    global position, frame
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    position -= 8 + previous_frame_size
    frame -= 1
    print(f"Seeked to frame {frame} at position {position}")

def seek(target_frame):
    while (target_frame > frame):
        next()
    while (target_frame < frame):
        prev()

if __name__ == "__main__":
    read()
    read()
    next()
    read()
    prev()
    read()
    read()
    seek(3)
    read()
    seek(1)
    read()
    f.close()
