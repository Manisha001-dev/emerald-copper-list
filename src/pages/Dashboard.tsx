import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertCircle, CheckCircle, Key, Wallet, Smartphone, Briefcase, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Item {
  id: string;
  name: string;
  status: "present" | "missing";
  lastSeen: string;
  location: string;
  icon: any;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [items] = useState<Item[]>([
    {
      id: "1",
      name: "Keys",
      status: "present",
      lastSeen: "Just now",
      location: "Living Room Hub",
      icon: Key
    },
    {
      id: "2",
      name: "Wallet",
      status: "missing",
      lastSeen: "15 minutes ago",
      location: "Bedroom Hub",
      icon: Wallet
    },
    {
      id: "3",
      name: "Phone",
      status: "present",
      lastSeen: "Just now",
      location: "Office Desk Hub",
      icon: Smartphone
    },
    {
      id: "4",
      name: "Laptop Bag",
      status: "present",
      lastSeen: "2 minutes ago",
      location: "Office Entry Hub",
      icon: Briefcase
    }
  ]);

  const presentItems = items.filter(item => item.status === "present").length;
  const missingItems = items.filter(item => item.status === "missing").length;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Smart Lost & Found</h1>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/login")}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-elegant border-border/50">
            <CardHeader className="pb-3">
              <CardDescription>Total Items</CardDescription>
              <CardTitle className="text-4xl">{items.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Registered devices</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50 bg-primary/5">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Items Present
              </CardDescription>
              <CardTitle className="text-4xl text-primary">{presentItems}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">In range</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50 bg-destructive/5">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-destructive" />
                Items Missing
              </CardDescription>
              <CardTitle className="text-4xl text-destructive">{missingItems}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Out of range</p>
            </CardContent>
          </Card>
        </div>

        {/* Items List */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.id} 
                  className="shadow-elegant border-border/50 hover:shadow-glow transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${
                          item.status === "present" 
                            ? "bg-primary/10" 
                            : "bg-destructive/10"
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            item.status === "present" 
                              ? "text-primary" 
                              : "text-destructive"
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <CardDescription className="mt-1">
                            Tag ID: {item.id}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge 
                        variant={item.status === "present" ? "default" : "destructive"}
                        className="capitalize"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Last location:</span>
                      <span className="font-medium">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Last seen:</span>
                      <span className="font-medium">{item.lastSeen}</span>
                    </div>
                    {item.status === "missing" && (
                      <div className="mt-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                        <p className="text-sm text-destructive font-medium">
                          ⚠️ This item has been out of range for more than 5 minutes
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
