import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-van');

  return (
    <section className="bg-background">
      <img src="/images/logo.jpg" alt="Company Logo" className="absolute top-[52px] left-4 w-32 h-32" />
      <div className="container grid grid-cols-1 items-center gap-12 pt-6 pb-12 md:grid-cols-2 md:py-12">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
            T. H. Plumbing & Heating LLC
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Trusted Plumbing Solutions for Your Home or Business
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="default">
              <Link href="#contact">Request a Free Quote</Link>
            </Button>
            <Button size="lg" asChild variant="outline">
              <a href="tel:774-345-0358">
                <Phone className="mr-2 h-5 w-5" />
                Call (774) 345-0358
              </a>
            </Button>
          </div>
           </div>


  <div className="relative overflow-hidden rounded-3xl shadow-2xl! hover:scale-105 transition-transform duration-300">
   {heroImage && (
    <div className="border-4 border-gray-400">
     <Image
       src={heroImage.imageUrl}
       alt={heroImage.description}
       width={900}
       height={700}
       className="h-auto  max-w-full" // Let the height adjust naturally
       priority
       data-ai-hint={heroImage.imageHint}
     />
    </div>
   )}


</div>
      </div>
    </section>
  );
}
