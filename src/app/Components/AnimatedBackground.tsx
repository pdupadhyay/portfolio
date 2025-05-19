"use client"
import { useEffect, useRef } from 'react';

class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    speedX: number;
    speedY: number;
    color: string;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 1;
        this.density = (Math.random() * 20) + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;

        // More vibrant colors with higher opacity
        const colors = ['rgba(59, 130, 246, 0.8)', 'rgba(79, 70, 229, 0.8)', 'rgba(99, 102, 241, 0.8)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update(mouse: { x: number; y: number; radius: number }) {
        // Free movement when no mouse interaction
        if (!mouse.x) {
            // Bounce off edges
            if (this.x > this.canvas.width || this.x < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y > this.canvas.height || this.y < 0) {
                this.speedY = -this.speedY;
            }

            this.x += this.speedX;
            this.y += this.speedY;
            return;
        }

        // Calculate distance between particle and mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Avoid division by zero
        if (distance === 0) return;

        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;

        // Maximum distance the particles are affected by the mouse
        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;

        // If we're within the mouse radius
        if (distance < maxDistance) {
            // Push particles away from mouse
            this.x -= forceDirectionX * force * this.density;
            this.y -= forceDirectionY * force * this.density;
        } else {
            // Return to original position
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx / 20;
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy / 20;
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, radius: 120 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match window with proper scaling
        const resizeCanvas = () => {
            const devicePixelRatio = window.devicePixelRatio || 1;

            // Set actual size in memory (scaled for higher resolution)
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;

            // Set the display size
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';

            // Scale the context to ensure correct drawing operations
            ctx.scale(devicePixelRatio, devicePixelRatio);

            // Reinitialize particles when canvas size changes
            initParticles();
        };

        const initParticles = () => {
            try {
                // Increase particle count for better visual effect
                const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
                particlesRef.current = Array.from({ length: numberOfParticles }, () => new Particle(canvas));
            } catch (err) {
                console.error("Error initializing particles:", err);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            try {
                const rect = canvas.getBoundingClientRect();
                mouseRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                    radius: 120
                };
            } catch (err) {
                console.error("Error handling mouse move:", err);
            }
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: 0, y: 0, radius: 120 };
        };

        // Attach events directly to canvas for better performance
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', resizeCanvas);

        resizeCanvas();

        const connectParticles = () => {
            try {
                const particles = particlesRef.current;
                for (let a = 0; a < particles.length; a++) {
                    for (let b = a; b < particles.length; b++) {
                        const dx = particles[a].x - particles[b].x;
                        const dy = particles[a].y - particles[b].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        // Distance based on screen size
                        const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.1;

                        if (distance < maxDistance) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(99, 102, 241, ${0.3 - (distance / maxDistance) * 0.2})`;
                            ctx.lineWidth = 0.6;
                            ctx.moveTo(particles[a].x, particles[a].y);
                            ctx.lineTo(particles[b].x, particles[b].y);
                            ctx.stroke();
                        }
                    }
                }
            } catch (err) {
                console.error("Error connecting particles:", err);
            }
        };

        const animate = () => {
            try {
                // Only animate when tab is visible for performance
                if (document.visibilityState === 'visible') {
                    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    const particles = particlesRef.current;
                    for (let i = 0; i < particles.length; i++) {
                        particles[i].update(mouseRef.current);
                        particles[i].draw(ctx);
                    }
                    connectParticles();
                }
            } catch (err) {
                console.error("Animation error:", err);
            }

            // Store the animation frame ID for cleanup
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start the animation
        animate();

        // Clean up
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);

            // Cancel animation frame when component unmounts
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen z-0 opacity-80 pointer-events-none"
            style={{ inset: 0, position: 'fixed' }}
            aria-hidden="true"
        />
    );
};

export default AnimatedBackground;