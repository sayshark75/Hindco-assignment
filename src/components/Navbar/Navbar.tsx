"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logoImg from "@/assets/icons/logo.svg";
import { navLinks } from "@/resources/Constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0 z-400">
      <div className="main-container relative flex items-center justify-between px-4 py-3 md:px-0">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Image width={160} height={90} src={logoImg.src} priority alt="Job Ringer" title="Job Ringer: India's Best Job Portal" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden fold:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={link.href} className="text-sm font-medium text-gray-700 hover:text-black transition">
                {link.label}
              </Link>
            </motion.div>
          ))}
          <Button variant="outline" className="text-sm">
            Jobseeker Login
          </Button>
          <Button className="text-sm">Employer Login</Button>
        </nav>

        {/* Mobile Menu */}
        <div className="fold:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetTitle className="hidden"></SheetTitle>
            <SheetDescription className="hidden"></SheetDescription>
            <SheetContent side="right" className="w-[250px] z-500 sm:w-[300px] p-4">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center text-base text-gray-700 hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
                <Button variant="outline" className="mt-6 w-full">
                  Jobseeker Login
                </Button>
                <Button className="w-full">Employer Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
