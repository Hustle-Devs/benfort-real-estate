import Explore from "@/components/home/explore-section/Explore";
import GetMore from "@/components/home/get-more/GetMore";
import Hero from "@/components/home/hero/Hero";
import Perks from "@/components/home/perks/Perks";

export default function Home() {
  return (
    <>
      <Hero />
      <Perks />
      <Explore />
      <GetMore />
    </>
  );
}
