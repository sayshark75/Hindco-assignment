"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/resources/Constant";

export default function SearchFilters() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    // handle your search logic here
    e.preventDefault();
  };

  return (
    <section className="w-full py-4 px-4 bg-white rounded-md shadow-sm border">
      {/* Top Row: Input + CTA Buttons */}
      <div className="w-full main-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left: Search Input + Button */}
          <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-[440px]">
            <Input type="text" placeholder="Search Jobs Now" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full" />
            <Button type="submit" className="flex items-center gap-1">
              <Search className="w-4 h-4" />
              Search
            </Button>
          </form>

          {/* Right: View Jobs + Register Buttons */}
          <div className="flex gap-2 w-full md:w-max">
            <Link className="w-full md:w-max" href="/jobs">
              <Button className="w-full md:w-max" variant="outline">
                View Jobs
              </Button>
            </Link>
            <Link className="w-full md:w-max" href="/register">
              <Button className="min-w-full md:w-max">Register for FREE</Button>
            </Link>
          </div>
        </div>

        {/* Hashtags */}
        <div className="mt-4 max-w-[440px] flex flex-wrap gap-2 text-sm text-blue-600">
          {categories.map((tag) => (
            <Link
              key={tag}
              href={`/jobs/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
