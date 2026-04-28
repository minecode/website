interface TechTagProps {
  label: string;
  className?: string;
}

export function TechTag({ label, className = '' }: TechTagProps) {
  return (
    <span
      className={`px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 ${className}`}
    >
      {label}
    </span>
  );
}
