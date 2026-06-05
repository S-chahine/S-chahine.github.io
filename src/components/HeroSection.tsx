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
        <div className="max-w-8xl py-20 mx-auto text-center">
          {/* Profile Image With Text Overlay */}
          <div className="relative mx-auto mb-8 w-full max-w-8xl  overflow-hidden rounded-3xl">
            <img
              src={profileImg}
              alt="Profile Image"
              className="
      w-full h-[clamp(320px,75vw,680px)] object-cover rounded-3xl
      [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
    "
            />
            {/* Dark overlay on profile image so text is readable */}
            <div className="absolute inset-0 rounded-3xl bg-black/35 " />

            {/* Name and Slogan */}
            <div className="absolute right-2  top-[clamp(1rem,1vw,2rem)]  max-w-xl text-center">

              <h1 style={{ fontFamily: "'Times New Roman', serif" }} className="text-[clamp(2rem,4vw,4.5rem)] font-bold tracking-tight text-white drop-shadow-lg">
                Samah Chahine
              </h1>
              <div className="flex items-center justify-end gap-[clamp(0.25rem,1vw,1rem)] mt-2">

                <span className="block h-[1px] w-[clamp(1rem,4vw,4rem)] bg-white/70"></span>

                <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-white/90 drop-shadow-md whitespace-nowrap">
                  Full Stack Developer
                </p>
                <span className="block h-[1px] w-[clamp(1rem,4vw,4rem)] bg-white/70"></span>
              </div>
              <h1 className="mt-5 max-w-2xl text-[clamp(1rem,2vw,4rem)] text-white/90 drop-shadow-md">
                Turning ideas into
              </h1>
              <h1 className=" max-w-2xl italic text-[clamp(1rem,2vw,4rem)] text-white/90 drop-shadow-md">
                responsive web apps</h1>

              <div
                className="flex sm:flex-row gap-2 justify-center mt-[clamp(1rem,3vw,3rem)] mb-[clamp(1.5rem,5vw,3rem)] animate-fade-in opacity-0"
                style={{ animationDelay: "0.8s" }}
              >
                <Button variant="hero"
                  size="xl"
                  className="
                    h-[clamp(2.25rem,4.5vw,3.25rem)]
                    px-[clamp(0.25rem,2vw,1.75rem)]
                    text-[clamp(0.75rem,1.8vw,1rem)]
                  "
                  asChild>
                  <a href="#projects">View My Work</a>
                </Button>

              </div>
            </div>
          </div>
          <div>

          </div>


          <div
            className="flex justify-center py-20 gap-6 animate-fade-in opacity-0 "
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
