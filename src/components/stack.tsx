"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import categories from "@/data/stack.json";

export function Stack() {
  return (
    <Section id="stack" title="Stack & Toolbox" filename="stack.ts">
      <div className="space-y-4">
        {categories.map((cat, i) => (
          <FadeIn key={cat.name} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="text-[10px] uppercase tracking-widest text-yellow">
                # {cat.name.toLowerCase()}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border bg-background px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/30 hover:text-foreground"
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
