import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import type { TeamMember } from "@shared/schema";

interface MemberCardProps {
  member: TeamMember;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="text-center">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarImage src={member.imageUrl} alt={member.name} />
          <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <CardTitle>{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {member.role}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className="flex justify-center space-x-4">
            {member.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                {link.includes('github') ? (
                  <SiGithub className="h-5 w-5" />
                ) : (
                  <SiLinkedin className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
