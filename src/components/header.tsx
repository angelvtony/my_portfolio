"use client"

import * as React from "react";
import Link from "next/link";
import { Menu, Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void; }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      {children}
    </a>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">
            {personalInfo.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">A list of links to navigate the portfolio website.</SheetDescription>
              </SheetHeader>
              <Link href="#home" className="mb-8 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Code className="mr-2 h-6 w-6 text-primary" />
                <span className="font-bold">{personalInfo.name}</span>
              </Link>
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}</NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
