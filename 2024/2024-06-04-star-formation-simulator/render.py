import pygame
import sys
import math

# Constants
WIDTH, HEIGHT = 1600, 1000
BACKGROUND_COLOR = (0, 0, 0)

# Initialize Pygame
pygame.init()
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
            if len(parts) < 3 or is_any_blank:
                continue
            x, y, mass = map(float, parts)
            timestep.append((x, y, mass))

def radius_from_area(area):
    return math.sqrt(area / math.pi)

# Render particles
def render_particles(particles, zoom_level, offset_x, offset_y):
    screen.fill(BACKGROUND_COLOR)
    for x, y, mass in particles:
        screen_x = int((x - offset_x) * zoom_level + WIDTH // 2)
        screen_y = int((y - offset_y) * zoom_level + HEIGHT // 2)
        screen_radius = int(radius_from_area(mass) * zoom_level)
        if screen_radius >= 1:
            pygame.draw.circle(screen, (255, 255, 255), (screen_x, screen_y), int(screen_radius))
        else:
            c = int((screen_radius * 200)) + 55
            pygame.draw.circle(screen, (c,c,c), (screen_x, screen_y), 1)
    pygame.display.flip()

# Main loop
def main():
    clock = pygame.time.Clock()
    zoom_level = 1.0
    offset_x = 0
    offset_y = 0
    dragging = False
    last_mouse_pos = None
    running = True
    last_timestep = None

    for timestep in read_next_timestep():
        last_timestep = timestep
        
        if not running:
            break

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
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

        render_particles(timestep, zoom_level, offset_x, offset_y)
        clock.tick(10)
    
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
            
        render_particles(last_timestep, zoom_level, offset_x, offset_y)
        clock.tick(10)

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()
