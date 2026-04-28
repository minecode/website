import { THEME } from '../../constants/theme';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <div
      className={`px-4 py-2 rounded-full text-black font-semibold text-sm backdrop-blur-sm ${className}`}
      style={{ backgroundColor: `${THEME.colors.primary}90` }}
    >
      {children}
    </div>
  );
}
