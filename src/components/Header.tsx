
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold text-primary">
            T.H. Plumbing
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
           <Link href="https://th-plumbing.azurewebsites.net/SaleInvoice/Create" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              Client Portal
            </Link>
          <a href="tel:774-345-0358" className="text-sm font-medium">
            (774) 345-0358
          </a>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-headline text-primary">
                  T.H. Plumbing
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link href="https://th-plumbing.azurewebsites.net/SaleInvoice/Create" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">
                    Client Portal
                 </Link>
                <Button asChild className="mt-4" size="lg">
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
