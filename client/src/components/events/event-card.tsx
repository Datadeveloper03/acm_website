import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import type { Event } from "@shared/schema";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden text-center">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-4 flex-wrap">
          <span>{event.title}</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            {format(new Date(event.date), "MMM d, yyyy")}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{event.description}</p>
        {event.isUpcoming && event.registrationLink && (
          <Button className="w-full" asChild>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}