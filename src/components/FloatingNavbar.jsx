import { useState, useEffect } from "react";
import { Moon, Sun, Layers, Code, Send, User, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/maisha-logo.png";

const navItems = [
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#skills", label: "Skills", icon: Code },
  { href: "#portfolio", label: "Projects", icon: Layers },
  { href: "#contact", label: "Contact", icon: Send },
];

function FloatingNavbar({ className = "" }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 z-50 w-[min(90vw,720px)] -translate-x-1/2 rounded-full border bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:bg-gray-900/80",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold text-foreground"
        >
          <img
            src={logoImg}
            alt="MC"
            className="h-9 w-9 rounded-full object-contain"
          />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-1 sm:gap-3">
          {/* eslint-disable-next-line no-unused-vars */}
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2 rounded-full px-2 py-2 text-xs font-medium text-foreground transition hover:bg-foreground/5 sm:px-3 sm:text-sm"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="text-foreground hover:bg-foreground/5"
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default FloatingNavbar;
