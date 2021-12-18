# Boids

This repository is a project putting into practice [an algorithm developed by Craig Reynolds in 1986](https://www.red3d.com/cwr/boids/) to simulate the natural flocking behaviours of animals like fish and birds. It elegantly presents only three rules that all members of the "flock" must follow: seperation, alignment and cohesion. When each individual follows these rules, the emergent property of "flocking" appears.

While it looks simple, this simulation is interesting because the individual “boids” are never actually told to flock or group up, they simply perform a set of actions every single frame so that they follow the three rules. The actions of each boid are coded in the [boid.js](./boid.js) file. The end result is a chaotic system (where even a small adjustment to the starting parameters will lead to a totally different outcome).

The HTML file in this repository is where the simulation lives. A link is also included below to a video of my take on flocking.

[Flocking Simulation Video](https://youtu.be/u7uvoEXbjl4)

