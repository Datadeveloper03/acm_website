import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1620121692029-d088224ddc74')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1
        }}
      />
      <div className="container relative z-10 py-24 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Empowering Women in Computing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Join St. Joseph's Institute of Technology ACM-W chapter in fostering an inclusive tech community and advancing women in computing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}