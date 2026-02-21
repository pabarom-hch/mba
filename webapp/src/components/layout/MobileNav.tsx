"use client";

import { useState } from "react";
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
  Menu,
  X,
  Briefcase,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "MBA Curriculum", href: "/mba", icon: GraduationCap },
  { name: "Mentor Curriculum", href: "/mentor", icon: Users },
  { name: "Case Studies", href: "/cases", icon: Briefcase },
  { name: "PE Buy & Build", href: "/pe", icon: Building2 },
  { name: "Morning Ritual", href: "/rituals/morning", icon: Sun },
  { name: "Evening Reflection", href: "/rituals/evening", icon: Moon },
  { name: "Reading List", href: "/books", icon: BookOpen },
  { name: "My Notes", href: "/notes", icon: StickyNote },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-muted-foreground"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform bg-background border-r border-border transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-orange-500" />
            <span className="font-semibold text-lg">CEO Platform</span>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-orange-500/10 text-orange-500"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
