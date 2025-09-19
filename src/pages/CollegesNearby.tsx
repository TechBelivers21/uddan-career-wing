import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Phone, Globe, Star, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import kashmirCampusImage from "@/assets/kashmir-campus.jpg";

const CollegesNearby = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const jkDistricts = [
    "Srinagar", "Baramulla", "Kupwara", "Bandipora", "Ganderbal", "Budgam", 
    "Anantnag", "Kulgam", "Shopian", "Pulwama", "Jammu", "Kathua", "Samba", 
    "Udhampur", "Reasi", "Doda", "Kishtwar", "Ramban", "Rajouri", "Poonch"
  ];

  const collegeTypes = ["All", "Engineering", "Medical", "Arts & Sciences", "Management", "Law"];

  const colleges = [
    {
      name: "National Institute of Technology Srinagar",
      type: "Engineering",
      district: "Srinagar",
      rating: 4.5,
      students: "3000+",
      courses: ["B.Tech", "M.Tech", "PhD"],
      phone: "+91-194-2420-015",
      website: "https://www.nitsri.ac.in",
      description: "Premier technical institute offering world-class engineering education",
      facilities: ["Library", "Hostels", "Labs", "Sports Complex"],
      image: kashmirCampusImage
    },
    {
      name: "Government Medical College Srinagar",
      type: "Medical",
      district: "Srinagar",
      rating: 4.3,
      students: "800+",
      courses: ["MBBS", "MD", "MS"],
      phone: "+91-194-2401-013",
      website: "https://www.gmcsrinagar.edu.in",
      description: "Leading medical college providing quality healthcare education",
      facilities: ["Hospital", "Labs", "Library", "Hostels"]
    },
    {
      name: "University of Kashmir",
      type: "Arts & Sciences",
      district: "Srinagar",
      rating: 4.2,
      students: "15000+",
      courses: ["BA", "BSc", "MA", "MSc", "PhD"],
      phone: "+91-194-2414-049",
      website: "https://www.kashmiruniversity.ac.in",
      description: "Oldest and largest university in Kashmir valley",
      facilities: ["Central Library", "Multiple Hostels", "Research Centers", "Sports Facilities"]
    },
    {
      name: "Islamic University of Science & Technology",
      type: "Engineering",
      district: "Ganderbal",
      rating: 4.1,
      students: "4000+",
      courses: ["B.Tech", "MBA", "MCA", "PhD"],
      phone: "+91-194-2420-422",
      website: "https://www.islamicuniversity.edu.in",
      description: "Multi-disciplinary university with focus on technology and management",
      facilities: ["Digital Library", "Hostels", "Advanced Labs", "Auditorium"]
    },
    {
      name: "Government Medical College Jammu",
      type: "Medical",
      district: "Jammu",
      rating: 4.4,
      students: "900+",
      courses: ["MBBS", "MD", "MS", "DM"],
      phone: "+91-191-2585-071",
      website: "https://www.gmcjammu.nic.in",
      description: "Premier medical institution in Jammu region",
      facilities: ["Teaching Hospital", "Research Labs", "Digital Library", "Hostels"]
    },
    {
      name: "Shri Mata Vaishno Devi University",
      type: "Engineering",
      district: "Reasi",
      rating: 4.3,
      students: "5000+",
      courses: ["B.Tech", "MBA", "B.Arch", "PhD"],
      phone: "+91-191-2770-090",
      website: "https://www.smvdu.ac.in",
      description: "State university offering diverse academic programs",
      facilities: ["Modern Campus", "Hostels", "Research Centers", "Sports Complex"]
    }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesDistrict = !selectedDistrict || college.district === selectedDistrict;
    const matchesType = !selectedType || selectedType === "All" || college.type === selectedType;
    const matchesSearch = !searchQuery || college.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDistrict && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find <span className="bg-gradient-hero bg-clip-text text-transparent">Colleges Nearby</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover top educational institutions in Jammu & Kashmir. Find the perfect college 
            for your career goals with detailed information and direct contact.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 animate-slide-up">
          <Card className="card-learning">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search colleges..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Districts</SelectItem>
                    {jkDistricts.map(district => (
                      <SelectItem key={district} value={district}>{district}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="College Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {collegeTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button className="btn-hero">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredColleges.map((college, index) => (
            <Card key={college.name} className="card-learning animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {college.image && (
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${college.image})` }}>
                  <div className="h-full bg-black/20 flex items-end p-4">
                    <Badge className="bg-white/90 text-primary">
                      {college.type}
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-1">{college.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {college.district}, J&K
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{college.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{college.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{college.students} students</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Courses Offered</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map(course => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities?.map(facility => (
                      <Badge key={facility} className="badge-accent">
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(`tel:${college.phone}`, '_self')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    className="flex-1 btn-hero"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 animate-fade-in">
          <Card className="card-learning max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with College News
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on admissions, scholarships, and educational opportunities in J&K
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" />
                <Button className="btn-hero">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollegesNearby;