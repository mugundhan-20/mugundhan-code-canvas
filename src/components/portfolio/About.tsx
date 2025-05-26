
import { Card } from "@/components/ui/card";
import { Users, Briefcase, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-12 border-none shadow-lg bg-gradient-to-br from-blue-50 to-teal-50">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              As an aspired thinker, I am passionate and easily adaptable about the intersection 
              in all kinds of situations. My academic journey is fueled by a deep interest in 
              technology and a drive to push the boundaries, constantly exploring new ways to 
              innovate and solve problems in hardware and software.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Innovation</h3>
              <p className="text-slate-600">Constantly exploring new technologies and creative solutions</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-teal-50 to-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Practical Experience</h3>
              <p className="text-slate-600">Hands-on experience in both hardware and software development</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-none bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Adaptability</h3>
              <p className="text-slate-600">Quick learner with ability to adapt to any situation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
