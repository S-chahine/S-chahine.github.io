// SkillsSection.tsx
import React from "react";

type SkillCard = {
  title: string;
  accentText: string;
  dotBg: string;      
  items: string[];
};

const skillCards: SkillCard[] = [
  {
    title: "Frontend Development",
    accentText: "gradient-text",
    dotBg: "bg-blue-300",
    items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "TypeScript", "JavaScript" ],
  },
  {
    title: "Backend Development",
    accentText: "text-purple-300",
    dotBg: "bg-purple-400",
    items: ["Node.js", "Nest.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    accentText: "text-emerald-300",
    dotBg: "bg-emerald-400",
    items: ["Git", "GitHub Actions", "VSCode", "Figma", "Postman", "Linux"],
  },
];

function SkillCardBlock({ card }: { card: SkillCard }) {
  return (
    <div
      className="
        rounded-2xl p-8 md:p-10
        bg-white/[0.06] border border-white/10
        shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]
        backdrop-blur
        transition-all duration-300
        hover:bg-white/[0.085] hover:border-white/15 hover:-translate-y-0.5
      "
    >
      <h3 className={`text-2xl md:text-3xl font-semibold ${card.accentText}`}>
        {card.title}
      </h3>

      <ul className="mt-7 space-y-4 text-muted-foreground/90">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <span
              className={`mt-[0.55rem] h-2 w-2 rounded-full ${card.dotBg} shadow-[0_0_0_2px_rgba(255,255,255,0.03)]`}
            />
            <span className="text-base md:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
<div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Skills
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        <div className="relative max-w-6xl mx-auto rounded-3xl border border-white/10 bg-black/30 p-6 md:p-10 overflow-hidden">
          {/* subtle glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          {/* subtle grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 55%, transparent 75%)",
            }}
          />

          {/* Cards */}
          <div className="relative grid gap-6 md:grid-cols-3">
            {skillCards.map((card) => (
              <SkillCardBlock key={card.title} card={card} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
