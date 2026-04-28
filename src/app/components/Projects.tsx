import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#98ef3c_1px,transparent_1px),linear-gradient(to_bottom,#98ef3c_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that turn ideas into extraordinary digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl overflow-hidden border border-white/10 hover:border-[#98ef3c]/30 transition-all duration-500">
            {/* Image */}
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558453975-d6c57ab62b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb3VydCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzc0OTQ1MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Court360"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-[#98ef3c]/90 backdrop-blur-sm rounded-full text-black font-semibold text-sm">
                Featured Product
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 relative">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 transition-colors">
                COURT<b className='text-[#98ef3c]'>360</b>
              </h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                A digital scoreboard system where you can track the scores of multiple games simultaneously and in real time.
It makes your gaming experience more immersive, allowing you to focus your mind exclusively on gameplay while letting the technology handle the scoring.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Scoreboarding', 'IoT Devices', 'Cloud', 'Mobile App', 'Analytics'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/court360"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#98ef3c] hover:bg-[#88df2c] text-black font-semibold rounded-xl transition-all hover:scale-105"
                >
                  More
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all"
                >
                  Demo Request
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#98ef3c]/10 rounded-full blur-3xl group-hover:bg-[#98ef3c]/20 transition-all duration-700"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
