
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      type: "internship",
      title: "Embedded Systems Intern",
      company: "ZEN 1 TECH PARK - ERODE",
      period: "June 2024 - July 2024",
      details: [
        "Developed a project with implementation of sensors that will help the home automation",
        "Learned about the higher level microcontrollers that are used by top industries"
      ]
    },
    {
      type: "workshop",
      title: "PCB Designing Workshop",
      company: "SNS College of Engineering - Coimbatore",
      period: "Nov 2023 - Dec 2023",
      details: [
        "Gained foundational knowledge in PCB designing",
        "Designed and simulated embedded system circuits with hand on experience"
      ]
    }
  ];

  const activities = [
    {
      title: "Industrial Visit",
      organization: "All India Radio Cochin",
      period: "2024",
      description: "Gained insights into radio broadcasting technology and industrial operations"
    },
    {
      title: "NSS Club Member",
      organization: "SNS College",
      period: "Ongoing",
      description: "Active participation in social service activities and community development"
    },
    {
      title: "Volleyball Player",
      organization: "College Sports",
      period: "Ongoing",
      description: "Team player with strong coordination and leadership skills"
    },
    {
      title: "Logo by Stroke Event Coordinator",
      organization: "SNS College",
      period: "2023",
      description: "Successfully organized and coordinated college event activities"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Experience & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Professional Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-blue-50 to-teal-50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-500">{exp.period}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Extracurricular Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{activity.title}</h4>
                      <p className="text-purple-600 text-sm font-medium">{activity.organization}</p>
                      <p className="text-xs text-slate-500">{activity.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{activity.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
