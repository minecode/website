import { motion } from 'motion/react';
import { Code2, Smartphone, Globe, Palette, Database, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'DevOps Consulting',
      description: 'Consulting services for small and new businesses looking to expand and improve their development processes.',
    },
    {
      icon: Database,
      title: 'API development',
      description: 'Robust backend architecture and scalable, secure APIs.',
    },
    {
      icon: Code2,
      title: 'Custom development',
      description: 'Customized solutions to meet the specific needs of your business.',
    },
    {
      icon: Palette,
      title: 'Web development',
      description: 'Designing intuitive interfaces and memorable user experiences.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Development of native and hybrid apps for iOS and Android.',
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Performance optimization and SEO strategies for maximum visibility.',
    },
  ];

  return (
    <section id="services" className="min-h-screen py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
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
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive development solutions to bring your project to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-2xl p-8 hover:border-[#98ef3c]/50 transition-all duration-300 relative overflow-hidden">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#98ef3c]/10 border border-[#98ef3c]/30 flex items-center justify-center mb-6 group-hover:bg-[#98ef3c]/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#98ef3c]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#98ef3c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
