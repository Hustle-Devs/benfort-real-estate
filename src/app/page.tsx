import Explore from "@/components/home/explore-section/Explore";
import Featured from "@/components/home/featured/Featured";
import GetInTouch from "@/components/home/get-in-touch/GetInTouch";
import GetMore from "@/components/home/get-more/GetMore";
import Hero from "@/components/home/hero/Hero";
import Listing from "@/components/home/listing/Listing";
import OurAgentsSection from "@/components/home/our-agents.tsx/OurAgentsSection";
import SubscribeSection from "@/components/home/our-agents.tsx/SubscribeSection";
import Perks from "@/components/home/perks/Perks";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <Explore />
      <Listing />
      <Featured />
      <GetMore />
      <OurAgentsSection />
      <SubscribeSection />
      <GetInTouch />
    </>
  );
}
