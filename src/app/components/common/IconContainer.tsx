import { useState } from 'react';
import { THEME } from '../../constants/theme';

interface IconContainerProps {
  icon: React.ComponentType<{ className: string }>;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  showHoverEffect?: boolean;
  className?: string;
}

export function IconContainer({
  icon: Icon,
  size = 'md',
  color = THEME.colors.primary,
  showHoverEffect = true,
  className = '',
}: IconContainerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeMap = {
    sm: { container: 'w-10 h-10', icon: 'w-5 h-5' },
    md: { container: 'w-12 h-12', icon: 'w-6 h-6' },
    lg: { container: 'w-14 h-14', icon: 'w-7 h-7' },
  };

  const { container, icon: iconSize } = sizeMap[size];

  return (
    <div
      className={`${container} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
        showHoverEffect && isHovered ? 'scale-110' : ''
      } ${className}`}
      style={{
        backgroundColor: showHoverEffect && isHovered ? `${color}33` : `${color}1a`,
        borderColor: `${color}4d`,
        borderWidth: '1px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={iconSize} style={{ color }} />
    </div>
  );
}
