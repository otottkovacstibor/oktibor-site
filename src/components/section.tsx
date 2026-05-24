"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  filename?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  filename,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-6 py-16 sm:px-12 ${className}`}>
      <div className="max-w-3xl">
        {(title || filename) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            {filename && (
              <p className="mb-2 text-xs text-muted">
                <span className="text-yellow">~</span>/{filename}
              </p>
            )}
            {title && (
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
