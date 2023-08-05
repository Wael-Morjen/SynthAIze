import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
     <div>
        Dashboard Page (Protected)
        <UserButton afterSignOutUrl="/"/>
     </div>
    )
  }
   