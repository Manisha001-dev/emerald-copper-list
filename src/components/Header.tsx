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
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-3 sm:space-y-0">
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">RB REALTY CONNECT</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">We help people connect buyers and sellers</p>
          </div>
          <div className="flex items-center space-x-2 self-end sm:self-auto">
            <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('grid')}>
              <Grid className="h-4 w-4" />
              <span className="hidden sm:inline ml-1">Grid</span>
            </Button>
            <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="sm" onClick={() => onViewModeChange('list')}>
              <List className="h-4 w-4" />
              <span className="hidden sm:inline ml-1">List</span>
            </Button>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground sm:hidden mb-3">We help people connect buyers and sellers</p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1 max-w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search listings..." value={searchTerm} onChange={e => onSearchChange(e.target.value)} className="pl-10 bg-background/50 w-full" />
          </div>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;