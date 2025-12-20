'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function AnimatedTechBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = 100;
    const particles = [];

    // ألوان الجزيئات حسب الثيم
    const particleColors = theme === 'dark'
      ? { dot: 'rgba(180, 150, 255, OPACITY)', line: 'rgba(180, 150, 255, 0.15)' }
      : { dot: 'rgba(200, 200, 255, OPACITY)', line: 'rgba(200, 200, 255, 0.15)' };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.7 + 0.3;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColors.dot.replace('OPACITY', this.opacity);
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        this.draw();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = particleColors.line;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      // gradient background حسب الثيم
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (theme === 'dark') {
        gradient.addColorStop(0, '#0b0218');
        gradient.addColorStop(0.5, '#11001f');
        gradient.addColorStop(1, '#1a0b3d');
      } else {
        gradient.addColorStop(0, '#f0f4ff');
        gradient.addColorStop(0.5, '#e0e8ff');
        gradient.addColorStop(1, '#d0dfff');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => p.update());
      drawLines();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 transition-colors duration-500"
    />
  );
}
