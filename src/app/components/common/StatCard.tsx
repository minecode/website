import { THEME } from '../../constants/theme';

interface StatCardProps {
  stat: string;
  label: string;
}

export function StatCard({ stat, label }: StatCardProps) {
  return (
    <div>
      <div
        className="text-3xl font-bold"
        style={{ color: THEME.colors.primary }}
      >
        {stat}
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
}
