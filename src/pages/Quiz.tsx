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
      question: "What subject interests you the most?",
      options: [
        { value: "science", label: "Science and Mathematics" },
        { value: "arts", label: "Arts and Literature" },
        { value: "commerce", label: "Commerce and Business" },
        { value: "technology", label: "Technology and Engineering" },
      ]
    },
    {
      id: 2,
      question: "Which activity do you enjoy most in your free time?",
      options: [
        { value: "reading", label: "Reading books and articles" },
        { value: "creating", label: "Creating art or writing" },
        { value: "solving", label: "Solving puzzles and problems" },
        { value: "socializing", label: "Meeting people and socializing" },
      ]
    },
    {
      id: 3,
      question: "What type of projects excite you?",
      options: [
        { value: "research", label: "Research and analysis projects" },
        { value: "creative", label: "Creative and design projects" },
        { value: "technical", label: "Technical and coding projects" },
        { value: "business", label: "Business and strategy projects" },
      ]
    },
    {
      id: 4,
      question: "Which work environment suits you best?",
      options: [
        { value: "team", label: "Collaborative team environment" },
        { value: "independent", label: "Independent and quiet workspace" },
        { value: "dynamic", label: "Dynamic and fast-paced" },
        { value: "structured", label: "Structured and organized" },
      ]
    },
    {
      id: 5,
      question: "What motivates you most in a career?",
      options: [
        { value: "helping", label: "Helping others and making impact" },
        { value: "innovation", label: "Innovation and creativity" },
        { value: "stability", label: "Job security and stability" },
        { value: "growth", label: "Continuous learning and growth" },
      ]
    },
    {
      id: 6,
      question: "Which skills do you want to develop?",
      options: [
        { value: "analytical", label: "Analytical and logical thinking" },
        { value: "communication", label: "Communication and leadership" },
        { value: "technical", label: "Technical and programming skills" },
        { value: "artistic", label: "Artistic and creative abilities" },
      ]
    },
    {
      id: 7,
      question: "What type of challenges excite you?",
      options: [
        { value: "complex", label: "Complex problem-solving" },
        { value: "people", label: "Working with diverse people" },
        { value: "creative", label: "Creative and artistic challenges" },
        { value: "strategic", label: "Strategic planning and execution" },
      ]
    },
    {
      id: 8,
      question: "Which subjects did you excel in during school?",
      options: [
        { value: "stem", label: "Science, Technology, Engineering, Math" },
        { value: "languages", label: "Languages and Literature" },
        { value: "social", label: "Social Studies and History" },
        { value: "arts", label: "Arts and Creative subjects" },
      ]
    },
    {
      id: 9,
      question: "What kind of impact do you want to make?",
      options: [
        { value: "technological", label: "Technological advancement" },
        { value: "social", label: "Social and community improvement" },
        { value: "economic", label: "Economic and business growth" },
        { value: "cultural", label: "Cultural and artistic contribution" },
      ]
    },
    {
      id: 10,
      question: "Which career aspect is most important to you?",
      options: [
        { value: "salary", label: "High salary and financial rewards" },
        { value: "passion", label: "Following your passion" },
        { value: "worklife", label: "Work-life balance" },
        { value: "prestige", label: "Social recognition and prestige" },
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
    const answerValues = Object.values(answers);
    const answerCounts: Record<string, number> = {};
    
    // Count occurrences of each answer type
    answerValues.forEach(answer => {
      answerCounts[answer] = (answerCounts[answer] || 0) + 1;
    });
    
    // Determine dominant interests
    const hasScience = answerValues.includes("science") || answerValues.includes("stem") || answerValues.includes("technical") || answerValues.includes("solving") || answerValues.includes("analytical");
    const hasArts = answerValues.includes("arts") || answerValues.includes("creative") || answerValues.includes("creating") || answerValues.includes("artistic") || answerValues.includes("cultural");
    const hasBusiness = answerValues.includes("commerce") || answerValues.includes("business") || answerValues.includes("strategic") || answerValues.includes("economic");
    const hasTechnology = answerValues.includes("technology") || answerValues.includes("technical") || answerValues.includes("technological");
    const hasSocial = answerValues.includes("helping") || answerValues.includes("people") || answerValues.includes("social") || answerValues.includes("socializing");
    
    if (hasTechnology || (hasScience && answerValues.includes("technical"))) {
      return {
        title: "Technology & Engineering",
        careers: ["Software Engineer", "Data Scientist", "AI/ML Engineer", "Cybersecurity Analyst", "Product Manager"],
        courses: ["Computer Science", "Information Technology", "Electronics Engineering", "Data Science"],
        description: "Your logical thinking and interest in technology make you perfect for the tech industry!",
        color: "blue"
      };
    } else if (hasScience) {
      return {
        title: "Science & Research",
        careers: ["Research Scientist", "Biotechnologist", "Environmental Scientist", "Medical Researcher", "Lab Technician"],
        courses: ["Physics", "Chemistry", "Biology", "Biotechnology", "Environmental Science"],
        description: "Your analytical mind and scientific curiosity open doors to research and innovation!",
        color: "green"
      };
    } else if (hasArts) {
      return {
        title: "Creative Arts & Design",
        careers: ["Graphic Designer", "Content Creator", "Film Director", "Marketing Creative", "Art Therapist"],
        courses: ["Fine Arts", "Graphic Design", "Mass Communication", "Film Studies", "Creative Writing"],
        description: "Your creative vision and artistic talents can flourish in the creative industries!",
        color: "purple"
      };
    } else if (hasBusiness) {
      return {
        title: "Business & Management",
        careers: ["Business Analyst", "Marketing Manager", "Entrepreneur", "Financial Advisor", "Operations Manager"],
        courses: ["Business Administration", "Commerce", "Economics", "Marketing", "Finance"],
        description: "Your strategic thinking and business acumen are perfect for leadership roles!",
        color: "orange"
      };
    } else if (hasSocial) {
      return {
        title: "Social Sciences & Humanities",
        careers: ["Psychologist", "Social Worker", "Teacher", "HR Manager", "Counselor"],
        courses: ["Psychology", "Sociology", "Education", "Social Work", "Human Resources"],
        description: "Your empathy and people skills make you ideal for careers that help others!",
        color: "teal"
      };
    } else {
      // Default balanced recommendation
      return {
        title: "Balanced Profile",
        careers: ["Project Manager", "Business Analyst", "Consultant", "Teacher", "Public Relations"],
        courses: ["Liberal Arts", "Business Administration", "Communications", "Management Studies"],
        description: "Your diverse interests give you flexibility to succeed in multiple fields!",
        color: "indigo"
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
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    🎓 Recommended Courses
                  </h4>
                  <div className="space-y-2">
                    {results.courses.map((course, index) => (
                      <div key={course} className="bg-white p-3 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <span className="text-green-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                    💼 Career Opportunities
                  </h4>
                  <div className="space-y-2">
                    {results.careers.map((career, index) => (
                      <div key={career} className="bg-white p-3 rounded-lg shadow-sm animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                        <span className="text-purple-700 font-medium">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
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