import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, ExternalLink, FileText, Video, Users, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import engineeringLabImage from "@/assets/engineering-lab.jpg";
import medicalCollegeImage from "@/assets/medical-college.jpg";
import kashmirCampusImage from "@/assets/kashmir-campus.jpg";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Course Brochures & Guides",
      description: "Detailed information about various courses and career paths",
      icon: FileText,
      items: [
        {
          title: "Engineering Courses Guide 2024",
          description: "Complete guide to engineering branches, eligibility, and career prospects",
          type: "PDF",
          size: "2.5 MB",
          downloads: "1.2K",
          image: engineeringLabImage,
          category: "Engineering"
        },
        {
          title: "Medical Education Handbook",
          description: "MBBS, BDS, and other medical courses information and admission process",
          type: "PDF",
          size: "3.1 MB",
          downloads: "980",
          image: medicalCollegeImage,
          category: "Medical"
        },
        {
          title: "Arts & Humanities Career Guide",
          description: "Career opportunities in literature, psychology, social sciences",
          type: "PDF",
          size: "1.8 MB",
          downloads: "756",
          image: kashmirCampusImage,
          category: "Arts"
        }
      ]
    },
    {
      title: "Video Resources",
      description: "Educational videos and virtual campus tours",
      icon: Video,
      items: [
        {
          title: "Virtual Tour: NIT Srinagar",
          description: "Take a virtual tour of the premier engineering institute",
          type: "Video",
          duration: "12 min",
          views: "5.4K",
          category: "Engineering"
        },
        {
          title: "Career Counselling Session",
          description: "Expert guidance on choosing the right career path",
          type: "Video",
          duration: "45 min",
          views: "3.2K",
          category: "General"
        },
        {
          title: "Scholarship Application Guide",
          description: "Step-by-step guide to apply for various scholarships",
          type: "Video",
          duration: "20 min",
          views: "2.8K",
          category: "Scholarships"
        }
      ]
    },
    {
      title: "Study Materials",
      description: "Free study resources and preparation materials",
      icon: BookOpen,
      items: [
        {
          title: "JEE Main Preparation Kit",
          description: "Previous year questions, mock tests, and study material",
          type: "ZIP",
          size: "45 MB",
          downloads: "2.1K",
          category: "Engineering"
        },
        {
          title: "NEET Biology Notes",
          description: "Comprehensive biology notes for NEET preparation",
          type: "PDF",
          size: "8.5 MB",
          downloads: "1.8K",
          category: "Medical"
        },
        {
          title: "General Studies for Competitive Exams",
          description: "Current affairs and general knowledge compilation",
          type: "PDF",
          size: "12 MB",
          downloads: "3.5K",
          category: "General"
        }
      ]
    }
  ];

  const scholarships = [
    {
      name: "Prime Minister's Special Scholarship Scheme",
      eligibility: "J&K students for professional courses outside the state",
      amount: "₹3,000 - ₹5,400 per month",
      deadline: "September 30, 2024",
      link: "https://www.aicte-india.org/schemes/students-development-schemes/PM-Special-Scholarship-Scheme"
    },
    {
      name: "National Scholarship Portal",
      eligibility: "Merit and means-based scholarships for various categories",
      amount: "Varies",
      deadline: "October 31, 2024",
      link: "https://scholarships.gov.in"
    },
    {
      name: "J&K State Scholarship",
      eligibility: "Domicile of J&K for higher education",
      amount: "₹2,000 - ₹8,000 per year",
      deadline: "November 15, 2024",
      link: "https://jkgad.nic.in"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Engineering": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Medical": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Arts": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Scholarships": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Educational <span className="bg-gradient-hero bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access free study materials, course brochures, scholarship information, 
            and expert guidance to support your educational journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={item.title} className="card-learning animate-fade-in overflow-hidden" style={{ animationDelay: `${(categoryIndex * 3 + itemIndex) * 0.1}s` }}>
                    {item.image && (
                      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                        <div className="h-full bg-black/40 flex items-end p-4">
                          <Badge className="bg-white/90 text-primary">
                            {item.type}
                          </Badge>
                        </div>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground mb-1">{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        {item.size && (
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {item.size}
                          </span>
                        )}
                        {item.duration && (
                          <span className="flex items-center gap-1">
                            <Video className="h-4 w-4" />
                            {item.duration}
                          </span>
                        )}
                        {item.downloads && (
                          <span className="flex items-center gap-1">
                            <Download className="h-4 w-4" />
                            {item.downloads} downloads
                          </span>
                        )}
                        {item.views && (
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {item.views} views
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        <Button className="flex-1 btn-hero" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scholarships Section */}
        <div className="mt-16 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available <span className="bg-gradient-hero bg-clip-text text-transparent">Scholarships</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Financial assistance opportunities for students from Jammu & Kashmir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={scholarship.name} className="card-learning animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <Star className="h-5 w-5 text-accent" />
                    {scholarship.name}
                  </CardTitle>
                  <CardDescription>{scholarship.eligibility}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Amount: </span>
                      <span className="text-muted-foreground">{scholarship.amount}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Deadline: </span>
                      <span className="text-muted-foreground">{scholarship.deadline}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full btn-hero"
                    onClick={() => window.open(scholarship.link, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="card-learning max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get New Resources First
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive notifications about new study materials, 
                scholarship opportunities, and educational resources.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="btn-hero">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;