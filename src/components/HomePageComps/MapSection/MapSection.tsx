"use client";
import React from "react";
import map from "@/assets/images/map.webp";
import Image from "next/image";
import { MapDot } from "./MapDot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { internationalJobs, jobsInIndia } from "@/resources/Constant";
import Link from "next/link";

const MapSection = () => {
  return (
    <section className="main-container flex justify-center pt-2 items-center flex-col relative">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-8">
        Our Job <span className="text-blue-700">Locations</span>
      </h2>

      <article className="w-full px-0 fold:px-16 relative">
        <Card className="w-full mb-4 fold:mb-0 max-w-full fold:max-w-[400px] relative fold:absolute z-60 top-0 right-0 bg-blue/60 text-secondary-foreground">
          <CardHeader>
            <CardTitle>International Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {internationalJobs.map((job, index) => (
                <Link href={job.link} key={index} className="text-xs px-2 py-0.5 bg-primary text-primary-foreground rounded-full">
                  {job.title}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="relative aspect-[3/1.5]">
          <MapDot title="USA" x="18%" y="38%" delay="delay-300" />
          <MapDot title="Canada" x="19%" y="28%" />
          <MapDot title="UK" x="45%" y="29%" left={true} delay="delay-500" />
          <MapDot title="Dubai" x="63%" y="48%" delay="delay-700" />
          <MapDot title="Soudi Arabia" x="60%" y="50%" left={true} delay="delay-800" />
          <MapDot title="Africa" x="53%" y="57%" left={true} delay="delay-1100" />
          <MapDot title="Singapore" x="76%" y="64%" left={true} delay="delay-1000" />
          <MapDot title="India" x="68%" y="50%" delay="delay-200" />
          <MapDot title="Australia" x="83%" y="75%" left={true} delay="delay-400" />
          <MapDot title="New Zealand" x="92%" y="86%" left={true} delay="delay-600" />
          <Image
            className="w-full z-1"
            src={map.src}
            fill
            alt={
              "Our East-coast based firm can operate anywhere in the world and collaborates with your team from the very beginning. Equations provides a cohesive approach to every business' needs, remotely fulfilling the duties typically handled by several positions, all in one shot."
            }
          />
        </div>
        <Card className="w-full mt-4 fold:mt-2 max-w-full fold:max-w-[400px] relative fold:absolute z-60 bottom-0 left-0 bg-primary/60 text-primary-foreground">
          <CardHeader>
            <CardTitle>Jobs In India</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {jobsInIndia.map((job, index) => (
                <Link href={job.link} key={index} className="text-xs px-2 py-0.5 bg-blue text-secondary-foreground rounded-full">
                  {job.title}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default MapSection;
