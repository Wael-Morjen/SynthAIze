'use client';

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { 
    CodeIcon, 
    ImageIcon, 
    LayoutDashboard, 
    MessageSquare, 
    MusicIcon, 
    Settings, 
    VideoIcon 
} from "lucide-react";

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-600"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-600"
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        href: "/music",
        color: "text-emerald-600"
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        href: "/code",
        color: "text-green-600"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-white"
    },
];

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-4 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center mb-14 pl-3">
                    <div className="relative w-8 h-8 mr-4">
                        <Image 
                            fill
                            src="/logo.png"
                            alt="Logo"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>
                        SynthAIze
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className="
                                text-sm 
                                group 
                                flex 
                                p-3 
                                w-full 
                                font-medium 
                                justify-center 
                                cursor-pointer 
                                hover:text-white
                                hover:bg-white/10
                                rounded-lg
                                transition
                            "
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;