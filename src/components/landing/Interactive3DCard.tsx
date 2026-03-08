import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({ children, className = "", index = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightX, setSpotlightX] = useState(50);
  const [spotlightY, setSpotlightY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX((y - centerY) / centerY * -8);
    setRotateY((x - centerX) / centerX * 8);
    setSpotlightX((x / rect.width) * 100);
    setSpotlightY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-visible bg-card border-0 ${className}`}
      style={{
        borderRadius: "2rem",
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? "translateY(-6px) scale(1.02)" : ""}`,
        boxShadow: isHovered
          ? "0 25px 60px hsl(160 100% 36% / 0.12), 0 10px 30px hsl(104 58% 41% / 0.08)"
          : "0 8px 30px rgb(0 0 0 / 0.04)",
        transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
      }}
    >
      {/* Spotlight overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-60"
          style={{
            background: `radial-gradient(350px circle at ${spotlightX}% ${spotlightY}%, hsl(160 100% 36% / 0.12), transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default Interactive3DCard;
