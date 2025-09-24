import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock } from "lucide-react";
const About = () => {
  const stats = [{
    label: "Verified Listings",
    value: "500+",
    icon: Shield
  }, {
    label: "Professional Partners",
    value: "150+",
    icon: Award
  }, {
    label: "Satisfied Clients",
    value: "2,000+",
    icon: Users
  }, {
    label: "Years Experience",
    value: "10+",
    icon: Clock
  }];
  const features = [{
    title: "Premium Quality Assurance",
    description: "Every listing is professionally verified and maintained to the highest standards.",
    icon: Shield
  }, {
    title: "Professional Network",
    description: "Connect with verified professionals and premium service providers.",
    icon: Award
  }, {
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance to ensure your experience is seamless.",
    icon: Clock
  }, {
    title: "Trusted Community",
    description: "Join thousands of satisfied clients in our trusted marketplace.",
    icon: Users
  }];
  return <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
            About Premium Listings
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Excellence, Delivered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We connect professionals with premium spaces and services, ensuring quality, 
            reliability, and exceptional experiences for every client.
          </p>
        </div>

        {/* Stats Grid */}
        

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Mission Statement */}
        <Card className="mt-16 bg-gradient-to-r from-primary/5 to-copper/5 border-primary/20">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To revolutionize the professional marketplace by providing a trusted platform 
              where quality meets convenience. We believe every professional deserves access 
              to premium spaces and services that elevate their work and success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;