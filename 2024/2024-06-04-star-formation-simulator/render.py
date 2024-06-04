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

# Load simulation data
def load_data(filename):
    with open(filename, 'r') as file:
        data = []
        timestep = []
        for line in file:
            line = line.strip()
            if line == '---':
                if timestep:
                    data.append(timestep)
                    timestep = []
            else:
                parts = line.split(',')
                if (len(parts) < 3):
                    continue
                x, y, mass = map(float, parts)
                timestep.append((x, y, mass))
        if timestep:
            data.append(timestep)
    return data

# Render particles
def render_particles(particles):
    screen.fill(BACKGROUND_COLOR)
    for x, y, mass in particles:
        pygame.draw.circle(screen, PARTICLE_COLOR, (int(x), int(y)), PARTICLE_RADIUS * mass)
    pygame.display.flip()

# Main loop
def main():
    data = load_data('data.txt')
    clock = pygame.time.Clock()
    step = 0

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        render_particles(data[step])
        step = (step + 1) % len(data)
        clock.tick(10)  # Adjust to your preferred speed

    pygame.quit()
    sys.exit()

if __name__ == '__main__':
    main()
