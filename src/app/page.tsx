import Explore from "@/components/home/explore-section/Explore";
import Hero from "@/components/home/hero/Hero";
import Listing from "@/components/home/listing/Listing";
import Perks from "@/components/home/perks/Perks";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <Explore />
      <Listing />
    </>
  );
}
