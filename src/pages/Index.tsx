import { useState } from "react";
import Header from "@/components/Header";
import ListingCard from "@/components/ListingCard";
import ListingDetails from "@/components/ListingDetails";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import { sampleListings } from "@/data/sampleListings";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (listing: any) => {
    setSelectedListing(listing);
    setIsDetailsOpen(true);
  };

  const filteredListings = sampleListings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      
      <main className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
            {searchTerm ? `Search results for "${searchTerm}"` : 'All Listings'}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {filteredListings.length} listing{filteredListings.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            : "space-y-4"
        }>
          {filteredListings.map((listing) => (
            <ListingCard 
              key={listing.id} 
              listing={listing} 
              viewMode={viewMode}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No listings found matching your search.</p>
          </div>
        )}
      </main>

      <ContactForm />
      
      <About />

      <ListingDetails
        listing={selectedListing}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  );
};

export default Index;
