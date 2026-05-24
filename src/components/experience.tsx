"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import experiences from "@/data/experience.json";

export function Experience() {
  return (
    <Section id="experience" title="Experience" filename="experience.ts">
      <div className="relative space-y-6">
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.08}>
            <div className="relative pl-7">
              <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-border bg-card" />

              <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/20">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-accent">{exp.company}</p>
                  </div>
                  <span className="text-[10px] text-muted">{exp.period}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {exp.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded border border-border bg-background px-2 py-0.5 text-[10px] text-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
