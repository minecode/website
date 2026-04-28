import { THEME } from '../../constants/theme';

interface GridBackgroundProps {
  opacity?: string;
  size?: string;
  color?: string;
}

export function GridBackground({
  opacity = 'opacity-5',
  size = '4rem',
  color = THEME.colors.primary,
}: GridBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${opacity}`}>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right,${color} 1px,transparent 1px),linear-gradient(to bottom,${color} 1px,transparent 1px)`,
          backgroundSize: `${size} ${size}`,
        }}
      />
    </div>
  );
}
