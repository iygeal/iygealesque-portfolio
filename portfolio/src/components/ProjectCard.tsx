'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type ProjectCardProps = {
  children: React.ReactNode;
};

export default function ProjectCard({ children }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -1, scale: 1.005 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div
        className={clsx(
          'bg-slate-900/60',
          'border border-slate-800',
          'rounded-xl',
          'p-5 sm:p-8',
          'space-y-6',
          'transition-colors duration-200',
          'hover:border-slate-700', // 👈 subtle visual feedback
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
