import pygame
import sys
import math

# Constants
WIDTH, HEIGHT = 1600, 1000
BACKGROUND_COLOR = (0, 0, 0)
DOUBLE_CLICK_THRESHOLD = 500

# Initialize Pygame
pygame.init()
pygame.font.init()
font = pygame.font.SysFont('Arial', 18)
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption('Particle Simulation')

def read_next_timestep():
    timestep = []
    while True:
        line = sys.stdin.readline()
        if not line:
            # end of file reached
            # this will cause the iterator to finish
            return
        elif line.strip() == "---":
            # end of block
            # in this case we want to yield the data we collected in this batch
            ret = timestep
            timestep = []
            yield ret
        else:
            # adding a new line to the current batch
            parts = line.split(',')
            is_any_blank = any(part == "" for part in parts)
            if len(parts) < 4 or is_any_blank:
                continue
            id, x, y, mass = map(float, parts)
            timestep.append((id, x, y, mass))

def radius_from_area(area):
    return math.sqrt(area / math.pi)

# Render particles
def render_particles(particles, zoom_level, offset_x, offset_y, tracking_id, generation, fps, complete):
    generation += 1
    screen.fill(BACKGROUND_COLOR)
    for id, x, y, mass in particles:
        screen_x = int((x - offset_x) * zoom_level + WIDTH // 2)
        screen_y = int((y - offset_y) * zoom_level + HEIGHT // 2)
        screen_radius = int(radius_from_area(mass) * zoom_level)
        if screen_radius >= 1:
            color = (255, 255, 0) if id == tracking_id else (255, 255, 255)
            pygame.draw.circle(screen, color, (screen_x, screen_y), int(screen_radius))
        else:
            c = int((screen_radius * 200)) + 55
            pygame.draw.circle(screen, (c,c,c), (screen_x, screen_y), 1)
    
    # top_3 = [(None, -1), (None, -1), (None, -1)]
    # for particle in particles:
    #     mass = particle[3]
    #     if mass > top_3[0][1]:
    #         top_3 = [(particle, mass)] + top_3[:2]
    #     elif mass > top_3[1][1]:
    #         top_3 = [top_3[0], (particle, mass)] + top_3[1:2]
    #     elif mass > top_3[2][1]:
    #         top_3[2] = (particle, mass)
    # l1, l2, l3 = top_3[0][0], top_3[1][0], top_3[2][0]

    text_idx = 0

    def print_stat(txt):
        nonlocal text_idx
        text_surface = font.render(txt, True, (255, 255, 255))
        screen.blit(text_surface, (10, 10 + (text_idx * 24)))
        text_idx += 1

    print_stat('generation: {}'.format(generation))
    print_stat('fps: {}'.format(fps))
    print_stat('zoom level: {:.2f}'.format(zoom_level))
    print_stat('location: {}, {}'.format(int(offset_x), int(offset_y)))
    print_stat('objects: {}'.format(len(particles)))
    # print_stat('largest objects: {}, {}, {}'.format(int(l1[3]), int(l2[3]), int(l3[3])))

    if (tracking_id is not None):
        print_stat('tracking object: {}'.format(tracking_id))
    
    if (complete == True):
        print_stat('end of simulation')

    pygame.display.flip()

# Main loop
generation = 0
def main():
    global generation

    clock = pygame.time.Clock()
    zoom_level = 1.0
    offset_x = 0
    offset_y = 0
    dragging = False
    last_mouse_pos = None
    running = True
    last_timestep = None
    tracking_id = None
    last_click_time = 0
    fps = 1
    fps_step = 10

    for timestep in read_next_timestep():
        last_timestep = timestep
        
        if not running:
            break

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_KP_PLUS or event.key == pygame.K_EQUALS:
                    fps += fps_step
                if event.key == pygame.K_KP_MINUS or event.key == pygame.K_MINUS:
                    fps -= fps_step
                elif event.key == pygame.K_ESCAPE:
                    if tracking_id is not None:
                        tracking_id = None
                    else:
                        running = False
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
                        for particle_id, x, y, mass in timestep:
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
            for particle_id, x, y, mass in timestep:
                if particle_id == tracking_id:
                    offset_x = x
                    offset_y = y
                    break

        render_particles(timestep, zoom_level, offset_x, offset_y, tracking_id, generation, fps, False)
        generation += 1
        clock.tick(fps)
    
    print("ended main loop")
    
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 4:  # Scroll up
                    zoom_level *= 1.1
                elif event.button == 5:  # Scroll down
                    zoom_level /= 1.1
                elif event.button == 1:  # Left mouse button
                    dragging = True
                    last_mouse_pos = pygame.mouse.get_pos()
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
            
        render_particles(last_timestep, zoom_level, offset_x, offset_y, tracking_id, generation, fps, True)
        clock.tick(50)

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()
