"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={cn("h-full relative bg-white w-full", containerClassName)}>
        <div className="h-full w-full" />
        {showGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
        )}
      </div>
    );
  }

  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <SimpleDotMatrix
        colors={colors}
        dotSize={dotSize}
        opacities={opacities}
        animationSpeed={animationSpeed}
      />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Simple CSS-based Dot Matrix Component
interface SimpleDotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  dotSize?: number;
  animationSpeed?: number;
}

const SimpleDotMatrix: React.FC<SimpleDotMatrixProps> = ({
  colors = [[0, 255, 255]],
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  dotSize = 3,
  animationSpeed = 0.4,
}) => {
  // Convert colors to CSS format
  const cssColors = colors.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`);
  
  // Generate grid of dots
  const gridSize = 20; // 20x20 grid
  const dots = [];
  
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const colorIndex = Math.floor(Math.random() * cssColors.length);
      const opacityIndex = Math.floor(Math.random() * opacities.length);
      const delay = (row + col) * 0.1 * animationSpeed;
      
      dots.push({
        id: `${row}-${col}`,
        x: (col / gridSize) * 100,
        y: (row / gridSize) * 100,
        color: cssColors[colorIndex],
        opacity: opacities[opacityIndex],
        delay,
      });
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes dotReveal {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: var(--final-opacity);
            transform: scale(1);
          }
        }
        
        .dot {
          animation: dotReveal ${2 / animationSpeed}s ease-out forwards;
        }
      `}</style>
      
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="dot absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: dot.color,
            '--final-opacity': dot.opacity,
            animationDelay: `${dot.delay}s`,
            boxShadow: `0 0 ${dotSize * 2}px ${dot.color}`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};
