import { motion } from 'motion/react';
import { GridBackground, SectionHeader } from '../common';
import { Link } from 'react-router';

export function Demo() {
  return (
        <section className="py-24 relative">

          <GridBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <SectionHeader
              title="Ready to transform your sports complex?"
              description="Join hundreds of sports complexes using Court360 to streamline their operations."
            />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-10 py-5 bg-[#98ef3c] hover:bg-[#88df2c] text-black font-bold rounded-xl transition-all hover:scale-105 text-lg"
              >
                Demo Request
              </Link>
              <a
                href="/#contact"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all text-lg"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
