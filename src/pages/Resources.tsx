import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { BookOpen, Download, Globe, Search, Video, FileText, Headphones, Play } from "lucide-react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const languages = [
    "English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", 
    "Gujarati", "Punjabi", "Malayalam", "Kannada", "Urdu"
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety",
      category: "Articles",
      type: "article",
      language: "English",
      description: "Comprehensive guide to recognizing and managing anxiety symptoms",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "तनाव प्रबंधन तकनीकें",
      category: "Videos",
      type: "video",
      language: "Hindi",
      description: "व्यावहारिक तनाव प्रबंधन रणनीतियों पर वीडियो",
      duration: "12 min"
    },
    {
      id: 3,
      title: "Mindfulness Meditation Guide",
      category: "Audio",
      type: "audio",
      language: "English",
      description: "Guided meditation for beginners",
      duration: "15 min"
    },
    {
      id: 4,
      title: "மன அழுத்தம் மேலாண்மை",
      category: "Articles",
      type: "article",
      language: "Tamil",
      description: "மாணவர்களுக்கான மன அழுத்த மேலாண்மை உத்திகள்",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Coping with Academic Pressure",
      category: "Videos",
      type: "video",
      language: "English",
      description: "Expert tips for managing academic stress",
      duration: "20 min"
    },
    {
      id: 6,
      title: "শিথিলকরণ ব্যায়াম",
      category: "Audio",
      type: "audio",
      language: "Bengali",
      description: "নিয়মিত অনুশীলনের জন্য শিথিলকরণ ব্যায়াম",
      duration: "10 min"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === "all" || resource.language === selectedLanguage;
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesLanguage && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "video": return <Video className="h-5 w-5" />;
      case "audio": return <Headphones className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Psychoeducational Resources</h1>
          <p className="text-muted-foreground">Educational content available in multiple regional languages</p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8 rounded-2xl bg-card/90 backdrop-blur shadow-soft">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>
            
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="rounded-xl">
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map(lang => (
                  <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Articles">Articles</SelectItem>
                <SelectItem value="Videos">Videos</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group p-6 rounded-2xl bg-card/80 backdrop-blur hover:shadow-3d transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20`}>
                  {getTypeIcon(resource.type)}
                </div>
                <span className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-secondary-foreground">
                  {resource.language}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {resource.readTime || resource.duration}
                </span>
                <Button variant="glass" size="sm" className="rounded-xl">
                  {resource.type === "video" || resource.type === "audio" ? (
                    <>
                      <Play className="h-3 w-3 mr-1" />
                      Play
                    </>
                  ) : (
                    <>
                      <Download className="h-3 w-3 mr-1" />
                      Read
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/10">
            <FileText className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Articles & Guides</h3>
            <p className="text-sm text-muted-foreground">In-depth written content on mental health topics</p>
          </Card>
          
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10">
            <Video className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Video Content</h3>
            <p className="text-sm text-muted-foreground">Visual learning materials and expert talks</p>
          </Card>
          
          <Card className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10">
            <Headphones className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Audio Resources</h3>
            <p className="text-sm text-muted-foreground">Guided meditations and relaxation exercises</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;