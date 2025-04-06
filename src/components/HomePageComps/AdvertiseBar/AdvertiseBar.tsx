"use client";

import Link from "next/link";
import React from "react";
import { ShinyText } from "./ShinyText";

export default function AdvertiseBar() {
  return (
    <div className="w-full bg-blue text-secondary-foreground text-sm">
      <div className="main-container px-3 md:px-0 py-2 w-full flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold hidden fold:inline">EMPLOYERS:</span>
          <ShinyText text="WELCOME OFFER - FREE JOB Postings and Much More." />
        </div>

        <div className="flex items-center gap-4 text-secondary-foreground flex-wrap text-sm">
          <Link href="/register" className="text-secondary-foreground hover:opacity-80 transition-opacity duration-300 font-medium">
            Register for FREE
          </Link>
          <Link href="/post-job" className="text-secondary-foreground hover:opacity-80 transition-opacity duration-300 font-medium">
            Post A Job
          </Link>
          <Link href="/sales-enquiry" className="text-secondary-foreground hover:opacity-80 transition-opacity duration-300 font-medium">
            Sales Enquiry
          </Link>
        </div>
      </div>
    </div>
  );
}
