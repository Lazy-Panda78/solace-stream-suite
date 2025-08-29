import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { MessageCircle, Calendar, BookOpen, Users, ClipboardCheck, Phone, Shield, Heart, Brain, Globe, LogIn } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chat Support",
      description: "24/7 mental health first-aid support with our compassionate AI assistant",
      link: "/chat",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Calendar,
      title: "Book Sessions",
      description: "Schedule confidential appointments with certified counselors",
      link: "/booking",
      color: "from-secondary to-primary"
    },
    {
      icon: BookOpen,
      title: "Resource Hub",
      description: "Psychoeducational content available in multiple regional languages",
      link: "/resources",
      color: "from-accent to-secondary"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with others in our moderated support community",
      link: "/forum",
      color: "from-primary-glow to-accent"
    },
    {
      icon: ClipboardCheck,
      title: "Screening Tools",
      description: "Professional assessment tools including PHQ-9 and GAD-7",
      link: "/screening",
      color: "from-secondary to-accent"
    },
    {
      icon: Phone,
      title: "Helpline Directory",
      description: "Emergency contacts and crisis support resources",
      link: "/helpline",
      color: "from-primary to-secondary"
    }
  ];

  const stats = [
    { value: "10K+", label: "Students Helped" },
    { value: "50+", label: "Certified Counselors" },
    { value: "24/7", label: "Support Available" },
    { value: "15+", label: "Languages Supported" }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-primary/10 rounded-full">
            <Heart className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Your Mental Wellness Matters</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Welcome to MindSpace
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive digital platform providing confidential mental health support, 
            resources, and community connection for students
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button variant="calm" size="lg" className="w-full sm:w-auto">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In to Get Started
              </Button>
            </Link>
            <Link to="/booking">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Book Counselor
              </Button>
            </Link>
          </div>

          {/* 3D Effect Cards */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-xl"></div>
            <Card className="relative bg-card/90 backdrop-blur p-6 rounded-3xl shadow-3d">
              <div className="flex items-center justify-center space-x-8">
                <Shield className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">100% Confidential</p>
                  <p className="text-lg font-semibold text-foreground">Your Privacy Protected</p>
                </div>
                <Brain className="h-8 w-8 text-primary-glow" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Comprehensive Support Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="group h-full p-6 rounded-2xl border-0 bg-card/80 backdrop-blur hover:shadow-3d transition-all duration-300 hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-ocean">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="p-8 md:p-12 rounded-3xl bg-gradient-calm border-0">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Mental Health Support in Your Language
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access resources and support in over 15 regional languages. 
              We believe mental health care should be accessible to everyone.
            </p>
            <Link to="/resources">
              <Button variant="calm" size="lg">
                Explore Resources
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;