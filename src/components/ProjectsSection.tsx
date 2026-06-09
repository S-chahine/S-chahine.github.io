import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import kidsfirst from "@/assets/Kidsfirst_card.png";
import psl from "@/assets/PSL_card.png";
import taskTrack from "@/assets/taskTrack.png";
import quoteMachine from "@/assets/quote-machine.png";
import noteBuddy from "@/assets/noteBuddy.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "KidsFirst",
    description: "Contributed to Kids First, an ongoing WITT team project focused on a co-parenting app designed to support peaceful communication and collaboration between parents. The app includes dashboard, calendar, messaging, album, and profile features.",
    contribution:
      "Worked with the WITT team on user-focused application features while contributing to a collaborative development environment.",
    features: ["Dashboard", "Calendar", "Messaging", "Album", "Profiles"],
    srcImg: kidsfirst,
    badge: ["Ongoing", "Team Project", "NDA Protected"],
    team: true,
  },
  {
    title: "PSL",
    description:
      "Contributed as part of a nine-member WITT development team to a secure online application for an international business compliance firm. The platform included a home page, registration flow, quote tool, and user account features.",
    contribution:
      "My work focused on building responsive web interfaces, supporting form-based user flows, and collaborating with the team on implementation and integration.",
    features: ["Home Page", "Registration", "Quote Tool", "User Account"],
    srcImg: psl,
    badge: ["Completed", "Team Project", "NDA Protected"],
    team: true,
  },
  {
    title: "Task Track - Task Manager",
    description:
      "A sleek task management app where users can add tasks, categorize them (work, school, personal), track completion stats, and filter by category. ",
    tech: ["React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui"],
    github: "https://github.com/S-chahine/task-track",
    live: "https://s-chahine.github.io/task-track/",
    srcImg: taskTrack,
    team: false,
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
    team: false,
  },
  {
    title: "Note Buddy - Smart AI-Powered Note Taking App",
    description:
      "NoteBuddy is a full-stack web application that helps users write, organize, and understand their notes — with live AI assistance.",
    tech: ["Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Supabase Auth",
      "Postgres, Prisma",
      "Vercel (deployment)",
      "Gemini (AI content generation)",
    ],
    github: "https://github.com/S-chahine/note-buddy",
    live: "https://note-buddy-iota.vercel.app",
    srcImg: noteBuddy,
    team: false,
  }

];

const TeamProject = ({ project }: { project: typeof projects[0] }) => {
  const [expanded, setExpanded] = useState(false);

  const shouldShowToggle = project.description.length > 120;

  return (
    <div className="group relative rounded-2xl overflow-hidden glass hover:glow-primary transition-all duration-500">
      <div className="px-10 py-7">
      <div className="relative glass glow-primary overflow-hidden rounded-xl">
          <a href={project.live}>
            <img
              src={project.srcImg}
              alt={project.title}
              draggable={false}
              className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"></img></a>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p
            className={`text-muted-foreground group-hover:text-white transition-all duration-300 text-sm mb-4 ${expanded ? "" : "line-clamp-8"
              }`}
          >
            {project.description}
          </p>
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
            {project.badge.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-background/80 border border-white/10 px-3 py-1 text-xs text-white backdrop-blur-md"
              >
                {badge}
              </span>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

const IndependentProject = ({ project }: { project: typeof projects[0] }) => {
  const [expanded, setExpanded] = useState(false);

  const shouldShowToggle = project.description.length > 120;

  return (
    <div className="group relative rounded-2xl overflow-hidden glass hover:glow-primary transition-all duration-500">
      <div className="px-10 py-7">
        <div className="glass glow-primary">
          <a href={project.live}>
            <img
              src={project.srcImg}
              alt={project.title}
              draggable={false}
              className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"></img></a>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p
            className={`text-muted-foreground group-hover:text-white transition-all duration-300 text-sm mb-4 ${expanded ? "" : "line-clamp-2"
              }`}
          >
            {project.description}
          </p>
          {shouldShowToggle && (
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="text-[11px] text-primary hover:text-[10px] mb-4"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>)
          }
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-1 py-1 rounded-full bg-primary/10 text-primary font-medium"
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
};

const ProjectsSection = () => {
  const teamProjects = projects.filter((p) => p.team);
  const independentProjects = projects.filter((p) => !p.team);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A mix of team-based and independent projects that demonstrate my experience building responsive interfaces, user-focused workflows, and full-stack applications.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-center mb-8">Team Projects</h3>
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {teamProjects.map((project) => (
              <TeamProject key={project.title} project={project} />
            ))}
          </div>
          <div className="flex flex-col items-center mt-8 text-center mb-20">
            <p className="mt-2 max-w-3xl text-muted-foreground ">
              Collaborative WITT projects with public summaries available through the
              company website. PSL has been completed, while Kids First is ongoing. Source
              code, technical implementation details, and internal project information
              cannot be shared due to NDA restrictions.
            </p>
            <Button variant="link" size="xl" asChild>
              <a
                href="https://witthub.ca/projects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Company Projects Page
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <h3 className="text-2xl font-semibold text-center mb-8">Independent Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {independentProjects.map((project) => (
              <IndependentProject key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
