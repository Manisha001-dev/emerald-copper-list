import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star, Calendar, Clock, Users, Shield, CheckCircle, Phone, Mail, Share2 } from "lucide-react";
interface Listing {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  rating: number;
  imageUrl: string;
  category: string;
  featured?: boolean;
  fullDescription?: string;
  amenities?: string[];
  availability?: string;
  capacity?: string;
  contact?: {
    phone: string;
    email: string;
  };
  gallery?: string[];
}
interface ListingDetailsProps {
  listing: Listing | null;
  isOpen: boolean;
  onClose: () => void;
}
const ListingDetails = ({
  listing,
  isOpen,
  onClose
}: ListingDetailsProps) => {
  if (!listing) return null;
  const amenities = listing.amenities || ["High-speed WiFi", "Climate Control", "24/7 Security", "Parking Available", "Professional Cleaning", "Tech Support"];
  const gallery = listing.gallery || [listing.imageUrl];
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {listing.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {listing.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-copper text-copper" />
                  {listing.rating} Rating
                </div>
                <Badge variant="outline">{listing.category}</Badge>
                {listing.featured && <Badge className="bg-gradient-to-r from-copper to-copper-light text-primary-foreground">
                    Featured
                  </Badge>}
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{listing.price}</p>
              <p className="text-sm text-muted-foreground">Starting from</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <img src={listing.imageUrl} alt={listing.title} className="w-full h-64 md:h-80 object-cover rounded-lg" />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {listing.fullDescription || listing.description}
            </p>
          </div>

          <Separator />

          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Availability
              </h4>
              <p className="text-sm text-muted-foreground">
                {listing.availability || "Available 24/7"}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Capacity
              </h4>
              <p className="text-sm text-muted-foreground">
                {listing.capacity || "Up to 50 people"}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Duration
              </h4>
              <p className="text-sm text-muted-foreground">
                Flexible booking options
              </p>
            </div>
          </div>

          <Separator />

          {/* Amenities */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Amenities & Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenities.map((amenity, index) => <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{amenity}</span>
                </div>)}
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{listing.contact?.phone || "+1 (555) 123-4567"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{listing.contact?.email || "contact@listing.com"}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Professional verified listing with guaranteed quality and security.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          
        </div>
      </DialogContent>
    </Dialog>;
};
export default ListingDetails;