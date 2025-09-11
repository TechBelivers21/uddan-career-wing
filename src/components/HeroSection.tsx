import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "AI-powered career guidance based on your interests and strengths"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry professionals and experienced educators"
    },
    {
      icon: Trophy,
      title: "Success Stories",
      description: "Join thousands of students who found their perfect career path"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="badge-accent inline-block mb-6">
              ✨ Giving Wings to Your Career
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your <span className="bg-gradient-hero bg-clip-text text-transparent">One-Stop</span> Career & Education Advisor
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover your perfect career path with personalized aptitude tests, explore courses, 
              find nearby colleges, and get expert guidance to soar towards your dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => navigate("/quiz")}
                className="btn-hero group"
              >
                Take Aptitude Quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => navigate("/courses")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Explore Careers
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students with wings representing career growth and education"
                className="w-full h-auto rounded-3xl shadow-glow"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-hero rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Uddan?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="card-learning animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-gradient-hero p-3 rounded-xl w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;