import random
import math
import signal

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

class Particle:
    def __init__(self, x, y, v, mass):
        self.x = x
        self.y = y
        self.v = v
        self.mass = mass

def rand_num(min_val, max_val):
    return random.uniform(min_val, max_val)

MAX_INITIAL_DISTANCE = 200
INTERVAL_SECONDS = 10e10
NUM_PARTICLES = 10000
G = 6.6743e-11  # real
# G = 6.6743e-6
EARTH_LIKE_MASS_KG = 5.972e24
MOON_LIKE_MASS_KG = 7.348e22
HYDROGEN_MASS_KG = 1.67e-27
COLLISION_DISTANCE_METERS = 2
MINIMUM_FORCE_DISTANCE_METERS = 2

def create_random_particle():
    return Particle(
        x=rand_num(0, 1600),
        y=rand_num(0, 1000),
        v=Vector(0, 0),
        mass=HYDROGEN_MASS_KG * 60e25
    )

def distance(p1, p2):
    dx = p2.x - p1.x
    dy = p2.y - p1.y
    return math.sqrt(dx * dx + dy * dy)

def calculate_gravitational_force(p1, p2):
    dx = p2.x - p1.x
    dy = p2.y - p1.y
    dist = math.sqrt(dx * dx + dy * dy)
    
    if dist < MINIMUM_FORCE_DISTANCE_METERS:
        return Vector(0, 0)
    
    force_magnitude = (G * p1.mass * p2.mass) / (dist * dist)
    force_x = (force_magnitude * dx) / dist
    force_y = (force_magnitude * dy) / dist
    
    return Vector(force_x, force_y)

def apply_force(particle, force, delta_time):
    acceleration_x = force.x / particle.mass
    acceleration_y = force.y / particle.mass
    
    particle.v.x += acceleration_x * delta_time
    particle.v.y += acceleration_y * delta_time

def vector_sum(x, y):
    return x + y

def add_vectors(vectors):
    x_sum = sum([v.x for v in vectors])
    y_sum = sum([v.y for v in vectors])
    return Vector(x_sum, y_sum)

collision_count = 0
particle_count = NUM_PARTICLES
max_mass = 0

def combine_particles(particles):
    global collision_count, particle_count, max_mass
    combined_particles = []
    deleted_indexes = {}

    for i, particle1 in enumerate(particles):
        if i in deleted_indexes:
            continue
        
        for j in range(i + 1, len(particles)):
            if j in deleted_indexes:
                continue
            particle2 = particles[j]
            
            dx = particle1.x - particle2.x
            dy = particle1.y - particle2.y
            dist = math.sqrt(dx * dx + dy * dy)
            
            if dist < COLLISION_DISTANCE_METERS:
                total_mass = particle1.mass + particle2.mass
                collision_count += 1
                particle_count -= 1
                max_mass = max(max_mass, total_mass)
                
                combined_vx = (particle1.mass * particle1.v.x + particle2.mass * particle2.v.x) / total_mass
                combined_vy = (particle1.mass * particle1.v.y + particle2.mass * particle2.v.y) / total_mass
                
                particle1.mass = total_mass
                particle1.v = Vector(combined_vx, combined_vy)
                
                deleted_indexes[j] = True
                break
        
        combined_particles.append(particle1)
    
    return combined_particles

def update_particles(particles):
    for p in particles:
        p.x += p.v.x
        p.y += p.v.y
        
        force_vector = add_vectors([calculate_gravitational_force(p, p2) for p2 in particles])
        apply_force(p, force_vector, INTERVAL_SECONDS)
    
    return combine_particles(particles)

def print_particles(particles):
    for p in particles:
        print(f"{p.x},{p.y},{p.mass}")
    print("---")

particles = [create_random_particle() for _ in range(NUM_PARTICLES)]

interrupted = False

def shutdown(signal, frame):
    global interrupted
    interrupted = True

signal.signal(signal.SIGINT, shutdown)

i = 0
while not interrupted:
    i += 1
    print(i)
    particles = update_particles(particles)
    print_particles(particles)

# Uncomment the line below to shutdown after a specified time
# import threading
# threading.Timer(10, shutdown).start()
