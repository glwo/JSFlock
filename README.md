# Boid Simulation

This project is a Boid simulation implemented in p5.js. Boids are simple agents that exhibit complex group behaviors by following three fundamental rules: separation, alignment, and cohesion. In this README, we'll explain each of these components and how they contribute to the overall behavior of the Boids.

## Separation

**Separation** is the first key component of the Boid simulation. It is the principle of avoiding crowding nearby Boids. In other words, each Boid tries to maintain a safe distance from its neighbors. This behavior is essential for preventing collisions and maintaining the individual space of each Boid.

In code, separation is achieved by calculating the vector pointing away from each neighboring Boid within a defined radius. These vectors are then summed and applied to the Boid's acceleration. The result is that Boids tend to steer away from each other, creating space between them.

## Alignment

**Alignment** is the second crucial component of the simulation. It involves Boids trying to align their velocity vectors with those of nearby Boids. This behavior leads to Boids moving in the same general direction as their neighbors, creating group cohesion and a sense of direction within the flock.

To implement alignment, we calculate the average velocity of neighboring Boids within a certain radius and set the current Boid's velocity in that direction. This makes Boids move together and mimic the heading of their nearby companions.

## Cohesion

**Cohesion** is the third and final key element of the Boid simulation. It represents Boids' tendency to move toward the average position of nearby Boids. Cohesion ensures that Boids stay together as a group and don't disperse too far apart.

To achieve cohesion, we calculate the average position of neighboring Boids within a specific radius and then steer the current Boid toward that average position. This helps in maintaining the overall unity of the flock.

## How These Components Interact

In the simulation, these three components work together to create emergent behaviors. Boids balance their desire to avoid collisions (separation), move in the same general direction (alignment), and stay close to their peers (cohesion). This balance leads to visually engaging flocking patterns, such as schooling fish or flocking birds.

Feel free to adjust the sliders provided in the simulation to control the strengths of these behaviors and observe how they affect the overall movement and cohesion of the Boid flock.

## Getting Started

1. Clone this repository or download the code files.

2. Open `index.html` in a web browser to run the Boid simulation.

3. Use the sliders to adjust the strengths of separation, alignment, and cohesion to observe their effects on the Boid flock.

## Credits

This project is inspired by Craig Reynolds' original Boid algorithm, which simulates the collective behavior of agents in a group.

