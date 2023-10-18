// Constants
const g = 9.81; // Acceleration due to gravity (m/s²)
const L = 0.5; // Length of the pendulum (m)
const R = 0.1; // Air resistance
const m = 0.5; // Mass of the pendulum (kg)
const M = 1; // Mass of the movable origin (kg)

// Initial conditions
let theta = Math.PI / 3; // Initial angle in radians
let omega = 0; // Initial angular velocity
let x = 0; // Initial position of the movable origin
let v = 0; // Initial velocity of the movable origin

// Simulation parameters
const dt = 0.01; // Time step (s)
const totalTime = 5; // Total simulation time (s)

// Simulate the motion
for (let t = 0; t <= totalTime; t += dt) {
  // Calculate angular acceleration
  const alpha = -((g / L) * Math.sin(theta)) - ((R / m) * omega);

  // Update angular velocity and angle using Euler's method
  omega += alpha * dt;
  theta += omega * dt;

  // Calculate acceleration of the movable origin
  const a = (L * omega * omega * Math.sin(theta) - g * Math.sin(theta)) / (1 + m / M);

  // Update velocity and position of the movable origin using Euler's method
  v += a * dt;
  x += v * dt;

  // Output the current time, angle, and position
  console.log(`Time: ${t.toFixed(2)}s, Angle: ${theta.toFixed(2)} rad, Position: ${x.toFixed(2)}m`);
}