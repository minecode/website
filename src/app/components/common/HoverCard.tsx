import { useState } from 'react';
import { THEME } from '../../constants/theme';

interface HoverCardProps {
  children: React.ReactNode;
  borderRadius?: 'lg' | '2xl' | '3xl';
  backgroundColor?: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function HoverCard({
  children,
  borderRadius = '2xl',
  backgroundColor = 'linear-gradient(135deg, rgb(24,24,27) 0%, rgb(20,20,23) 100%)',
  className = '',
  onMouseEnter,
  onMouseLeave,
}: HoverCardProps) {
  const [borderColor, setBorderColor] = useState('rgba(255,255,255,0.1)');

  const handleMouseEnter = () => {
    setBorderColor(`${THEME.colors.primary}4d`);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setBorderColor('rgba(255,255,255,0.1)');
    onMouseLeave?.();
  };

  const radiusMap = {
    lg: 'rounded-lg',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };

  return (
    <div
      className={`group relative ${radiusMap[borderRadius]} overflow-hidden transition-all duration-500 ${className}`}
      style={{
        backgroundImage: backgroundColor,
        borderColor,
        borderWidth: '1px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
