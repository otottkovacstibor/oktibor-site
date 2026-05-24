"use client";

import { Section } from "./section";
import { FadeIn } from "./animated";
import social from "@/data/social.json";

export function Contact() {
  return (
    <Section id="contact" title="Contact" filename="contact.ts">
      <FadeIn>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="font-mono text-sm leading-relaxed">
            <p className="text-muted">
              <span className="text-green">$</span>{" "}
              <span className="text-foreground">echo</span>{" "}
              &quot;Have a question, want to chat about engineering, or just
              want to say hi?&quot;
            </p>
            <p className="mt-4 text-muted">
              <span className="text-green">$</span>{" "}
              <span className="text-foreground">mail</span>{" "}
              <a
                href={`mailto:${social.email}`}
                className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              >
                {social.email}
              </a>
            </p>
            <div className="mt-4 text-muted">
              <span className="text-green">$</span>{" "}
              <span className="text-foreground">open</span>{" "}
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              >
                github
              </a>{" "}
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
              >
                linkedin
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-green">$</span>{" "}
              <span className="ml-1 inline-block h-3.5 w-1.5 bg-green animate-blink" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
