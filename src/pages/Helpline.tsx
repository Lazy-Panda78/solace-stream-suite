import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Phone, Globe, MessageCircle, MapPin, Clock, AlertCircle } from "lucide-react";

const Helpline = () => {
  const helplines = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      availability: "24/7",
      region: "USA",
      type: "Crisis",
      description: "Free, confidential crisis support"
    },
    {
      name: "AASRA",
      number: "+91 98204 66726",
      availability: "24/7",
      region: "India",
      type: "Crisis",
      description: "Suicide prevention and emotional support"
    },
    {
      name: "Vandrevala Foundation",
      number: "9999 666 555",
      availability: "24/7",
      region: "India",
      type: "Mental Health",
      description: "Free mental health helpline"
    },
    {
      name: "Samaritans",
      number: "116 123",
      availability: "24/7",
      region: "UK",
      type: "Crisis",
      description: "Emotional support for anyone in distress"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      availability: "24/7",
      region: "USA/Canada/UK",
      type: "Text Support",
      description: "Free crisis counseling via text"
    },
    {
      name: "iCALL",
      number: "9152987821",
      availability: "Mon-Sat, 8AM-10PM",
      region: "India",
      type: "Counseling",
      description: "Psychosocial helpline"
    }
  ];

  const counselors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychologist",
      languages: "English, Hindi",
      availability: "Mon-Fri, 9AM-5PM",
      email: "sarah.j@mindspace.com"
    },
    {
      name: "Dr. Raj Patel",
      specialization: "Psychiatrist",
      languages: "English, Gujarati, Hindi",
      availability: "Tue-Sat, 10AM-6PM",
      email: "raj.p@mindspace.com"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Counseling Psychologist",
      languages: "English, Hindi, Punjabi",
      availability: "Mon-Thu, 11AM-7PM",
      email: "priya.s@mindspace.com"
    },
    {
      name: "Dr. Chen Wei",
      specialization: "Behavioral Therapist",
      languages: "English, Mandarin",
      availability: "Wed-Sun, 2PM-8PM",
      email: "chen.w@mindspace.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Helplines & Counselors</h1>
          <p className="text-muted-foreground">Immediate support and professional help when you need it most</p>
        </div>

        {/* Emergency Alert */}
        <Card className="p-4 mb-8 bg-destructive/10 border-destructive/20 rounded-2xl">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
            <p className="text-sm text-foreground">
              <strong>In case of emergency:</strong> If you or someone you know is in immediate danger, 
              please call your local emergency number (911, 112, etc.) immediately.
            </p>
          </div>
        </Card>

        {/* Crisis Helplines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">24/7 Crisis Helplines</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {helplines.map((helpline, index) => (
              <Card key={index} className="p-6 rounded-2xl bg-card/80 backdrop-blur hover:shadow-3d transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{helpline.name}</h3>
                    <p className="text-sm text-muted-foreground">{helpline.description}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    helpline.type === "Crisis" 
                      ? "bg-destructive/20 text-destructive" 
                      : "bg-primary/20 text-primary"
                  }`}>
                    {helpline.type}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-primary mr-2" />
                    <span className="font-medium text-foreground">{helpline.number}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{helpline.availability}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{helpline.region}</span>
                  </div>
                </div>

                <Button variant="calm" size="sm" className="w-full rounded-xl">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Counselors */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Our Professional Counselors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {counselors.map((counselor, index) => (
              <Card key={index} className="p-6 rounded-2xl bg-card/80 backdrop-blur hover:shadow-3d transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-semibold">
                    {counselor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{counselor.name}</h3>
                    <p className="text-sm text-primary mb-2">{counselor.specialization}</p>
                    
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Globe className="h-3 w-3 mr-2" />
                        <span>{counselor.languages}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-2" />
                        <span>{counselor.availability}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-2" />
                        <span>{counselor.email}</span>
                      </div>
                    </div>

                    <Button variant="glass" size="sm" className="w-full rounded-xl">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <Card className="mt-12 p-8 rounded-3xl bg-gradient-calm border-0 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Remember, You're Not Alone</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Reaching out for help is a sign of strength. Whether you need immediate crisis support or 
            ongoing counseling, we're here to help you on your mental health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="calm" size="lg" onClick={() => window.location.href = "/chat"}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Start AI Chat Support
            </Button>
            <Button variant="glass" size="lg" onClick={() => window.location.href = "/resources"}>
              <Globe className="mr-2 h-5 w-5" />
              Browse Self-Help Resources
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Helpline;