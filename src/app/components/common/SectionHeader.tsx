import { motion } from 'motion/react';
import { ANIMATION_TIMINGS } from '../../constants/theme';

interface SectionHeaderProps {
  title: string;
  description: string;
  animationDelay?: number;
}

export function SectionHeader({
  title,
  description,
  animationDelay = 0,
}: SectionHeaderProps) {
  const animProps = animationDelay
    ? ANIMATION_TIMINGS.enterTopDelayed(animationDelay)
    : ANIMATION_TIMINGS.enterTop;

  return (
    <motion.div {...animProps} className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
