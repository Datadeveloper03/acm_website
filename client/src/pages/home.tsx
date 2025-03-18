import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/home/hero";
import EventCard from "@/components/events/event-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const { data: upcomingEvents } = useQuery({
    queryKey: ["/api/events/upcoming"],
  });

  return (
    <div>
      <Hero />

      <section className="py-16 bg-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Why Join ACM-W?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Professional Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Access to workshops, conferences, and networking opportunities to build your career in technology.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Connect with experienced professionals and peers who can guide your journey in computing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Develop leadership skills through organizing events and managing chapter initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents?.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/1740374618779-removebg-preview.png"
                alt="ACM-W Logo"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We are dedicated to celebrating and advocating for women in computing at St. Joseph's Institute of Technology. Our chapter provides opportunities for personal and professional growth through workshops, mentorship, and networking events.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}