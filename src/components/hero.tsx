"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[100dvh] flex-col justify-center px-6 py-24 sm:px-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <div className="rounded-lg border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red" />
            <span className="h-3 w-3 rounded-full bg-yellow" />
            <span className="h-3 w-3 rounded-full bg-green" />
            <span className="ml-3 text-xs text-muted">tibor@oktibor ~ </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-green">$</span>{" "}
              <span className="text-foreground">whoami</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <p className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Tibor Ótott-Kovács
              </p>
              <p className="mt-1 text-accent">Senior Software Engineer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6"
            >
              <span className="text-green">$</span>{" "}
              <span className="text-foreground">cat README.md</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-3 text-muted"
            >
              <p>
                I build and operate production systems — from application code
                to cloud infrastructure.
              </p>
              <p className="mt-2">
                10+ years of end-to-end ownership across backend engineering,
                cloud infrastructure, DevOps, and security.
              </p>
              <p className="mt-2">
                <span className="text-accent">TypeScript</span>
                {" · "}
                <span className="text-accent">Node.js</span>
                {" · "}
                <span className="text-accent">PostgreSQL</span>
                {" · "}
                <span className="text-accent">AWS</span>
                {" · "}
                <span className="text-muted">
                  serverless, workflow engines, performance-critical systems
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-6 flex items-center"
            >
              <span className="text-green">$</span>{" "}
              <span className="ml-1 inline-block h-4 w-2 bg-green animate-blink" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md border border-accent bg-accent/10 px-5 text-xs font-medium text-accent transition-all hover:bg-accent/20"
          >
            Say hello
          </a>
          <a
            href="#experience"
            className="inline-flex h-10 items-center rounded-md border border-border px-5 text-xs font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
          >
            See my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
