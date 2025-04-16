"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Properties", href: "/" },
  { name: "Search", href: "/Search" },
  { name: "Agent", href: "/Agent" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 sticky custom-container">
      <nav className="flex justify-between items-center mx-auto h-[89px]">
        {/* Logo */}
        <div>
          <Link href="/">
            <p className="font-bricolage text-[32px]">Bentfort</p>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "nav transition-colors hover:text-primary text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            href="/signup"
            className="bg-foreground rounded-md text-background btn"
          >
            Sign Up
          </Link>
          <Link href="/login" className="border border-foreground btn">
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background px-4 py-3 border-t">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 text-foreground perks-p2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="bg-foreground text-background text-center btn"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="border border-foreground text-center btn"
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
      )}
    </header>
  );
}
