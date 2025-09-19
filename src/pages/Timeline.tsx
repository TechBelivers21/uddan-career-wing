import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Bell, Download, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const Timeline = () => {
  const importantDates = [
    {
      date: "15 March 2024",
      title: "NEET Application Opens",
      description: "National Eligibility cum Entrance Test applications begin for medical colleges",
      type: "Medical",
      status: "upcoming",
      link: "https://neet.nta.nic.in"
    },
    {
      date: "1 April 2024",
      title: "JEE Main Registration",
      description: "Joint Entrance Examination registration for engineering colleges",
      type: "Engineering",
      status: "upcoming",
      link: "https://jeemain.nta.nic.in"
    },
    {
      date: "10 May 2024",
      title: "Kashmir University Admissions",
      description: "University of Kashmir undergraduate admission applications start",
      type: "Arts & Sciences",
      status: "upcoming",
      link: "https://www.kashmiruniversity.ac.in"
    },
    {
      date: "25 May 2024",
      title: "CUET Registration",
      description: "Common University Entrance Test for central universities",
      type: "All Streams",
      status: "upcoming",
      link: "https://cuet.samarth.ac.in"
    },
    {
      date: "15 June 2024",
      title: "J&K Board Results",
      description: "Class 12th results declaration by J&K Board of School Education",
      type: "Board Results",
      status: "upcoming",
      link: "https://jkbose.ac.in"
    },
    {
      date: "1 July 2024",
      title: "State Quota Counselling",
      description: "J&K state quota counselling for medical and engineering seats",
      type: "Counselling",
      status: "upcoming",
      link: "https://www.jacjakdelhi.nic.in"
    },
    {
      date: "20 July 2024",
      title: "NIT Srinagar Admissions",
      description: "JoSAA counselling for NIT Srinagar begins",
      type: "Engineering",
      status: "upcoming",
      link: "https://josaa.nic.in"
    },
    {
      date: "10 August 2024",
      title: "Scholarship Applications",
      description: "Various state and central scholarship applications deadline",
      type: "Scholarships",
      status: "upcoming",
      link: "https://scholarships.gov.in"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "badge-success";
      case "upcoming": return "badge-accent";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Medical": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Engineering": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Arts & Sciences": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Counselling": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
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
            Academic <span className="bg-gradient-hero bg-clip-text text-transparent">Timeline</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay on top of important dates for admissions, exams, scholarships, and counselling 
            sessions throughout the academic year.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <Card className="card-learning">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Set Reminders</h3>
              <p className="text-muted-foreground mb-4">Get notified about important dates</p>
              <Button variant="outline" className="w-full">
                <Bell className="h-4 w-4 mr-2" />
                Enable Notifications
              </Button>
            </CardContent>
          </Card>

          <Card className="card-learning">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Download Calendar</h3>
              <p className="text-muted-foreground mb-4">Add events to your personal calendar</p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="card-learning">
            <CardContent className="p-6 text-center">
              <ExternalLink className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Official Links</h3>
              <p className="text-muted-foreground mb-4">Direct access to application portals</p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Links
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {importantDates.map((event, index) => (
                <div key={index} className="relative flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="card-learning">
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <span className="text-sm font-medium text-muted-foreground">{event.date}</span>
                            <Badge className={getStatusColor(event.status)}>
                              {event.status}
                            </Badge>
                          </div>
                          <Badge className={getTypeColor(event.type)}>
                            {event.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(event.link, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Official Link
                          </Button>
                          <Button 
                            size="sm" 
                            className="btn-hero"
                          >
                            <Bell className="h-4 w-4 mr-2" />
                            Set Reminder
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="card-learning max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Never Miss Important Dates
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get timely reminders about admissions, 
                exams, and scholarship deadlines directly in your inbox.
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

export default Timeline;