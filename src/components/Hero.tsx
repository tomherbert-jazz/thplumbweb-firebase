import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-split');

  return (
    <section className="bg-background">
      <div className="container grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            T. H. Plumbing & Heating LLC
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Trusted Plumbing Solutions for Your Home or Business
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild variant="accent">
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
        <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-2xl md:h-96">
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
        </div>
      </div>
    </section>
  );
}
