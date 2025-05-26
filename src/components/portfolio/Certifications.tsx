
import { Card } from "@/components/ui/card";
import { Star, Code } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Prepinsta - C Programming",
      category: "Programming",
      description: "Comprehensive course in C programming fundamentals"
    },
    {
      title: "Prepinsta - Python Programming", 
      category: "Programming",
      description: "Advanced Python programming and application development"
    },
    {
      title: "PCB Designing Certification",
      category: "Hardware",
      description: "Professional PCB design and embedded systems"
    },
    {
      title: "Intel Gen AI Certification",
      category: "AI/ML",
      description: "Artificial Intelligence and Machine Learning with Intel"
    },
    {
      title: "Oracle AI Vector Certificate",
      category: "AI/ML", 
      description: "Advanced AI vector processing and database technologies"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Programming": "from-blue-500 to-blue-600 bg-blue-50",
      "Hardware": "from-green-500 to-green-600 bg-green-50",
      "AI/ML": "from-purple-500 to-purple-600 bg-purple-50"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600 bg-gray-50";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colorClasses = getCategoryColor(cert.category);
              
              return (
                <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 border-none ${colorClasses.split(' ')[2]} group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} rounded-full flex items-center justify-center`}>
                      {cert.category === "Programming" ? (
                        <Code className="w-5 h-5 text-white" />
                      ) : (
                        <Star className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.category === "Programming" ? "bg-blue-100 text-blue-700" :
                      cert.category === "Hardware" ? "bg-green-100 text-green-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {cert.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
