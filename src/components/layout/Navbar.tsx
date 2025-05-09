"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Properties", href: "/" },
  { name: "Search", href: "/search" },
  { name: "Agent", href: "/Agent" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 sticky bg-background dark:bg-card w-full">
      <section className="mx-auto px-4 w-full overflow-x-hidden container">
        <nav className="flex justify-between items-center h-[89px]">
          {/* Logo */}
          <Link href="/" className="font-bricolage text-[32px] cursor-pointer">
            Bentfort
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors nav"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/signup"
              className="bg-foreground hover:bg-primary rounded-md text-background dark:hover:text-foreground btn"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="border border-foreground hover:border-primary hover:text-primary btn"
            >
              Log In
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="w-5 h-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
              <MoonIcon className="absolute w-5 h-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Button
            className="md:hidden bg-card-foreground text-background"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </Button>
        </nav>
      </section>

      {/* Slide-in Sidebar Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-[999] transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <p className="font-bricolage text-xl">Menu</p>
          <Button onClick={() => setIsMenuOpen(false)}>
            <XIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 px-4 py-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/signup"
            className="bg-foreground hover:bg-primary px-4 py-2 rounded-md text-background"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 border border-foreground hover:border-primary rounded-md hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="self-start"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setIsMenuOpen(false);
            }}
          >
            <SunIcon className="w-5 h-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
            <MoonIcon className="absolute w-5 h-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
