import Explore from "@/components/home/explore-section/Explore";
import Hero from "@/components/home/hero/Hero";
import { Listing } from "@/components/home/listing/Listing";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <Listing />
    </>
  );
}
