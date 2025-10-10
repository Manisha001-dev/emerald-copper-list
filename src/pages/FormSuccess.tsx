import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const FormSuccess = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-primary" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Form Submitted!
        </h1>
        
        <p className="text-lg text-muted-foreground">
          Your form has been submitted successfully. We will contact you soon.
        </p>
        
        <Link to="/">
          <Button size="lg" className="mt-4">
            Go to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FormSuccess;
