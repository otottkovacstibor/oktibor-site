"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import data from "@/data/about.json";

export function About() {
  return (
    <Section id="about" title="What I do" filename="about.ts">
      <p className="mb-8 text-sm leading-relaxed text-muted">
        {data.subtitle}
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {data.pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.08}>
            <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/20">
              <h3 className="text-sm font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-8 rounded-lg border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-yellow">
            # areas of expertise
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.expertise.map((item) => (
              <span
                key={item}
                className="rounded border border-accent/20 bg-accent-dim px-2.5 py-1 text-xs text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-4 rounded-lg border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-green">
            # now
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {data.now}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="mt-4 rounded-lg border border-border bg-card p-5">
          <p className="text-[10px] uppercase tracking-widest text-muted">
            # philosophy
          </p>
          <div className="mt-3 grid gap-1.5 text-xs text-muted sm:grid-cols-2">
            {data.philosophy.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-green">-</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
