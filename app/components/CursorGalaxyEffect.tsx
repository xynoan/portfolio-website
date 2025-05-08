"use client";

import { useState, useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
  orbitRadius: number;
  orbitSpeed: number;
}

export default function CursorGalaxyEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMoving = useRef(false);
  const animationFrameId = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Handle mouse movement
  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      isMoving.current = true;
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(moveTimeout);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Animation loop with performance optimization
  useEffect(() => {
    const colors = [
      "#9370db", // Light purple
      "#8a2be2", // Purple
      "#4b0082", // Indigo
      "#ffffff", // White (stars)
      "#9932cc", // Dark orchid
      "#e6e6fa", // Lavender
      "#dda0dd", // Plum
    ];
    
    const animate = (timestamp: number) => {
      // Throttle animations - only run every ~16ms (60fps)
      if (timestamp - lastTimeRef.current >= 16) {
        lastTimeRef.current = timestamp;
        
        // Generate new particles when mouse is moving
        if (isMoving.current && mousePosition.x !== 0 && mousePosition.y !== 0) {
          const particleCount = 3; // Reduced from 5
          const newParticles = Array.from({ length: particleCount }).map((_, i) => {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 1.2 + 0.2; // Slightly slower
            const size = Math.random() * 3 + 0.5; // Slightly smaller
            const maxLife = Math.random() * 50 + 20; // Shorter lifespan
            const orbitRadius = Math.random() * 15 + 3;
            const orbitSpeed = (Math.random() * 0.03 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
            
            return {
              id: Date.now() + i,
              x: mousePosition.x + Math.cos(angle) * (Math.random() * 8),
              y: mousePosition.y + Math.sin(angle) * (Math.random() * 8),
              size,
              color: colors[Math.floor(Math.random() * colors.length)],
              opacity: 0.7,
              speed,
              angle,
              life: 0,
              maxLife,
              orbitRadius,
              orbitSpeed,
            };
          });

          setParticles(prev => [...prev, ...newParticles]);
        }

        // Update existing particles
        setParticles(prev => 
          prev
            .map(particle => {
              // Orbital movement calculation
              const orbitAngle = particle.life * particle.orbitSpeed;
              const orbitX = Math.cos(orbitAngle) * particle.orbitRadius;
              const orbitY = Math.sin(orbitAngle) * particle.orbitRadius;
              
              // Linear movement + orbital
              const newX = particle.x + Math.cos(particle.angle) * particle.speed + orbitX * 0.05;
              const newY = particle.y + Math.sin(particle.angle) * particle.speed + orbitY * 0.05;
              
              // Gradually decrease opacity as life progresses
              const opacityFactor = 1 - (particle.life / particle.maxLife);
              
              return {
                ...particle,
                x: newX,
                y: newY,
                opacity: particle.opacity * opacityFactor,
                size: particle.size * (0.95 + opacityFactor * 0.05),
                life: particle.life + 1
              };
            })
            .filter(particle => particle.life < particle.maxLife)
        );
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animationFrameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mousePosition]);

  // Only render if there are particles to show
  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%)`,
            boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
} 