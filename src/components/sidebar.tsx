"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import social from "@/data/social.json";

const nav = [
  { href: "#top", label: "README.md", icon: "~" },
  { href: "#about", label: "about.ts", icon: ">" },
  { href: "#experience", label: "experience.ts", icon: ">" },
  { href: "#stack", label: "stack.ts", icon: ">" },
  { href: "#projects", label: "projects.ts", icon: ">" },
  { href: "#contact", label: "contact.ts", icon: ">" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card lg:hidden"
        aria-label="Toggle menu"
      >
        <span className="text-sm text-green">
          {open ? "×" : "$"}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-border bg-sidebar transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-border px-4 py-4">
          <a href="#top" className="group flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-green" />
            <span className="text-sm font-medium text-foreground">
              oktibor.com
            </span>
          </a>
          <p className="mt-1 text-xs text-muted">~/tibor</p>
        </div>

        <div className="px-2 py-3">
          <p className="px-2 pb-2 text-[10px] uppercase tracking-widest text-muted">
            Explorer
          </p>
          <nav className="flex flex-col gap-0.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <span className="w-3 text-[10px] text-muted group-hover:text-accent">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-border px-4 py-4">
          <div className="flex items-center gap-4">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="mt-3 text-[10px] text-muted">
            &copy; {new Date().getFullYear()} Tibor Ótott-Kovács
          </p>
        </div>
      </aside>
    </>
  );
}
