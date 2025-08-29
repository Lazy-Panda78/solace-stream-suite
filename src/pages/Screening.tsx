import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { ClipboardCheck, AlertCircle, ChevronRight, ChevronLeft, Shield, Clock } from "lucide-react";

const Screening = () => {
  const [selectedTool, setSelectedTool] = useState<"PHQ-9" | "GAD-7" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const phq9Questions = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself or that you are a failure",
    "Trouble concentrating on things",
    "Moving or speaking slowly, or being fidgety or restless",
    "Thoughts that you would be better off dead or of hurting yourself"
  ];

  const gad7Questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
  ];

  const questions = selectedTool === "PHQ-9" ? phq9Questions : gad7Questions;
  const options = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    setShowResults(true);
  };

  const getResultInterpretation = () => {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = selectedTool === "PHQ-9" ? 27 : 21;
    
    if (selectedTool === "PHQ-9") {
      if (total < 5) return { level: "Minimal", message: "Your responses suggest minimal depression symptoms." };
      if (total < 10) return { level: "Mild", message: "Your responses suggest mild depression symptoms." };
      if (total < 15) return { level: "Moderate", message: "Your responses suggest moderate depression symptoms. Consider seeking support." };
      if (total < 20) return { level: "Moderately Severe", message: "Your responses suggest moderately severe depression. Professional support recommended." };
      return { level: "Severe", message: "Your responses suggest severe depression. Please seek professional help immediately." };
    } else {
      if (total < 5) return { level: "Minimal", message: "Your responses suggest minimal anxiety symptoms." };
      if (total < 10) return { level: "Mild", message: "Your responses suggest mild anxiety symptoms." };
      if (total < 15) return { level: "Moderate", message: "Your responses suggest moderate anxiety symptoms. Consider seeking support." };
      return { level: "Severe", message: "Your responses suggest severe anxiety. Professional support recommended." };
    }
  };

  const resetScreening = () => {
    setSelectedTool(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (!selectedTool) {
    return (
      <div className="min-h-screen bg-gradient-soft">
        <Navigation />
        
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <ClipboardCheck className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mental Health Screening Tools</h1>
              <p className="text-muted-foreground">Professional assessment tools to help understand your mental wellness</p>
            </div>

            {/* Privacy Notice */}
            <Card className="p-4 mb-8 bg-primary/5 border-primary/20 rounded-2xl">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  These tools are for screening purposes only and do not replace professional diagnosis. 
                  Your responses are completely confidential and not stored.
                </p>
              </div>
            </Card>

            {/* Tool Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur cursor-pointer hover:shadow-3d transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedTool("PHQ-9")}
              >
                <div className="p-3 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl w-fit mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">PHQ-9 Depression Screening</h3>
                <p className="text-muted-foreground mb-4">
                  Patient Health Questionnaire - A widely used tool to screen for depression severity
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>9 questions • 3-5 minutes</span>
                </div>
              </Card>

              <Card 
                className="p-6 rounded-2xl bg-card/80 backdrop-blur cursor-pointer hover:shadow-3d transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedTool("GAD-7")}
              >
                <div className="p-3 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl w-fit mb-4">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">GAD-7 Anxiety Screening</h3>
                <p className="text-muted-foreground mb-4">
                  Generalized Anxiety Disorder scale - Assesses anxiety symptom severity
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>7 questions • 2-3 minutes</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const total = answers.reduce((sum, score) => sum + score, 0);
    const result = getResultInterpretation();
    const maxScore = selectedTool === "PHQ-9" ? 27 : 21;

    return (
      <div className="min-h-screen bg-gradient-soft">
        <Navigation />
        
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 rounded-3xl bg-card/90 backdrop-blur shadow-3d">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Screening Results</h2>
                <p className="text-muted-foreground">{selectedTool} Assessment Complete</p>
              </div>

              <div className="mb-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-primary">{total}</span>
                  <span className="text-xl text-muted-foreground"> / {maxScore}</span>
                </div>
                <Progress value={(total / maxScore) * 100} className="h-3 rounded-full" />
              </div>

              <Card className={`p-4 mb-6 rounded-2xl ${
                result.level === "Severe" || result.level === "Moderately Severe" 
                  ? "bg-destructive/10 border-destructive/20" 
                  : "bg-primary/5 border-primary/20"
              }`}>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">
                      {result.level} Symptoms
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.message}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-foreground">Recommended Next Steps:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Consider discussing these results with a mental health professional
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Book a confidential counseling session for personalized support
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    Explore our self-help resources and coping strategies
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="calm" className="flex-1" onClick={() => window.location.href = "/booking"}>
                  Book Counseling Session
                </Button>
                <Button variant="outline" className="flex-1" onClick={resetScreening}>
                  Take Another Screening
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-foreground">{selectedTool} Screening</h2>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2 rounded-full" />
          </div>

          {/* Question Card */}
          <Card className="p-8 rounded-3xl bg-card/90 backdrop-blur shadow-3d">
            <h3 className="text-xl font-medium text-foreground mb-2">
              Over the last 2 weeks, how often have you been bothered by:
            </h3>
            <p className="text-lg text-foreground mb-6">
              {questions[currentQuestion]}
            </p>

            <RadioGroup 
              value={answers[currentQuestion]?.toString() || ""} 
              onValueChange={(value) => handleAnswer(parseInt(value))}
            >
              <div className="space-y-3">
                {options.map((option) => (
                  <Card 
                    key={option.value} 
                    className={`p-4 rounded-2xl cursor-pointer transition-all ${
                      answers[currentQuestion] === option.value 
                        ? "border-primary bg-primary/10" 
                        : "hover:border-primary/50"
                    }`}
                  >
                    <Label htmlFor={`option-${option.value}`} className="flex items-center cursor-pointer">
                      <RadioGroupItem 
                        value={option.value.toString()} 
                        id={`option-${option.value}`}
                        className="mr-3"
                      />
                      <div>
                        <p className="font-medium text-foreground">{option.label}</p>
                        <p className="text-xs text-muted-foreground">({option.value} points)</p>
                      </div>
                    </Label>
                  </Card>
                ))}
              </div>
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button 
                variant="calm"
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
              >
                {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Screening;