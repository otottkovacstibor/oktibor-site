"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import projects from "@/data/projects.json";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work across SaaS, infrastructure, and security engineering."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1}>
            <div className="group flex h-full flex-col rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-accent/20 hover:bg-card-hover">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {project.type}
                </span>
                <svg
                  className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-accent-dim px-2 py-0.5 font-mono text-[10px] text-accent"
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
