import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Brain, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which subject do you find most interesting?",
      options: [
        { value: "science", label: "Science & Technology" },
        { value: "arts", label: "Arts & Literature" },
        { value: "commerce", label: "Commerce & Business" },
        { value: "social", label: "Social Sciences" },
      ]
    },
    {
      id: 2,
      question: "What type of work environment do you prefer?",
      options: [
        { value: "team", label: "Collaborative team environment" },
        { value: "independent", label: "Independent work" },
        { value: "creative", label: "Creative and flexible" },
        { value: "structured", label: "Structured and organized" },
      ]
    },
    {
      id: 3,
      question: "Which activity excites you the most?",
      options: [
        { value: "problem", label: "Solving complex problems" },
        { value: "create", label: "Creating something new" },
        { value: "help", label: "Helping others" },
        { value: "analyze", label: "Analyzing data and trends" },
      ]
    },
    {
      id: 4,
      question: "What motivates you the most in your career?",
      options: [
        { value: "impact", label: "Making a positive impact" },
        { value: "growth", label: "Continuous learning and growth" },
        { value: "stability", label: "Job security and stability" },
        { value: "innovation", label: "Innovation and creativity" },
      ]
    },
    {
      id: 5,
      question: "Which skill would you like to develop further?",
      options: [
        { value: "technical", label: "Technical and analytical skills" },
        { value: "communication", label: "Communication and leadership" },
        { value: "creative", label: "Creative and artistic abilities" },
        { value: "business", label: "Business and entrepreneurship" },
      ]
    },
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    // Process quiz results here
    console.log("Quiz answers:", answers);
  };

  const getResults = () => {
    // Simple logic to suggest career paths based on answers
    const answerValues = Object.values(answers);
    
    if (answerValues.includes("science") || answerValues.includes("technical")) {
      return {
        title: "STEM Fields",
        careers: ["Software Engineering", "Data Science", "Biotechnology", "Mechanical Engineering"],
        description: "Your analytical mind and interest in technology make you perfect for STEM careers!"
      };
    } else if (answerValues.includes("arts") || answerValues.includes("creative")) {
      return {
        title: "Creative Arts",
        careers: ["Graphic Design", "Content Writing", "Digital Marketing", "Film Production"],
        description: "Your creative flair and artistic vision open doors to exciting creative careers!"
      };
    } else if (answerValues.includes("commerce") || answerValues.includes("business")) {
      return {
        title: "Business & Commerce",
        careers: ["Business Management", "Finance", "Marketing", "Entrepreneurship"],
        description: "Your business acumen and leadership qualities are perfect for commerce fields!"
      };
    } else {
      return {
        title: "Social Sciences",
        careers: ["Psychology", "Social Work", "Education", "Public Administration"],
        description: "Your empathy and desire to help others make you ideal for social impact careers!"
      };
    }
  };

  if (isCompleted) {
    const results = getResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <Navigation />
        
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="card-learning animate-fade-in">
            <CardHeader className="text-center">
              <div className="bg-secondary p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-secondary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-2">
                Quiz Completed! 🎉
              </CardTitle>
              <CardDescription className="text-lg">
                Here are your personalized career recommendations
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">{results.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{results.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {results.careers.map((career, index) => (
                  <div key={career} className="bg-muted p-4 rounded-xl animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h4 className="font-semibold text-foreground mb-2">{career}</h4>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setIsCompleted(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  variant="outline"
                >
                  Retake Quiz
                </Button>
                <Button className="btn-hero">
                  Explore Recommended Courses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="card-learning animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-hero p-3 rounded-xl">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            
            <Progress value={progress} className="mb-6" />
            
            <CardTitle className="text-2xl font-bold text-foreground">
              Aptitude & Interest Assessment
            </CardTitle>
            <CardDescription>
              Answer these questions to discover your ideal career path
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 border border-border rounded-xl hover:bg-muted transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-foreground">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              
              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!answers[currentQuestion]}
                  className="btn-hero flex items-center gap-2"
                >
                  Complete Quiz
                  <CheckCircle className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="btn-hero flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;