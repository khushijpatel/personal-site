"use client";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

// Type definitions
type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// Simple, Clean Globe Component
function SimpleGlobe({ globeConfig, data }: WorldProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '400px' }}>
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '400px' }}>
      {/* Globe Container */}
      <div className="relative">
        {/* Main Globe */}
        <div 
          className={`
            relative w-64 h-64 rounded-full 
            ${globeConfig.autoRotate ? 'animate-spin' : ''}
            bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950
            shadow-2xl shadow-blue-500/20
            border border-blue-400/20
          `}
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              ${globeConfig.globeColor || '#1e3a8a'} 0%,
              ${globeConfig.emissive || '#1e40af'} 50%,
              ${globeConfig.atmosphereColor || '#1e293b'} 100%)`,
            animationDuration: `${20 / (globeConfig.autoRotateSpeed || 0.5)}s`
          }}
        >
          {/* Globe Icon in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Globe 
              size={80} 
              className="text-blue-300/60 animate-pulse" 
              strokeWidth={1}
            />
          </div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0 rounded-full border border-blue-400/20" />
          <div 
            className="absolute inset-0 rounded-full border border-blue-400/20 transform rotate-45"
          />
          <div 
            className="absolute inset-0 rounded-full border border-blue-400/20 transform rotate-90"
          />
          
          {/* Connection Points */}
          {data.slice(0, 8).map((connection, index) => {
            const angle = (index * 360) / 8;
            const radius = 100; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute w-3 h-3 rounded-full animate-pulse"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  backgroundColor: connection.color,
                  boxShadow: `0 0 15px ${connection.color}`,
                  animationDelay: `${index * 0.3}s`,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}
        </div>
        
        {/* Atmosphere Effect */}
        {globeConfig.showAtmosphere && (
          <div 
            className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
            style={{
              width: '110%',
              height: '110%',
              top: '-5%',
              left: '-5%',
              background: `radial-gradient(circle, 
                transparent 60%, 
                ${globeConfig.atmosphereColor || 'rgba(59, 130, 246, 0.1)'} 70%,
                ${globeConfig.atmosphereColor || 'rgba(59, 130, 246, 0.3)'} 100%)`,
              animationDuration: '3s'
            }}
          />
        )}
        
        {/* Connection Arcs */}
        <div className="absolute inset-0">
          {data.slice(0, 6).map((connection, index) => {
            const startAngle = (index * 60);
            const endAngle = ((index + 2) * 60);
            
            return (
              <div
                key={`arc-${index}`}
                className="absolute inset-0 rounded-full border opacity-50 animate-pulse"
                style={{
                  borderColor: connection.color,
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  transform: `rotate(${startAngle}deg)`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${globeConfig.arcTime || 2000}ms`
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Main World component
export function World(props: WorldProps) {
  return <SimpleGlobe {...props} />;
}

// Utility functions
export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
