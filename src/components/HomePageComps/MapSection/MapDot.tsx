"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const MapDot = ({ title = "Australia", x = "0%", y = "0%", left = false, delay = "delay-0" }) => {
  return (
    <div
      className={cn("absolute z-5 flex items-center justify-center rounded-full", "min-w-[12px] h-[12px] sm:min-w-[30px] sm:h-[30px]", "group")}
      style={{ top: y, left: x }}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          "text-[10px] sm:text-[12px] leading-[120%]",
          "bg-primary text-primary-foreground",
          "rounded-[2px] sm:rounded-[8px]",
          "font-sans px-1 sm:px-3 py-1",
          left ? "right-[120%]" : "left-[120%]"
        )}
      >
        {title}
      </div>

      {/* Pulsing circles */}
      <span className={cn("absolute rounded-full opacity-40 bg-blue animate-ping  w-[8px] h-[8px] sm:w-[15px] sm:h-[15px]", delay)} />
      <span className={cn("absolute rounded-full opacity-40 bg-blue animate-ping  w-[5px] h-[5px] sm:w-[12px] sm:h-[12px]", delay)} />
      <span className={cn("rounded-full bg-blue w-[2px] h-[2px] sm:w-[8px] sm:h-[8px]", delay)} />
    </div>
  );
};
