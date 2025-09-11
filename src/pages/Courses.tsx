import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Courses = () => {
  const courseCategories = [
    {
      title: "Engineering & Technology",
      description: "Build the future with cutting-edge technology",
      icon: "🔧",
      courses: [
        {
          name: "Computer Science Engineering",
          duration: "4 years",
          careers: ["Software Developer", "Data Scientist", "AI Engineer"],
          demand: "High",
          avgSalary: "₹6-25 LPA"
        },
        {
          name: "Mechanical Engineering",
          duration: "4 years",
          careers: ["Design Engineer", "Project Manager", "Manufacturing Engineer"],
          demand: "High",
          avgSalary: "₹4-18 LPA"
        },
        {
          name: "Electronics Engineering",
          duration: "4 years",
          careers: ["Electronics Engineer", "Embedded Systems", "IoT Developer"],
          demand: "Medium",
          avgSalary: "₹5-20 LPA"
        }
      ]
    },
    {
      title: "Business & Management",
      description: "Lead organizations and drive business growth",
      icon: "💼",
      courses: [
        {
          name: "Bachelor of Business Administration",
          duration: "3 years",
          careers: ["Business Analyst", "Marketing Manager", "HR Manager"],
          demand: "High",
          avgSalary: "₹3-15 LPA"
        },
        {
          name: "Bachelor of Commerce",
          duration: "3 years",
          careers: ["Accountant", "Financial Analyst", "Tax Consultant"],
          demand: "Medium",
          avgSalary: "₹3-12 LPA"
        },
        {
          name: "MBA",
          duration: "2 years",
          careers: ["Senior Manager", "Consultant", "Entrepreneur"],
          demand: "High",
          avgSalary: "₹8-50 LPA"
        }
      ]
    },
    {
      title: "Arts & Humanities",
      description: "Express creativity and understand human culture",
      icon: "🎨",
      courses: [
        {
          name: "Bachelor of Arts (Psychology)",
          duration: "3 years",
          careers: ["Clinical Psychologist", "Counselor", "HR Specialist"],
          demand: "Medium",
          avgSalary: "₹3-10 LPA"
        },
        {
          name: "Mass Communication",
          duration: "3 years",
          careers: ["Journalist", "Content Creator", "PR Manager"],
          demand: "Medium",
          avgSalary: "₹3-15 LPA"
        },
        {
          name: "Fine Arts",
          duration: "4 years",
          careers: ["Graphic Designer", "Art Director", "Freelance Artist"],
          demand: "Medium",
          avgSalary: "₹2-20 LPA"
        }
      ]
    },
    {
      title: "Science & Research",
      description: "Discover and innovate through scientific inquiry",
      icon: "🔬",
      courses: [
        {
          name: "Bachelor of Science (Biology)",
          duration: "3 years",
          careers: ["Research Scientist", "Biotechnologist", "Lab Technician"],
          demand: "Medium",
          avgSalary: "₹3-12 LPA"
        },
        {
          name: "Physics",
          duration: "3 years",
          careers: ["Research Physicist", "Data Analyst", "Science Teacher"],
          demand: "Medium",
          avgSalary: "₹4-15 LPA"
        },
        {
          name: "Mathematics",
          duration: "3 years",
          careers: ["Data Scientist", "Actuary", "Quantitative Analyst"],
          demand: "High",
          avgSalary: "₹5-25 LPA"
        }
      ]
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "High": return "badge-success";
      case "Medium": return "badge-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore <span className="bg-gradient-hero bg-clip-text text-transparent">Courses & Careers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover detailed information about degree programs, career opportunities, 
            entrance exams, and higher education pathways.
          </p>
        </div>

        {/* Course Categories */}
        <div className="space-y-12">
          {courseCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{category.title}</h2>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.courses.map((course, courseIndex) => (
                  <Card key={course.name} className="card-learning animate-fade-in" style={{ animationDelay: `${(categoryIndex * 3 + courseIndex) * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="bg-gradient-hero p-2 rounded-lg">
                          <BookOpen className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <Badge className={getDemandColor(course.demand)}>
                          {course.demand} Demand
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-foreground">{course.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Career Opportunities
                        </h4>
                        <div className="space-y-1">
                          {course.careers.map((career) => (
                            <div key={career} className="text-sm text-muted-foreground">
                              • {career}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Average Salary
                        </h4>
                        <p className="text-primary font-semibold">{course.avgSalary}</p>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <Button className="w-full" variant="outline">
                          View Details
                        </Button>
                        <Button className="w-full btn-hero">
                          Find Colleges
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-learning max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Personalized Guidance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Take our aptitude quiz to get personalized course recommendations 
                based on your interests and strengths.
              </p>
              <Button className="btn-hero">
                Take Aptitude Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;