import { Search, Grid, List, Home, Phone, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}
const Header = ({
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange
}: HeaderProps) => {
  return <header className="border-b border-border/50 bg-gradient-to-r from-card/80 via-card/90 to-card/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Bar with Logo and Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-b border-border/30">
          <div className="flex flex-col items-center lg:items-start space-y-1 mb-3 lg:mb-0">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                RB REALTY CONNECT
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground italic">Premium Real Estate Solutions</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="default" size="sm" className="gap-2 shadow-glow">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Contact Us</span>
              </Button>
            </Link>
          </nav>
        </div>
        
        {/* Search and View Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between py-3 sm:py-4 space-y-3 sm:space-y-0 gap-3 sm:gap-4">
          <div className="relative flex-1 max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search properties by location, type, or price..." 
              value={searchTerm} 
              onChange={e => onSearchChange(e.target.value)} 
              className="pl-10 bg-background/50 border-border/50 focus:border-primary h-10 sm:h-11 w-full transition-all" 
            />
          </div>
          
          <div className="flex items-center justify-end space-x-2">
            <span className="text-xs text-muted-foreground hidden md:inline mr-1">View:</span>
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => onViewModeChange('grid')}
              className="gap-1.5"
            >
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => onViewModeChange('list')}
              className="gap-1.5"
            >
              <List className="h-4 w-4" />
              <span className="hidden sm:inline">List</span>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;