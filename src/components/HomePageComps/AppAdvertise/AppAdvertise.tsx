// components/MobileAppSection.tsx
import Image from "next/image";
import Link from "next/link";
import mobileBannerImg from "@/assets/images/plays-storeimg.jpg";
import appStoreImg from "@/assets/icons/app-store.png";
import gplaystorebtn from "@/assets/icons/gplay-store.png";

export default function AppAdvertise() {
  return (
    <section className="main-container py-12 relative">
      <div className="flex flex-col px-3 md:px-12 md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full relative z-50 flex flex-col gap-4 max-w-md">
          <h1 className="text-2xl font-semibold uppercase">Apply to jobs on-the-go</h1>

          <Link href="#" className="text-lg">
            Jobringer Mobile App
          </Link>

          <div className="flex gap-4">
            <Link href="#">
              <Image src={gplaystorebtn.src} alt="Get it on Google Play" width={150} height={50} />
            </Link>
            <Link href="#">
              <Image src={appStoreImg.src} alt="Download on the App Store" width={150} height={50} />
            </Link>
          </div>

          <p className="text-xl font-semibold">
            Mobile App{" "}
            <Link href="#" className="text-blue-700 font-bold underline">
              Download
            </Link>
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex justify-center">
          <Image src={mobileBannerImg.src} fill alt="Mobile App Promo" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
