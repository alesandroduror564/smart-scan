/* filename: complexCode.js */

// This code generates a complex fractal image using the Mandelbrot set algorithm

// Canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

// Complex number class
class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  square() {
    const realPart = this.real * this.real - this.imaginary * this.imaginary;
    const imaginaryPart = 2 * this.real * this.imaginary;
    return new Complex(realPart, imaginaryPart);
  }

  add(other) {
    return new Complex(this.real + other.real, this.imaginary + other.imaginary);
  }

  absolute() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }
}

// Mandelbrot set algorithm
function mandelbrot(c, maxIterations) {
  let z = new Complex(0, 0);
  let n = 0;
  while (n < maxIterations && z.absolute() < 4) {
    z = z.square().add(c);
    n++;
  }
  return n;
}

// Parameters
const iterations = 1000;
const zoom = 1.5;
const panX = 2;
const panY = 1.5;

// Drawing the Mandelbrot set
function drawMandelbrot() {
  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const real = (x - canvas.width / 2) * zoom / canvas.width + panX;
      const imaginary = (y - canvas.height / 2) * zoom / canvas.height + panY;
      const c = new Complex(real, imaginary);
      const iterations = mandelbrot(c, 1000);
      const brightness = 255 - (iterations * 255) / 1000;
      ctx.fillStyle = 'rgb(' + 0 + ',' + brightness + ',' + brightness + ')';
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

drawMandelbrot();