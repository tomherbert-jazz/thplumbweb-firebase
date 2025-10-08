import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, SlidersHorizontal, UserCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const features = [
  {
    icon: Award,
    title: "Reliable Professionals",
    description: "Whether you need a simple faucet installation or complete sewer line replacement, we offer a wide range of residential and commercial plumbing services to meet your needs. We continually strive to exceed expectations by ensuring that each client receives the very best service.",
    imageId: "feature-reliable",
    cta: {
      href: "#contact",
      text: "Get A Quote"
    }
  },
  {
    icon: SlidersHorizontal,
    title: "Individualized Plumbing Options",
    description: "We strive to exceed expectations by ensuring that all plumbing work is completed to the highest standards. We will provide you with a free consultation to explain all of your available options so that you can choose the scope of work that’s right for your home or business.",
    imageId: "feature-options",
    cta: {
      href: "#services",
      text: "View Services"
    }
  },
  {
    icon: UserCheck,
    title: "Customer Satisfaction Guaranteed",
    description: "We serve both residential and commercial clients and offer a variety of money-saving solutions. We combine our use of the highest quality parts and equipment, and our dedication to delivering exceptional work to provide you with satisfactory service.",
    imageId: "feature-satisfaction",
    cta: {
      href: "#contact",
      text: "Contact Us"
    }
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const image = PlaceHolderImages.find(img => img.id === feature.imageId);
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex flex-col overflow-hidden border-2 shadow-lg transition-transform hover:scale-105">
                {image && (
                   <div className="aspect-video overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <p className="text-muted-foreground">{feature.description}</p>
                   <Button asChild variant="link" className="p-0 h-auto justify-start mt-4">
                    <Link href={feature.cta.href}>{feature.cta.text} &raquo;</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
