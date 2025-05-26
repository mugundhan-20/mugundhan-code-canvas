
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Contact as ContactIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-blue-50 to-teal-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">Send me a message</p>
                </div>
              </div>
              <p className="text-blue-600 font-medium mb-4">mugundhan.a.ece.2022@snsce.ac.in</p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                Send Email
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">Give me a call</p>
                </div>
              </div>
              <p className="text-purple-600 font-medium mb-4">+91 - 9655591025</p>
              <Button 
                variant="outline" 
                className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                Call Now
              </Button>
            </Card>
          </div>

          <Card className="p-8 text-center border-none bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ContactIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Address</h3>
            <p className="text-slate-600 text-lg">
              3/12 South Street, Ayyur<br />
              Alanganullur, Madurai
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
