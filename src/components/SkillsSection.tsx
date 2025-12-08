const frontendSkills = [
  { name: "React", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 88 },
];

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
  { name: "Python", level: 70 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 72 },
  { name: "REST APIs", level: 85 },
];

const tools = [
  "Git", "Docker", "VS Code", "Figma", "Postman", "Linux", "AWS", "Vercel", "GitHub Actions"
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
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

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-2xl glass">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full gradient-primary" />
                Frontend Development
              </h3>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>

            <div className="p-8 rounded-2xl glass">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full gradient-accent" />
                Backend Development
              </h3>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full glass text-sm font-medium hover:glow-primary transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
