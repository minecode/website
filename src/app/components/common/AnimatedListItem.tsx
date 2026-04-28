import { motion } from 'motion/react';

interface AnimatedListItemProps {
  index: number;
  children: React.ReactNode;
  delay?: number;
  withHoverEffect?: boolean;
  className?: string;
  hoverY?: number;
}

export function AnimatedListItem({
  index,
  children,
  delay = 0.1,
  withHoverEffect = false,
  className = 'group relative',
  hoverY = -8,
}: AnimatedListItemProps) {
  const hoverProps = withHoverEffect
    ? { whileHover: { y: hoverY, transition: { duration: 0.2 } } }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * delay, duration: 0.6 }}
      {...hoverProps}
      className={className}
    >
      {children}
    </motion.div>
  );
}
