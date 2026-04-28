import { THEME } from '../../constants/theme';

interface FloatingCardProps {
  content: React.ReactNode;
  position: 'top-right' | 'bottom-left';
  variant?: 'primary' | 'dark';
}

export function FloatingCard({
  content,
  position,
  variant = 'primary',
}: FloatingCardProps) {
  const positionClasses = {
    'top-right': '-top-8 -right-8',
    'bottom-left': '-bottom-8 -left-8',
  };

  const variantClasses = {
    primary: `bg-gradient-to-br from-[${THEME.colors.primary}] to-[${THEME.colors.primaryDark}] text-black border border-[${THEME.colors.primary}]/30`,
    dark: `bg-black border-2 border-[${THEME.colors.primary}]`,
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} p-4 rounded-xl shadow-xl ${
        variant === 'primary'
          ? `bg-gradient-to-br text-black border`
          : `bg-black border-2`
      }`}
      style={
        variant === 'primary'
          ? {
              backgroundImage: `linear-gradient(135deg, ${THEME.colors.primary}, ${THEME.colors.primaryDark})`,
              borderColor: `${THEME.colors.primary}4d`,
            }
          : {
              borderColor: THEME.colors.primary,
              boxShadow: `0 0 20px ${THEME.colors.primary}33`,
            }
      }
    >
      <div
        className="text-sm font-semibold"
        style={variant === 'dark' ? { color: THEME.colors.primary } : {}}
      >
        {content}
      </div>
    </div>
  );
}
