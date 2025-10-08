import { Bath, Droplets, Filter, Flame, ShowerHead, Siren } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Leaky Faucet Repair",
    description: "T.H. Plumbing & Heating LLC can repair any leaky faucet, whether it's a simple fix or a complex repair. We're experts at diagnosing and repairing plumbing issues."
  },
  {
    icon: Filter,
    title: "Clogged Drain Cleaning",
    description: "A clogged drain is a major inconvenience. Let us take care of it for you. We have the tools and expertise to quickly and effectively clear any clog."
  },
  {
    icon: Bath,
    title: "Toilet Repair & Installation",
    description: "When it comes to toilets, T.H. Plumbing & Heating LLC is your go-to expert. We can repair or install any type of toilet, and we always provide fast and friendly service."
  },
  {
    icon: Flame,
    title: "Water Heater Services",
    description: "Is your water heater on the fritz? We offer repair and installation services for all types of water heaters, including tankless models."
  },
  {
    icon: ShowerHead,
    title: "Bathroom Remodeling",
    description: "T.H. Plumbing & Heating LLC can help you create the bathroom of your dreams. We offer a range of services, from simple upgrades to complete remodels."
  },
  {
    icon: Siren,
    title: "Emergency Plumbing Services",
    description: "Plumbing emergencies can happen at any time. That's why we offer 24/7 emergency services. Call us anytime, day or night, for fast and reliable service."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Expert Plumbing Services for Your Home
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive range of plumbing and heating solutions.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
