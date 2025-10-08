import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[60dvh] min-h-[400px] w-full overflow-hidden md:h-[70dvh]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-end justify-center pb-12 text-center md:items-center md:pb-0">
        <div className="container max-w-4xl animate-fade-in-up text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-7xl">
            T. H. Plumbing & Heating LLC
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-200 drop-shadow-sm md:text-xl">
            Trusted Plumbing Solutions for Your Home or Business
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="accent">
              <Link href="#contact">Request a Free Quote</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <a href="tel:774-345-0358">
                <Phone className="mr-2 h-5 w-5" />
                Call (774) 345-0358
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
