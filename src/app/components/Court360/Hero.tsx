import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#98ef3c]/5 to-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#98ef3c]/10 border border-[#98ef3c]/30 rounded-full text-[#98ef3c] text-sm font-medium mb-6">
              Advanced Digital Scoreboard
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              COURT<b className='text-[#98ef3c]'>360</b>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              A digital scoreboard system where you can track the scores of multiple games simultaneously and in real time.
It makes your gaming experience more immersive, allowing you to focus your mind exclusively on gameplay while letting the technology handle the scoring.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-[#98ef3c] hover:bg-[#88df2c] text-black font-semibold rounded-xl transition-all hover:scale-105"
              >
                Demo Request
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#98ef3c]/20 blur-3xl rounded-full"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558453975-d6c57ab62b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb3VydCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzc0OTQ1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Court360"
              className="relative rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
