// Brand colors and theme values
export const THEME = {
  colors: {
    primary: '#98ef3c',
    primaryHover: '#88df2c',
    primaryLight: '#98ef3c',
    primaryDark: '#78cf1c',
  },
  animation: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8,
  },
} as const;

// Reusable animation timings
export const ANIMATION_TIMINGS = {
  enterTop: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: THEME.animation.normal },
  },
  enterTopDelayed: (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: THEME.animation.normal, delay },
  }),
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  fadeInUpDelayed: (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
  }),
  scaleIn: (delay: number) => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay },
  }),
  scaleInLarge: (delay: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { delay, duration: 0.8 },
  }),
  fadeIn: (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay },
  }),
} as const;

// Reusable gradient orbs animation
export const GRADIENT_ORB_ANIMATIONS = {
  orb1: {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  orb2: {
    animate: {
      scale: [1.2, 1, 1.2],
      rotate: [90, 0, 90],
    },
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: 'linear',
    },
  },
} as const;

// Floating animation presets
export const FLOATING_ANIMATIONS = {
  float: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity },
  },
  floatInverse: {
    animate: { y: [0, 10, 0] },
    transition: { duration: 4, repeat: Infinity },
  },
  bounce: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 2, repeat: Infinity },
  },
} as const;
