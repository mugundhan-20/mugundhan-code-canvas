
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      institution: "SNS College of Engineering",
      degree: "B.E - ECE",
      cgpa: "8.15",
      period: "2022 - Present"
    },
    {
      institution: "Pathirakaliamman Matriculation Higher Secondary School",
      degree: "HSC",
      cgpa: "80.66%",
      period: "2020 - 2022"
    },
    {
      institution: "Pathirakaliamman Matriculation Higher Secondary School",
      degree: "SSLC",
      cgpa: "95.80%",
      period: "2019 - 2020"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold text-slate-800">{edu.institution}</h3>
                      <span className="text-blue-600 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-slate-600 mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">Score:</span>
                      <span className="font-semibold text-green-600">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
