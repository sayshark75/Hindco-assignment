import React from "react";

import startupLogo from "@/assets/icons/startuplogo.png";
import Image from "next/image";
import { footerLinks, footerSocialLinks } from "@/resources/Constant";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="w-full min-h-[200px] bg-black text-secondary-foreground">
      <section className="w-full main-container px-2 py-8">
        <div className="w-full flex flex-col-reverse fold:flex-row gap-8">
          <p className="text-sm text-secondary-foreground">
            <span className="font-semibold">Disclaimer:</span> All Trademarks and Logos are the property of their respective owners, depicted here
            purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job
            Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services
            are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All
            Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any
            jobseeker.
          </p>
          <div className="text-sm text-secondary-foreground min-w-[250px]">
            <p className="w-full text-xl text-center">Recognized by</p>
            <Image src={startupLogo} alt="startup logo" width={250} height={50} className="mx-auto" />
          </div>
        </div>
        <p className="text-base font-semibold mt-4">Follow Us:</p>
        <div className="w-full flex gap-2 md:gap-4 mt-2">
          {footerSocialLinks.map((link, index) => (
            <Link className="w-10" href={link.link} key={`footer-social-link-${index}`}>
              <div className="aspect-square hover:opacity-70 transition-opacity duration-300 flex items-center justify-center p-0.5 md:p-2 bg-primary text-primary-foreground rounded-full">
                <link.icon />
              </div>
            </Link>
          ))}
        </div>
        <hr className="bg-white mt-4" />
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
          {footerLinks.map((link, index) => (
            <React.Fragment key={`footer-link-key-${index}`}>
              <Link className={cn("text-sm", index !== footerLinks.length - 1 && "md:after:content-['|'] md:after:ml-4")} href={link.link}>
                {link.title}
              </Link>
            </React.Fragment>
          ))}
        </div>
        <p className="w-full text-center mt-4">© All Rights Reserved @ 2025 Jobtech Ventures Private Limited.</p>
      </section>
    </footer>
  );
};

export default Footer;
