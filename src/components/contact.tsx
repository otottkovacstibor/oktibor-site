"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import social from "@/data/social.json";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get in touch"
      subtitle="Want to connect or have a question? Feel free to reach out."
    >
      <FadeIn>
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-[80px]" />

          <div className="relative">
            <p className="max-w-lg text-base leading-relaxed text-muted">
              Have a question, want to chat about engineering, or just want to
              say hi? I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`mailto:${social.email}`}
                className="inline-flex h-12 items-center rounded-lg bg-accent px-6 text-sm font-medium text-background transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                {social.email}
              </a>
              <span className="text-sm text-muted">or find me on</span>
              <div className="flex gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
                >
                  GitHub
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
