import AdvertiseBar from "@/components/HomePageComps/AdvertiseBar/AdvertiseBar";
import AppAdvertise from "@/components/HomePageComps/AppAdvertise/AppAdvertise";
import Headline from "@/components/HomePageComps/Headline";
import HiringPartnersSlider from "@/components/HomePageComps/HiringPartners/HiringPartnersSlider";
import MapSection from "@/components/HomePageComps/MapSection/MapSection";
import SearchFilters from "@/components/HomePageComps/SearchFilters/SearchFilters";
import StatsSection from "@/components/HomePageComps/StatsSection/StatsSection";
import JobsSlider from "@/components/HomePageComps/JobsSlider/JobsSlider";

export default function Home() {
  return (
    <main className="w-full">
      <AdvertiseBar />
      <Headline />
      <SearchFilters />
      <JobsSlider />
      <HiringPartnersSlider />
      <MapSection />
      <AppAdvertise />
      <StatsSection />
    </main>
  );
}
