import React, { useRef, useEffect } from 'react';

const StarParticles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const centerX = width / 2;
    const centerY = height / 2;

    const createParticle = (x, y) => {
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 160) return; // avoid spawning in center text area

      particles.current.push({
        x,
        y,
        size: Math.random() * 1.5 + 0.5,
        velocityX: (Math.random() - 0.5) * 0.1, // super slow
        velocityY: (Math.random() - 0.5) * 0.1,
        alpha: 1,
      });
    };

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      frameCount++;
      if (frameCount % 8 === 0) {
        // Only emit every 8th frame (~7-8x slower)
        for (let i = 0; i < 1; i++) {
          const x = Math.random() * width;
          const y = Math.random() * height;
          createParticle(x, y);
        }
      }

      particles.current.forEach((p, i) => {
        p.x += p.velocityX;
        p.y += p.velocityY;
        p.alpha -= 0.001;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < 12; i++) {
        createParticle(clickX, clickY);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default StarParticles;
