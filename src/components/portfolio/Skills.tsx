
import { Card } from "@/components/ui/card";
import { Code, Settings, Book } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["C", "Python", "HTML"],
      color: "blue"
    },
    {
      title: "Tools/Software",
      icon: Settings,
      skills: ["MySQL", "Excel", "EDA Tools: Cadence Virtuoso"],
      color: "teal"
    },
    {
      title: "Linguistic Skills",
      icon: Book,
      skills: ["English", "Japanese"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50",
      teal: "from-teal-500 to-teal-600 bg-teal-50",
      purple: "from-purple-500 to-purple-600 bg-purple-50"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <Card key={index} className={`p-6 hover:shadow-lg transition-all duration-300 border-none ${colorClasses.split(' ')[1]}`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${colorClasses.split(' ')[0]} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{category.title}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
