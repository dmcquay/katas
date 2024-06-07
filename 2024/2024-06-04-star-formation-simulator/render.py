import pygame
import sys

# Constants
WIDTH, HEIGHT = 1600, 1000
PARTICLE_RADIUS = 1
BACKGROUND_COLOR = (0, 0, 0)
PARTICLE_COLOR = (255, 255, 255)

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
            if (len(parts) < 3):
                continue
            x, y, mass = map(float, parts)
            timestep.append((x, y, mass))

# Render particles
def render_particles(particles):
    screen.fill(BACKGROUND_COLOR)
    for x, y, mass in particles:
        if mass >= 1:
            pygame.draw.circle(screen, PARTICLE_COLOR, (int(x), int(y)), PARTICLE_RADIUS * mass)
    pygame.display.flip()

# Main loop
def main():
    clock = pygame.time.Clock()
    i = 0

    running = True
    for timestep in read_next_timestep():
        i += 1
        if not running:
            break
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        render_particles(timestep)
        clock.tick(10)  # Adjust to your preferred speed

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                running = False

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()
