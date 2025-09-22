import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  return <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-foreground">Premium Listings</h1>
            
          </div>
          <div className="flex items-center space-x-2">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('grid')}>
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('list')}>
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search listings..." value={searchTerm} onChange={e => onSearchChange(e.target.value)} className="pl-10 bg-background/50" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;