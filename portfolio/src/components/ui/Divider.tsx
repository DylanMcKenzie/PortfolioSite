import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={`max-w-xl mx-auto my-8 relative ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse-slow shadow-glow"></div>
    </div>
  );
};

export default Divider;
