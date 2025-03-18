import { useQuery } from "@tanstack/react-query";
import MemberCard from "@/components/team/member-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { TeamMember } from "@shared/schema";

export default function Team() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  return (
    <div className="min-h-screen">
      <div
        className="h-64 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496096265110-f83ad7f96608')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Our Team</h1>
        </div>
      </div>

      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-24 w-24 rounded-full mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
