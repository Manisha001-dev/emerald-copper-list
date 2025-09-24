import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, User, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    budget: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      propertyType: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Ready to find your dream property or sell your current one? Let us help you connect with the right opportunities.
            </p>
          </div>

          <Card className="shadow-elegant border-border/50">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-foreground">
                Professional Real Estate Consultation
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out the form below and our expert team will contact you within 24 hours
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2 text-sm font-medium">
                      <MapPin className="w-4 h-4 text-primary" />
                      Preferred Location
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="City, State or Area"
                      className="h-10 sm:h-11"
                    />
                  </div>
                </div>

                {/* Property Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="propertyType" className="text-sm font-medium">
                      Property Type
                    </Label>
                    <Select value={formData.propertyType} onValueChange={(value) => handleChange("propertyType", value)}>
                      <SelectTrigger className="h-10 sm:h-11">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-sm font-medium">
                      Budget Range
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger className="h-10 sm:h-11">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under $100K</SelectItem>
                        <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                        <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                        <SelectItem value="500k-750k">$500K - $750K</SelectItem>
                        <SelectItem value="750k-1m">$750K - $1M</SelectItem>
                        <SelectItem value="over-1m">Over $1M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                    className="min-h-[100px] sm:min-h-[120px] resize-none"
                    rows={4}
                  />
                </div>

                <div className="pt-2 sm:pt-4">
                  <Button 
                    type="submit" 
                    className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold shadow-glow hover:shadow-lg transition-all duration-300"
                  >
                    Send Inquiry
                  </Button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    By submitting this form, you agree to be contacted by our team regarding your real estate needs.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;