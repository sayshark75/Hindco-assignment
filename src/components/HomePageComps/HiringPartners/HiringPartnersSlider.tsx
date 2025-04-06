// components/TrustedPartnersCarousel.tsx
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { hiringPartnersData } from "@/resources/Constant";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export default function HiringPartnersSlider() {
  return (
    <div className="space-y-6 pt-2 pb-8 main-container px-2 md:px-12">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-8">
        Trusted by <span className="text-blue-700">20000+ hiring partners</span>
      </h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            stopOnInteraction: true,
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {hiringPartnersData.map((partner, index) => (
            <CarouselItem key={index} className="basis-auto px-2">
              <Link href={partner.link} target="_blank">
                <div className="relative border rounded-md p-2 w-[120px] h-[80px] flex items-center justify-center hover:shadow-md transition-shadow duration-300 bg-white">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
