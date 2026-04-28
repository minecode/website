import { THEME } from '../../constants/theme';

interface CTAButtonProps {
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function CTAButton({
  onClick,
  href,
  variant = 'primary',
  children,
  className = '',
  icon,
}: CTAButtonProps) {
  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      {icon}
    </span>
  );

  const primaryClass = `bg-[${THEME.colors.primary}] hover:bg-[${THEME.colors.primaryHover}] text-black font-semibold rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2 px-6 py-3`;
  const outlineClass = `inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all`;

  const baseClass = variant === 'primary' ? primaryClass : outlineClass;

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {content}
    </button>
  );
}
