import { Link } from "react-router-dom";
import { ShoppingCart, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

const ShopHeader = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/shop" className="flex items-center gap-2">
          <Store className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-foreground">ShopSimple</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/shop">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default ShopHeader;
