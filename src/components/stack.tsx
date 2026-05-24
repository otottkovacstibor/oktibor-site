"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import categories from "@/data/stack.json";

export function Stack() {
  return (
    <Section
      id="stack"
      title="Stack & Toolbox"
      subtitle="The technologies and tools I work with daily."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 0.1}>
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border/50 bg-background px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
