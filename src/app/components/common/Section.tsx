import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  background?: boolean;
  children?: React.ReactNode;
}

const Section = ({
  title,
  description,
  icon: Icon,
  background = true,
  children,
}: SectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9 }}
      className="mt-6 mb-6 relative group"
    >
      {background && <div className="absolute inset-0 bg-[#98ef3c]/20 blur-2xl group-hover:blur-3xl transition-all" />}
      <div className={`relative rounded-2xl overflow-hidden transition-transform ${background ? "p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-[#98ef3c]/40 " : "py-6"}`}>
      {Icon && title && description && (
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#98ef3c]/10 border border-[#98ef3c] flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-[#98ef3c]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">
              {description}
            </p>
          </div>
        </div>
      )}
      {Icon && title && description && children && (<div className="mb-6" />)}
      { children}
      </div>
    </motion.div>
  );
};

export default Section;
