
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-teal-500/10 to-purple-600/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] animate-pulse" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">
            MUGUNDHAN A
          </h1>
          <div className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            Innovating through Electronics & Code
          </div>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate Electronics & Communication Engineering student with a drive to push boundaries 
            and explore innovative solutions in hardware and software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+91 - 9655591025</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>mugundhan.a.ece.2022@snsce.ac.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
