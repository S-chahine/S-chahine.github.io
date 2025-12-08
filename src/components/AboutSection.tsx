import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive and visually appealing user experiences",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with excellent communication skills",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Passionate About <span className="gradient-text">Building</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm a full-stack developer with a strong foundation in both frontend and backend technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development started with curiosity and has evolved into a deep passion for creating 
                meaningful digital experiences. I specialize in building full-stack applications using modern frameworks 
                and technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest trends in web development. 
                When I'm not coding, you'll find me exploring new technologies, 
                or working on personal projects to expand my skill set.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently looking for opportunities where I can contribute, learn, and grow as a developer 
                while being part of a team that values innovation and quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl glass hover:glow-primary transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
