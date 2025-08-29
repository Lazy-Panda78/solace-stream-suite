import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, User, Shield, CheckCircle, Video, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    counselor: "",
    date: "",
    time: "",
    sessionType: "",
    concern: ""
  });

  const counselors = [
    { id: "1", name: "Dr. Sarah Johnson", specialization: "Anxiety & Depression", languages: "English, Hindi" },
    { id: "2", name: "Dr. Raj Patel", specialization: "Student Stress", languages: "English, Gujarati" },
    { id: "3", name: "Dr. Priya Sharma", specialization: "Relationships", languages: "English, Hindi, Punjabi" },
    { id: "4", name: "Dr. Chen Wei", specialization: "Academic Pressure", languages: "English, Mandarin" },
    { id: "5", name: "Dr. Fatima Khan", specialization: "Family Issues", languages: "English, Urdu, Hindi" }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "You will receive a confirmation email shortly. All session details are confidential.",
    });
    setFormData({
      name: "",
      email: "",
      counselor: "",
      date: "",
      time: "",
      sessionType: "",
      concern: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Book a Counseling Session</h1>
            <p className="text-muted-foreground">Schedule a confidential appointment with our certified counselors</p>
          </div>

          {/* Privacy Notice */}
          <Card className="p-4 mb-6 bg-primary/5 border-primary/20 rounded-2xl">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-sm text-foreground">
                All sessions are 100% confidential. Your information is encrypted and protected.
              </p>
            </div>
          </Card>

          {/* Booking Form */}
          <Card className="rounded-3xl shadow-3d p-6 md:p-8 bg-card/90 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 rounded-xl"
                    placeholder="Your name (kept confidential)"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 rounded-xl"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="counselor">Select Counselor</Label>
                <Select value={formData.counselor} onValueChange={(value) => setFormData({...formData, counselor: value})}>
                  <SelectTrigger className="mt-1 rounded-xl">
                    <SelectValue placeholder="Choose a counselor" />
                  </SelectTrigger>
                  <SelectContent>
                    {counselors.map((counselor) => (
                      <SelectItem key={counselor.id} value={counselor.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{counselor.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {counselor.specialization} • {counselor.languages}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="mt-1 rounded-xl"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger className="mt-1 rounded-xl">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-2" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Session Type</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Card 
                    className={`p-4 cursor-pointer rounded-2xl transition-all ${
                      formData.sessionType === "video" ? "border-primary bg-primary/10" : "hover:border-primary/50"
                    }`}
                    onClick={() => setFormData({...formData, sessionType: "video"})}
                  >
                    <Video className="h-5 w-5 text-primary mb-2" />
                    <p className="font-medium">Video Call</p>
                    <p className="text-xs text-muted-foreground">Face-to-face online session</p>
                  </Card>
                  
                  <Card 
                    className={`p-4 cursor-pointer rounded-2xl transition-all ${
                      formData.sessionType === "chat" ? "border-primary bg-primary/10" : "hover:border-primary/50"
                    }`}
                    onClick={() => setFormData({...formData, sessionType: "chat"})}
                  >
                    <MessageSquare className="h-5 w-5 text-primary mb-2" />
                    <p className="font-medium">Text Chat</p>
                    <p className="text-xs text-muted-foreground">Anonymous text session</p>
                  </Card>
                </div>
              </div>

              <div>
                <Label htmlFor="concern">Brief Description of Concern (Optional)</Label>
                <Textarea
                  id="concern"
                  value={formData.concern}
                  onChange={(e) => setFormData({...formData, concern: e.target.value})}
                  className="mt-1 rounded-xl min-h-[100px]"
                  placeholder="Share what you'd like to discuss (this helps the counselor prepare)..."
                />
              </div>

              <Button type="submit" variant="calm" size="lg" className="w-full">
                <CheckCircle className="mr-2 h-5 w-5" />
                Confirm Booking
              </Button>
            </form>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="p-4 rounded-2xl bg-card/80 backdrop-blur">
              <User className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium text-foreground">Anonymous Option</h3>
              <p className="text-xs text-muted-foreground">Use a pseudonym if preferred</p>
            </Card>
            
            <Card className="p-4 rounded-2xl bg-card/80 backdrop-blur">
              <Clock className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium text-foreground">50-Minute Sessions</h3>
              <p className="text-xs text-muted-foreground">Standard counseling duration</p>
            </Card>
            
            <Card className="p-4 rounded-2xl bg-card/80 backdrop-blur">
              <Shield className="h-5 w-5 text-primary mb-2" />
              <h3 className="font-medium text-foreground">Fully Confidential</h3>
              <p className="text-xs text-muted-foreground">Your privacy is our priority</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;