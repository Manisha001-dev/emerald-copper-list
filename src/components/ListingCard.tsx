import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Star, Eye } from "lucide-react";

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

interface ListingCardProps {
  listing: Listing;
  viewMode: 'grid' | 'list';
  onViewDetails: (listing: Listing) => void;
}

const ListingCard = ({ listing, viewMode, onViewDetails }: ListingCardProps) => {
  if (viewMode === 'list') {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {listing.featured && (
              <Badge className="absolute top-2 left-2 bg-gradient-to-r from-copper to-copper-light text-primary-foreground">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex-1 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {listing.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-copper text-copper" />
                    {listing.rating}
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {listing.category}
                </Badge>
              </div>
              <div className="sm:text-right sm:ml-4 flex sm:flex-col justify-between sm:justify-start items-end sm:items-end">
                <p className="text-xl sm:text-2xl font-bold text-primary sm:mb-2">{listing.price}</p>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                  onClick={() => onViewDetails(listing)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">View Details</span>
                  <span className="sm:hidden">View</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" onClick={() => onViewDetails(listing)}>
      <div className="relative">
        <img
          src={listing.imageUrl}
          alt={listing.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {listing.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-copper to-copper-light text-primary-foreground">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex items-center bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 mr-1 fill-copper text-copper" />
          <span className="text-xs font-medium">{listing.rating}</span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {listing.title}
        </h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {listing.location}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {listing.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {listing.category}
          </Badge>
          <p className="text-lg font-bold text-primary">{listing.price}</p>
        </div>
        
        <Button 
          className="w-full mt-3 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90" 
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(listing);
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingCard;