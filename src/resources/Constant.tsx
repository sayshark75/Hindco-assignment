import { Briefcase, Building, DollarSign, Newspaper } from "lucide-react";

import client1 from "@/assets/images/houseofw.png";
import client2 from "@/assets/images/expenzing.png";
import client3 from "@/assets/images/hopscotch.png";
import client4 from "@/assets/images/jobvista.png";
import client5 from "@/assets/images/edupristine.png";
import client6 from "@/assets/images/haikologistics.png";
import client7 from "@/assets/images/resourcemap.png";
import client8 from "@/assets/images/josephandmarry.png";
import client9 from "@/assets/images/designerpeople.png";
import client10 from "@/assets/images/semswelfare.png";
import client11 from "@/assets/images/riskcare.png";
import client12 from "@/assets/images/matrix.png";
import client13 from "@/assets/images/innobitsys.png";
import client14 from "@/assets/images/go4explore.png";
import client15 from "@/assets/images/zenithholiday.png";
import client16 from "@/assets/images/vfscapital.png";
import client17 from "@/assets/images/nineyardstech.png";
import client18 from "@/assets/images/nivesh.png";
import client19 from "@/assets/images/shorthillsai.png";
import client20 from "@/assets/images/jrtech.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export const navLinks = [
  { label: "Jobs", href: "/jobs", icon: <Briefcase className="w-4 h-4 mr-2" /> },
  { label: "Active Employers", href: "/employers", icon: <Building className="w-4 h-4 mr-2" /> },
  { label: "Job Blogs", href: "/blogs", icon: <Newspaper className="w-4 h-4 mr-2" /> },
  { label: "Pricing", href: "/pricing", icon: <DollarSign className="w-4 h-4 mr-2" /> },
];

export const categories = ["Fresher", "Work From Home", "HR", "IT", "BPO Jobs", "Finance", "Developer", "Marketing", "Accounts", "Engineering"];
export const jobsData = [
  {
    id: 1,
    title: "Senior Fashion Designer",
    company: "Akriti By Ritika",
    type: "Full Time - Permanent",
    experience: "3 - 5 Years",
    location: "Patiala, India",
    badge: "In Office job",
  },
  {
    id: 2,
    title: "Manager - Data Science | Gurgaon",
    company: "HINDCO Consulting Services",
    verified: true,
    type: "Full Time",
    experience: "5 - 10 Years",
    location: "Gurgaon, India",
    badge: "In Office job",
  },
  {
    id: 3,
    title: "Corrugator Machine Operator",
    company: "ALMAALY RECRUITMENT",
    type: "Full Time - Permanent",
    experience: "0 - 5 Years",
    location: "Saudi Arabia",
    badge: "In Office job",
  },
  {
    id: 4,
    title: "Associate Practice Development Manager",
    company: "HINDCO Consulting Services",
    verified: true,
    type: "Full Time - Permanent",
    experience: "2 - 6 Years",
    location: "Delhi NCR, India",
    badge: "In Office job",
  },
  {
    id: 5,
    title: "Associate Practice Development Manager",
    company: "HINDCO Consulting Services",
    verified: true,
    type: "Full Time - Permanent",
    experience: "2 - 6 Years",
    location: "Delhi NCR, India",
    badge: "In Office job",
  },
  {
    id: 6,
    title: "Associate Practice Development Manager",
    company: "HINDCO Consulting Services",
    verified: true,
    type: "Full Time - Permanent",
    experience: "2 - 6 Years",
    location: "Delhi NCR, India",
    badge: "In Office job",
  },
  {
    id: 7,
    title: "Associate Practice Development Manager",
    company: "HINDCO Consulting Services",
    verified: true,
    type: "Full Time - Permanent",
    experience: "2 - 6 Years",
    location: "Delhi NCR, India",
    badge: "In Office job",
  },
];

export const hiringPartnersData = [
  {
    name: "HOUSE OF W",
    logo: client1,
    link: "#",
  },
  {
    name: "Expenzing",
    logo: client2,
    link: "#",
  },
  {
    name: "Hopscotch",
    logo: client3,
    link: "#",
  },
  {
    name: "JOB VISTA Consultant Private limited",
    logo: client4,
    link: "#",
  },
  {
    name: "EduPristine",
    logo: client5,
    link: "#",
  },
  {
    name: "Haiko Logistics India Pvt. Ltd.",
    logo: client6,
    link: "#",
  },
  {
    name: "Resource Mapping Consultancy",
    logo: client7,
    link: "#",
  },
  {
    name: "Joseph and Mary Public School",
    logo: client8,
    link: "#",
  },
  {
    name: "DesignerPeople",
    logo: client9,
    link: "#",
  },
  {
    name: "SEMS Welfare Foundation",
    logo: client10,
    link: "#",
  },
  {
    name: "Risk Care Insurance Broking Services",
    logo: client11,
    link: "#",
  },
  {
    name: "Matrix Cellular (International) Services Ltd.",
    logo: client12,
    link: "#",
  },
  {
    name: "InnoBit Systems",
    logo: client13,
    link: "#",
  },
  {
    name: "Go4Explore",
    logo: client14,
    link: "#",
  },
  {
    name: "Zenith Leisure Holidays Ltd.",
    logo: client15,
    link: "#",
  },
  {
    name: "VFS Capital",
    logo: client16,
    link: "#",
  },
  {
    name: "9Yards Technology",
    logo: client17,
    link: "#",
  },
  {
    name: "Nivesh",
    logo: client18,
    link: "#",
  },
  {
    name: "Shorthills AI",
    logo: client19,
    link: "#",
  },
  {
    name: "JR TECHNOLOGIES",
    logo: client20,
    link: "#",
  },
];

export const jobsInIndia = [
  { title: "Mumbai", link: "#" },
  { title: "Delhi", link: "#" },
  { title: "Ajmer", link: "#" },
  { title: "Pune", link: "#" },
  { title: "Hyderabad", link: "#" },
  { title: "Agra", link: "#" },
  { title: "Chennai", link: "#" },
  { title: "Kolkata", link: "#" },
  { title: "Indore", link: "#" },
  { title: "Gurugram", link: "#" },
  { title: "Jaipur", link: "#" },
  { title: "Ahmedabad", link: "#" },
];
export const internationalJobs = [
  { title: "Africa", link: "#" },
  { title: "USA", link: "#" },
  { title: "UK", link: "#" },
  { title: "Australia", link: "#" },
  { title: "Canada", link: "#" },
  { title: "Singapore", link: "#" },
  { title: "Dubai", link: "#" },
  { title: "Saudi Arabia", link: "#" },
  { title: "New Zealand", link: "#" },
];

export const footerSocialLinks = [
  {
    title: "WhatsApp",
    link: "#",
    icon: FaWhatsapp,
  },
  {
    title: "Facebook",
    link: "#",
    icon: FaFacebook,
  },
  {
    title: "Twitter",
    link: "#",
    icon: FaTwitter,
  },
  {
    title: "Instagram",
    link: "#",
    icon: FaInstagram,
  },
  {
    title: "LinkedIn",
    link: "#",
    icon: FaLinkedin,
  },
  {
    title: "Youtube",
    link: "#",
    icon: FaYoutube,
  },
  {
    title: "Telegram",
    link: "#",
    icon: FaTelegram,
  },
];

export const footerLinks = [
  { title: "Terms and conditions", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Refund / Cancellation Policy", link: "#" },
  { title: "About Us", link: "#" },
  { title: "Contact Us", link: "#" },
  { title: "FAQ", link: "#" },
  { title: "Blogs", link: "#" },
];
