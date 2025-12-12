import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import taskTrack from "@/assets/taskTrack.png"; 
import quoteMachine from "@/assets/quote-machine.png";

const projects = [
  {
    title: "Task Track – Task Manager",
    description:
      "A sleek task management app where users can add tasks, categorize them (Work, School, Personal), track completion stats, and filter by category — built to showcase modern React UI and clean state management.",
    tech: ["React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui"],
    github: "https://github.com/S-chahine/task-track",
    live: "https://s-chahine.github.io/task-track/",
    srcImg: taskTrack,
    featured: true,
  },
  {
    title: "Quote Machine - Quote Generator",
    description:
      "A vibrant quote machine app that serves random quotes from an external API with smooth animations and social share buttons.",
    tech: ["React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui"],
    github: "https://github.com/S-chahine/quote-machine",
    live: "https://s-chahine.github.io/quote-machine",
    srcImg: quoteMachine,
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather application that displays current conditions and forecasts with interactive charts.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com",
    live: "https://example.com",
    srcImg: taskTrack,
    featured: true,
  },
];

const FeaturedProject = ({ project }: { project: typeof projects[0] }) => (
  <div className="group relative rounded-2xl overflow-hidden glass hover:glow-primary transition-all duration-500">
  <div className="px-10 py-7">    
   <div className="glass glow-primary"> 
    <img          
      src={project.srcImg}
      alt={project.title} 
      className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"></img>
      </div>
   
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <FaGithub size={20} />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
        </div>
      </div>
    </div>
  </div>
);

const SmallProject = ({ project }: { project: typeof projects[0] }) => (
  <div className="p-6 rounded-xl glass hover:glow-primary transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <Folder className="w-10 h-10 text-primary" />
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub size={18} />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.tech.slice(0, 3).map((tech) => (
        <span key={tech} className="text-xs text-muted-foreground font-mono">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A selection of projects I've worked on that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.title} project={project} />
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherProjects.map((project) => (
              <SmallProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
