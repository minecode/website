import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#98ef3c]/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#98ef3c]/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-[#98ef3c]/30 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-[#98ef3c]" />
              <span className="text-sm text-gray-300">Innovation in Development</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                We turn
                <br />
                <span className="text-[#98ef3c]">
                  Ideas into Code
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                We develop innovative digital solutions using cutting-edge technologies.
                From conception to implementation, we create experiences that make a difference.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-[#98ef3c] hover:bg-[#88df2c] text-black group font-semibold"
              >
                Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#services')}
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-[#98ef3c]/50 hover:text-white"
              >
                Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl font-bold text-[#98ef3c]">
                  100+
                </div>
                <div className="text-sm text-gray-400 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#98ef3c]">
                  50+
                </div>
                <div className="text-sm text-gray-400 mt-1">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#98ef3c]">
                  5+
                </div>
                <div className="text-sm text-gray-400 mt-1">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#98ef3c]/20 shadow-2xl shadow-[#98ef3c]/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#98ef3c]/10 to-transparent" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0ODkxOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern coding workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-gradient-to-br from-[#98ef3c] to-[#78cf1c] p-4 rounded-xl shadow-xl border border-[#98ef3c]/30"
            >
              <div className="text-black text-sm font-semibold">⚡ Performance</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-black border-2 border-[#98ef3c] p-4 rounded-xl shadow-xl shadow-[#98ef3c]/20"
            >
              <div className="text-[#98ef3c] text-sm font-semibold">🎨 Modern design</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#98ef3c]/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#98ef3c] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
