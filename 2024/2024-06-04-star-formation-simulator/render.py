import time
import pygame
import sys
import math
import msgpack
import struct
# import time

file_path = sys.argv[1]

initial_frame = 1
if (len(sys.argv) >= 3):
    initial_frame = int(sys.argv[2])

initial_zoom = 0.25
if (len(sys.argv) >= 4):
    initial_zoom = float(sys.argv[3])

initial_tracking_id = None
if (len(sys.argv) >= 5):
    initial_tracking_id = int(sys.argv[4])

f = open(file_path, 'rb')
position = 0
frame = 1
end = False

def read_header():
    header = f.read(8)
    if len(header) < 8:
        return 0, 0
    current_frame_size, previous_frame_size = struct.unpack('>II', header)
    return current_frame_size, previous_frame_size

def read():
    global position, frame
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    if (current_frame_size == 0):
        # print('incomplete header')
        return None
    frame_data = f.read(current_frame_size)
    if (len(frame_data) < current_frame_size):
        # print(f"incomplete frame. {len(frame_data)} / {current_frame_size}")
        return None
    return msgpack.unpackb(frame_data)

def next():
    global position, frame, end
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    candidate_position = position + 8 + current_frame_size
    f.seek(candidate_position)
    header = f.read(8)
    if len(header) == 8:
        position = candidate_position
        frame += 1

def prev():
    global position, frame, end
    if (frame == 1):
        return
    end = False
    f.seek(position)
    current_frame_size, previous_frame_size = read_header()
    position -= 8 + previous_frame_size
    frame -= 1

def seek(target_frame):
    while (target_frame > frame):
        next()
    while (target_frame < frame):
        prev()

# Constants
WIDTH, HEIGHT = 1600, 1000
BACKGROUND_COLOR = (0, 0, 0)
DOUBLE_CLICK_THRESHOLD = 500

# Initialize Pygame
pygame.init()
pygame.font.init()
font = pygame.font.SysFont('Arial', 16)
screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.RESIZABLE)
visible_rect = pygame.Rect(-100, -100, WIDTH + 100, HEIGHT + 100)
pygame.display.set_caption('Particle Simulation')

def radius_from_area(area):
    return math.sqrt(area / math.pi)

# Render particles
def render_particles(particles, zoom_level, offset_x, offset_y, tracking_id, fps, actual_fps, reverse):
    global end
    screen.fill(BACKGROUND_COLOR)
    
    if particles is not None:
        for id, x, y, mass in particles:
            screen_x = int((x - offset_x) * zoom_level + WIDTH // 2)
            screen_y = int((y - offset_y) * zoom_level + HEIGHT // 2)
            if visible_rect.collidepoint(screen_x, screen_y):
                screen_radius = int(radius_from_area(mass) * zoom_level)
                if screen_radius >= 1:
                    color = (255, 255, 0) if id == tracking_id else (255, 255, 255)
                    pygame.draw.circle(screen, color, (screen_x, screen_y), int(screen_radius))
                else:
                    c = int((screen_radius * 200)) + 55
                    pygame.draw.circle(screen, (c,c,c), (screen_x, screen_y), 1)
    
    top_3 = [(None, -1), (None, -1), (None, -1)]
    for particle in particles:
        mass = particle[3]
        if mass > top_3[0][1]:
            top_3 = [(particle, mass)] + top_3[:2]
        elif mass > top_3[1][1]:
            top_3 = [top_3[0], (particle, mass)] + top_3[1:2]
        elif mass > top_3[2][1]:
            top_3[2] = (particle, mass)
    l1, l2, l3 = top_3[0][0], top_3[1][0], top_3[2][0]

    text_idx = 0

    def print_stat(txt):
        nonlocal text_idx
        text_surface = font.render(txt, True, (255, 255, 255))
        screen.blit(text_surface, (10, 10 + (text_idx * 22)))
        text_idx += 1

    print_stat('frame: {}'.format(frame))
    print_stat('fps: {}, actual: {}'.format(fps, round(actual_fps)))
    print_stat('zoom level: {:.2f}'.format(zoom_level))
    print_stat('location: {}, {}'.format(int(offset_x), int(offset_y)))
    
    # deep_link = f'f{frame},r{fps},z{zoom_level}'
    # if (tracking_id is not None):
    #     deep_link += f',t{tracking_id}'
    # print_stat(deep_link)
    
    if particles is not None:
        print_stat('objects: {}'.format(len(particles)))
        if tracking_id is not None:
            for particle_id, x, y, mass in particles:
                if particle_id == tracking_id:
                    print_stat(f'obj {tracking_id}: {mass} kg')
                    break
    
    print_stat('largest objects: {}, {}, {}'.format(int(l1[3]), int(l2[3]), int(l3[3])))
    
    if (end == True):
        print_stat('waiting for frame data')

    if (reverse == True):
        print_stat('reverse')

    pygame.display.flip()

# Main loop
def main():
    global end, initial_zoom, initial_frame, initial_tracking_id, screen, visible_rect, WIDTH, HEIGHT

    clock = pygame.time.Clock()
    zoom_level = initial_zoom
    offset_x = 0
    offset_y = 0
    dragging = False
    last_mouse_pos = None
    running = True
    particles = None
    tracking_id = initial_tracking_id
    last_click_time = 0
    fps = 20
    reverse = False
    pause = False
    
    # each bucket holds frame counts for frame_count_interval_seconds if value is no 0
    # except first bucket duration is now - frame_count_start
    frame_counts = [0,0,0]
    frame_count_start_seconds = time.time()
    actual_fps = 0
    frame_count_interval_seconds = 3

    seek(initial_frame)

    while True:
        if time.time() - frame_count_start_seconds > frame_count_interval_seconds:
            frame_counts[2] = frame_counts[1]
            frame_counts[1] = frame_counts[0]
            frame_counts[0] = 0
            frame_count_start_seconds = time.time()
        
        frame_counts[0] += 1

        recent_frame_count = frame_counts[0] + frame_counts[1] + frame_counts[2]
        recent_frame_count_seconds = time.time() - frame_count_start_seconds
        if frame_counts[1] != 0:
            recent_frame_count_seconds += frame_count_interval_seconds
        if frame_counts[2] != 0:
            recent_frame_count_seconds += frame_count_interval_seconds
        actual_fps = recent_frame_count / recent_frame_count_seconds

        if not pause:
            # start_time = time.time()
            next_particles = read()
            # end_time = time.time()
            # elapsed_time = end_time - start_time
            # print(f"read: {elapsed_time} seconds")
            if (next_particles is None):
                end = True
            else:
                end = False
                particles = next_particles
                if (reverse):
                    prev()
                else:
                    next()
        
        if not running:
            break

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.VIDEORESIZE:
                WIDTH = event.w
                HEIGHT = event.h
                screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.RESIZABLE)
                visible_rect = pygame.Rect(-100, -100, WIDTH + 100, HEIGHT + 100)
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_KP_PLUS or event.key == pygame.K_EQUALS:
                    if (fps == 1):
                        fps = 5
                    else:
                        fps += int(fps / 3)
                    frame_counts = [0,0,0]
                    frame_count_start_seconds = time.time()
                if event.key == pygame.K_KP_MINUS or event.key == pygame.K_MINUS:
                    if (fps <= 5):
                        fps = 1
                    else:
                        fps -= int(fps / 3)
                    frame_counts = [0,0,0]
                    frame_count_start_seconds = time.time()
                elif event.key == pygame.K_ESCAPE:
                    if tracking_id is not None:
                        tracking_id = None
                    else:
                        running = False
                elif event.key == pygame.K_LEFT:
                    reverse = True
                elif event.key == pygame.K_RIGHT:
                    reverse = False
                elif event.key == pygame.K_l:
                    largest = particles[0]
                    for particle in particles:
                        if (particle[3] > largest[3]):
                            largest = particle
                    tracking_id = largest[0]
                elif event.key == pygame.K_p:
                    pause = not pause
                elif event.key == pygame.K_b:
                    seek(1)
                elif event.key == pygame.K_LEFTBRACKET:
                    seek(max(0, frame - 1000))
                elif event.key == pygame.K_RIGHTBRACKET:
                    seek(frame + 1000)
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 4:  # Scroll up
                    zoom_level *= 1.1
                elif event.button == 5:  # Scroll down
                    zoom_level /= 1.1
                elif event.button == 1:  # Left mouse button
                    current_time = pygame.time.get_ticks()
                    if current_time - last_click_time < DOUBLE_CLICK_THRESHOLD:
                        mouse_x, mouse_y = pygame.mouse.get_pos()
                        min_distance = float('inf')
                        for particle_id, x, y, mass in particles:
                            screen_x = int((x - offset_x) * zoom_level + WIDTH // 2)
                            screen_y = int((y - offset_y) * zoom_level + HEIGHT // 2)
                            distance = (screen_x - mouse_x) ** 2 + (screen_y - mouse_y) ** 2
                            if distance < min_distance:
                                min_distance = distance
                                tracking_id = particle_id
                    else:
                        dragging = True
                        last_mouse_pos = pygame.mouse.get_pos()
                    last_click_time = current_time
            elif event.type == pygame.MOUSEBUTTONUP:
                if event.button == 1:
                    dragging = False
            elif event.type == pygame.MOUSEMOTION:
                if dragging:
                    mouse_x, mouse_y = pygame.mouse.get_pos()
                    if last_mouse_pos:
                        offset_x -= (mouse_x - last_mouse_pos[0]) / zoom_level
                        offset_y -= (mouse_y - last_mouse_pos[1]) / zoom_level
                    last_mouse_pos = (mouse_x, mouse_y)

        if tracking_id is not None:
            for particle_id, x, y, mass in particles:
                if particle_id == tracking_id:
                    offset_x = x
                    offset_y = y
                    break

        # start_time = time.time()
        render_particles(particles, zoom_level, offset_x, offset_y, tracking_id, fps, actual_fps, reverse)
        # end_time = time.time()
        # elapsed_time = end_time - start_time
        # print(f"render: {elapsed_time} seconds")
        clock.tick(fps)

    f.close()
    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()
