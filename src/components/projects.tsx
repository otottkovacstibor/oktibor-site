"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <Section id="projects" title="Projects" filename="projects.ts">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.08}>
            <div className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/20">
              <p className="text-[10px] uppercase tracking-widest text-yellow">
                {project.type}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-accent/20 bg-accent-dim px-2 py-0.5 text-[10px] text-accent"
                  >
                    {tag}
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
