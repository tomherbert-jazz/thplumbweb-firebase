import Link from "next/link";
import { Wrench, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold text-primary">
              T.H. Plumbing & Heating LLC
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
             <p>
              &copy; {new Date().getFullYear()} T.H. Plumbing & Heating LLC. All rights reserved.
            </p>
            <Link href="https://th-plumbing.azurewebsites.net/SaleInvoice/Create" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-primary transition-colors">
              Client Portal
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/people/TH-Plumbing-and-Heating/100087281157354/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
