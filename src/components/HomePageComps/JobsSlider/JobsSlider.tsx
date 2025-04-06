"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Briefcase, Clock, MapPin } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import { jobsData } from "@/resources/Constant";

export default function FeaturedJobsSlider() {
  return (
    <section className="py-10 px-2 md:px-12 main-container">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-8">
        Featured <span className="text-blue-700">Jobs</span>
      </h2>
      <Carousel
        className="w-full mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {jobsData.map((job) => (
            <CarouselItem key={job.id} className="basis-auto w-[340px] md:w-[380px]">
              <Card className="relative border shadow-sm pb-0">
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-bl-xl">{job.badge}</div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-sm md:text-base font-semibold text-blue-800">{job.title}</h3>
                  <p className="font-medium flex items-center gap-1">
                    {job.company}
                    {job.verified && <BadgeCheck className="w-4 h-4 text-purple-600" />}
                  </p>
                  <p className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" /> {job.type}
                  </p>
                  <p className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4 mr-1" /> {job.experience}
                  </p>
                  <p className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" /> {job.location}
                  </p>
                  <Link href="#">
                    <Button variant="ghost" className="w-full mt-2 text-black justify-center">
                      Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
