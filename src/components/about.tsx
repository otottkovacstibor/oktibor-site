"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import data from "@/data/about.json";

export function About() {
  return (
    <Section id="about" title="What I do" subtitle={data.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        {data.pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 0.1}>
            <div className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/20 hover:bg-card-hover">
              <h3 className="text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-12 rounded-xl border border-border/50 bg-card p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Engineering philosophy
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
            {data.philosophy.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-accent">&#8250;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
