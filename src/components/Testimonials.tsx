import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote: "T. H. Plumbing and Heating LLC did an excellent job with our kitchen remodel. They were professional, punctual, and their work was top-notch. Highly recommended!",
    name: "John D.",
    location: "Holden, MA",
    avatar: "JD",
  },
  {
    quote: "I was impressed with their quick response time and attention to detail. They explained everything thoroughly and provided a fair quote. I'll definitely use them again for any future plumbing needs.",
    name: "Sarah M.",
    location: "Princeton, MA",
    avatar: "SM",
  },
  {
    quote: "I had an emergency plumbing issue in the middle of the night, and T. H. Plumbing & Heating LLC came to the rescue. Their team was incredibly responsive and solved the problem efficiently. I couldn't be more grateful for their excellent service!",
    name: "Jane S.",
    location: "Worcester, MA",
    avatar: "JS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We take pride in our work and value our customers' feedback.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full shadow-md">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <blockquote className="text-lg italic text-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="mt-4 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
