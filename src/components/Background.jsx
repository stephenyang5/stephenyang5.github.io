import { useEffect, useRef } from 'react';
import styles from '../styles/Background.module.css';

const SPACING    = 28;
const DOT_R      = 1.4;
const REPEL_R    = 60;
const SPRING     = 0.04;
const DAMP       = 0.82;
const STRENGTH   = 6.5;

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let raf;
    let w, h;

    const build = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      dots = [];
      for (let x = SPACING / 2; x < w; x += SPACING) {
        for (let y = SPACING / 2; y < h; y += SPACING) {
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const color = getComputedStyle(document.body)
        .getPropertyValue('--text').trim() || '#000';

      dots.forEach(d => {
        d.vx += (d.ox - d.x) * SPRING;
        d.vy += (d.oy - d.y) * SPRING;

        const dx   = d.x - mouseX;
        const dy   = d.y - mouseY;
        const dist = Math.hypot(dx, dy);

        if (dist < REPEL_R && dist > 0) {
          const f = (1 - dist / REPEL_R) * STRENGTH;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }

        d.vx *= DAMP;
        d.vy *= DAMP;
        d.x  += d.vx;
        d.y  += d.vy;

        const disp = Math.hypot(d.x - d.ox, d.y - d.oy);
        const r    = DOT_R + disp * 0.02;
        const alpha = 0.18 + Math.min(disp * 0.012, 0.32);

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onMove  = e => { mouseX = e.clientX; mouseY = e.clientY; };
    const onLeave = ()  => { mouseX = -9999;    mouseY = -9999; };
    const onResize = () => build();

    build();
    draw();

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize',     onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize',     onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.bg} aria-hidden="true" />;
};

export default Background;
