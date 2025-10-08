"use client";

import { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { handleContactForm } from "@/app/actions";
import type { ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, MapPin, Phone, Loader } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" variant="accent">
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Submit Quote Request"
      )}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();
  const contactMedia = PlaceHolderImages.find((img) => img.id === "contact-map");

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to start your project? Contact us today for a free, no-obligation quote.
              </p>
            </div>
            <div className="space-y-4">
              <a href="tel:774-345-0358" className="flex items-center gap-4 group">
                <Phone className="h-6 w-6 text-primary" />
                <span className="font-medium group-hover:underline">(774) 345-0358</span>
              </a>
              <a href="mailto:tomherbertjazz@gmail.com" className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="font-medium group-hover:underline">tomherbertjazz@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="font-medium">Princeton, MA 01520</span>
              </div>
            </div>
            <Separator />
            {contactMedia && (
              <div className="overflow-hidden rounded-lg shadow-lg">
                <video
                  src={contactMedia.imageUrl}
                  width="600"
                  height="400"
                  className="w-full object-cover aspect-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle>Request a Free Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea id="details" name="details" placeholder="Please describe your plumbing or heating needs." rows={5} />
                  {state.errors?.details && <p className="text-sm font-medium text-destructive">{state.errors.details[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
