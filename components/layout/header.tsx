"use client";

import { Bot, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <h1 className="text-xl font-semibold">Unibots</h1>
        </Link>
        <div className="items-center ml-auto gap-4 hidden md:flex">

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}