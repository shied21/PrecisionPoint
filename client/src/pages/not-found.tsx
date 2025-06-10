import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  // Navigation links for better user experience
  const navLinks = [
    { id: 'home', text: 'Home', path: '/' },
    { id: 'projects', text: 'Projects', path: '/projects' },
    { id: 'partners', text: 'Partners', path: '/partners' }
  ];

  // Section links for home page
  const sectionLinks = [
    { id: 'services', text: 'Services' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 mb-6 text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2 flex items-center">
                <Home className="w-5 h-5 mr-2" />
                Navigate to
              </h2>
              <div className="flex flex-wrap gap-2">
                {navLinks.map(link => (
                  <Link key={link.id} href={link.path}>
                    <a>
                      <Button variant="outline" size="sm" className="flex items-center">
                        {link.text}
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">Sections on Home Page</h2>
              <div className="flex flex-wrap gap-2">
                {sectionLinks.map(link => (
                  <Link key={link.id} href={`/#${link.id}`}>
                    <a>
                      <Button variant="outline" size="sm" className="flex items-center">
                        {link.text}
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
