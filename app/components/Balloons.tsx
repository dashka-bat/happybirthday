"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// simple balloon component
export default function Balloons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const balloons = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // random horizontal position
    delay: Math.random() * 5, // random animation delay
    color: ["#ff9bb6", "#ff7790", "#ffc2d1", "#ffd6e4", "#ff8fad"][
      Math.floor(Math.random() * 5)
    ],
    scale: 0.8 + Math.random() * 0.4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon"
          style={{
            left: `${b.left}%`,
            backgroundColor: b.color,
            animationDelay: `${b.delay}s`,
            transform: `scale(${b.scale})`,
          }}
        />
      ))}
    </div>
  );
}
