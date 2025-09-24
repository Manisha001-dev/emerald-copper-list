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
      <DialogContent className="max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {listing.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {listing.location}
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-1 fill-copper text-copper" />
                  {listing.rating} Rating
                </div>
                <Badge variant="outline" className="text-xs">{listing.category}</Badge>
                {listing.featured && <Badge className="bg-gradient-to-r from-copper to-copper-light text-primary-foreground text-xs">
                    Featured
                  </Badge>}
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-2xl sm:text-3xl font-bold text-primary">{listing.price}</p>
              <p className="text-sm text-muted-foreground">Starting from</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="w-full">
            <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-medium text-foreground flex items-center text-sm sm:text-base">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Availability
              </h4>
              <p className="text-sm text-muted-foreground">
                {listing.availability || "Available 24/7"}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-medium text-foreground flex items-center text-sm sm:text-base">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Capacity
              </h4>
              <p className="text-sm text-muted-foreground">
                {listing.capacity || "Up to 50 people"}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-medium text-foreground flex items-center text-sm sm:text-base">
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
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Amenities & Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {amenities.map((amenity, index) => <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">{amenity}</span>
                </div>)}
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="bg-card border rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm break-all">{listing.contact?.phone || "+1 (555) 123-4567"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm break-all">{listing.contact?.email || "contact@listing.com"}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
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