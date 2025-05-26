
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "IOT Based Gas Detection System",
      description: "Selected by Indian Institution of Industrial Engineering for journal I2023",
      details: [
        "Developed a gas detection system that operates based on Internet of Things",
        "It ensures safety preventing accidents, protecting lives and assets in diverse environment"
      ],
      tech: ["IoT", "Sensors", "Embedded Systems"],
      featured: true
    },
    {
      title: "Landmine Detection Robot",
      description: "A landmine detection robot designed compactly",
      details: [
        "Developed a landmine detection robot for army, covers wide range of searching the landmine",
        "Controlled by smart phone with encryption"
      ],
      tech: ["Robotics", "Mobile App", "Encryption", "Hardware"],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    {project.featured && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-blue-600 font-medium mb-4 text-sm">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
