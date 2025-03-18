import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-4">
              <img 
                src="/logo-new-removebg-preview.png" 
                alt="College Logo" 
                className="h-12 w-auto"
              />
              <img 
                src="/1740374618779-removebg-preview.png" 
                alt="ACM-W Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-center">St. Joseph's Institute of Technology ACM-W</span>
            </a>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "transition-colors hover:text-primary",
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}