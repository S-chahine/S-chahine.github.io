import { ArrowDown, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import techBackground from "@/assets/tech-background.jpg";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Tech Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${techBackground})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-2 rounded-full glass text-md text-muted-foreground mb-6">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 animate-fade-in opacity-0 text-primary-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Samah Chahine</span>
          </h1>
          <div className="justify-items-center mb-5">
            <img 
            src={profileImg}
            alt="Samah Chahine"
            className="
      w-auto h-80 object-cover rounded-3xl
      [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
    "/>
    </div>
    <div>
            <p
              className="text-lg md:text-xl leading-relaxed md:leading-loose text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 text-balance"
              style={{ animationDelay: "0.6s" }}
            >
              A passionate{" "}
              <span className="text-accent font-semibold">Full Stack Developer</span>{" "}
              crafting beautiful web experiences with modern technologies. I love turning ideas into reality through code.
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-12 animate-fade-in opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>

          </div>

          <div
            className="flex justify-center gap-6 animate-fade-in opacity-0 "
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:glow-primary transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="www.linkedin.com/in/samah-chahine-4a4435252"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:glow-primary transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:samah_chahine@outlook.com"
              className="p-3 rounded-full glass text-muted-foreground hover:text-foreground hover:glow-primary transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
