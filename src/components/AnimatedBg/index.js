import './index.css';
import WindowSize from './windowSize';
import { useEffect } from 'react';

const AnimatedBg = () => {

  const canvas = document.getElementById('canvas-main')
  const ctx = canvas.getContext('2d');
  const {innerHeight, innerWidth} = WindowSize();
  canvas.width = innerWidth
  canvas.height = innerHeight

  let particlesArray;

  let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
  }

  useEffect(() => {
    function handleMouseMove(e) {
      mouse.x = e.x;
      mouse.y = e.y;
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.addEventListener('mousemove', handleMouseMove);
    }
  })
    // || class to create particle objects
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = '#00ffc2';
    ctx.fill();
  }

  getRandomNum() {
    return Math.random() * (7 - 0) + 0;
  }
  // || For particle position = mouse position
  update() {
    // || view particle coordinates in relation to screen-viewport
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    // || collision detection - mouse position / particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y < this.size * 10) {
        this.y -= 10;
      }
    }
    // || particle movement & drawing
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(this.getRandomNum());
  }
}


// || create particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.width) / 90;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = '#00ffc2';
    particlesArray.push(new Particle(x, y, directionX, directionY, size, color))
  }
}

// || animation for loop
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  particlesArray.map(val => val.update());
  connect()
}

// || Distance between particles
function connect() {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = (( particlesArray[a].x - particlesArray[b].x) 
      * (particlesArray[a].x - particlesArray[b].x))
      + ((particlesArray[a].y - particlesArray[b].y) 
      * (particlesArray[a].y) - particlesArray[b].y);
      if (distance < (canvas.height * canvas.width/9000) * (canvas.width * canvas.height/900)) {
        opacityValue = 1 - (distance / 50000)
        ctx.strokeStyle='rgba(0, 144, 212,' + opacityValue + ")";
        ctx.lineWidth = .5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}
// || When mouse is out of window area.
function handleMouseOut(){
    mouse.x = undefined;
    mouse.y = undefined;
  }

  window.addEventListener('mouseout', handleMouseOut);

init();
animate();

  return (
    <div className='canvas-container'>
    <script></script>
      {/* <canvas id="canvas-main"></canvas> */}
    </div>
  )
}

export default AnimatedBg
