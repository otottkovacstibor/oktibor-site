"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import experiences from "@/data/experience.json";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="10+ years building and shipping production systems across SaaS, cloud, and security domains."
    >
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.1}>
            <div className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/20 hover:bg-card-hover sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted">
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-md border border-border/50 bg-background px-3 py-1 font-mono text-xs text-muted"
                  >
                    {h}
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
