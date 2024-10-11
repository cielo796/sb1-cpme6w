import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentAdmissions = [
  {
    name: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "William Chen",
    email: "william.chen@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "Sofia Rodriguez",
    email: "sofia.rodriguez@example.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Liam Patel",
    email: "liam.patel@example.com",
    avatar: "/avatars/04.png",
  },
  {
    name: "Emma Thompson",
    email: "emma.thompson@example.com",
    avatar: "/avatars/05.png",
  },
]

export function RecentAdmissions() {
  return (
    <div className="space-y-8">
      {recentAdmissions.map((admission) => (
        <div key={admission.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={admission.avatar} alt="Avatar" />
            <AvatarFallback>{admission.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{admission.name}</p>
            <p className="text-sm text-muted-foreground">
              {admission.email}
            </p>
          </div>
          <div className="ml-auto font-medium">Admitted</div>
        </div>
      ))}
    </div>
  )
}