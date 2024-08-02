class BarnesHutTree:
    def __init__(self, boundary, capacity):
        self.root = Node(boundary)
        self.capacity = capacity

    def insert(self, particle):
        stack = [self.root]
        while stack:
            node = stack.pop()
            if self._is_within_boundary(particle.position, node.boundary):
                if node.is_leaf():
                    if len(node.particles) < self.capacity:
                        node.particles.append(particle)
                    else:
                        self._split(node)
                        for p in node.particles:
                            self._insert_into_children(p, node)
                        node.particles = []
                        self._insert_into_children(particle, node)
                else:
                    self._insert_into_children(particle, node)
                node.particle_count += 1
                return

    def _insert_into_children(self, particle, node):
        for child in node.children:
            if self._is_within_boundary(particle.position, child.boundary):
                stack.append(child)

    def _split(self, node):
        # Create child nodes (NW, NE, SW, SE) with appropriate boundaries
        pass

    def compute_aggregate_properties(self):
        def compute(node):
            if node.is_leaf():
                if node.particles:
                    node.mass = sum(p.mass for p in node.particles)
                    node.center_of_mass = self._calculate_center_of_mass(node.particles)
            else:
                total_mass = 0
                weighted_position_sum = [0, 0]
                for child in node.children:
                    if child:
                        compute(child)
                        total_mass += child.mass
                        weighted_position_sum[0] += child.mass * child.center_of_mass[0]
                        weighted_position_sum[1] += child.mass * child.center_of_mass[1]
                node.mass = total_mass
                if total_mass > 0:
                    node.center_of_mass = (weighted_position_sum[0] / total_mass, weighted_position_sum[1] / total_mass)
        compute(self.root)

    def _calculate_center_of_mass(self, particles):
        total_mass = sum(p.mass for p in particles)
        if total_mass == 0:
            return (0, 0)
        center_of_mass = (sum(p.position[0] * p.mass for p in particles) / total_mass,
                          sum(p.position[1] * p.mass for p in particles) / total_mass)
        return center_of_mass

    def _is_within_boundary(self, position, boundary):
        # Check if the position is within the boundary
        pass
