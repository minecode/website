import { motion } from 'motion/react';
import { StatCard } from '../common';

export interface Stat {
  value: string;
  label: string;
}

export interface StatsProps {
  stats?: Stat[];
}

const DEFAULT_STATS: Stat[] = [
  { value: 'Unlimited', label: 'Courts' },
  { value: '360º', label: 'Coverage' },
  { value: '100%', label: 'Up time' },
  { value: '24/7', label: 'Support' },
];

export function Stats({ stats = DEFAULT_STATS }: StatsProps) {
  return (
    <section className="py-6 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard stat={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
