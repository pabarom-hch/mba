"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Users,
  BookOpen,
  StickyNote,
  Sun,
  Moon,
  BarChart3,
  Home,
  Flame,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "MBA Curriculum",
    href: "/mba",
    icon: GraduationCap,
  },
  {
    name: "Mentor Curriculum",
    href: "/mentor",
    icon: Users,
  },
  {
    name: "Case Studies",
    href: "/cases",
    icon: Briefcase,
  },
];

const secondary = [
  {
    name: "Morning Ritual",
    href: "/rituals/morning",
    icon: Sun,
  },
  {
    name: "Evening Reflection",
    href: "/rituals/evening",
    icon: Moon,
  },
  {
    name: "Reading List",
    href: "/books",
    icon: BookOpen,
  },
  {
    name: "My Notes",
    href: "/notes",
    icon: StickyNote,
  },
];

interface SidebarProps {
  streak?: number;
}

export function Sidebar({ streak = 0 }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 border-b border-zinc-800">
        <BarChart3 className="h-6 w-6 text-orange-500" />
        <span className="font-semibold text-lg">CEO Platform</span>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        {/* Main Navigation */}
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-orange-500/10 text-orange-500"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>

        <Separator className="my-4 bg-zinc-800" />

        {/* Secondary Navigation */}
        <div className="space-y-1">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Daily Practice
          </p>
          {secondary.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-orange-500/10 text-orange-500"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </ScrollArea>

      {/* Streak Display */}
      {streak > 0 && (
        <div className="border-t border-zinc-800 px-4 py-4">
          <div className="flex items-center gap-2 rounded-lg bg-orange-500/10 px-3 py-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-orange-500">
                {streak} Day Streak
              </p>
              <p className="text-xs text-zinc-500">Keep it going!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
