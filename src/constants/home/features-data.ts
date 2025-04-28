import feature1 from "@/../public/featured/feature1.svg";
import feature2 from "@/../public/featured/feature2.png";
import feature3 from "@/../public/featured/feature3.png";
import feature4 from "@/../public/featured/feature4.png";
import { FeaturedItem } from "@/types/Home";

export const featuredData: FeaturedItem[] = [
  {
    id: 1,
    image: feature1,
    villa: "Suburb Home",
    locate: "Jersey City",
    vCount: "4",
  },
  {
    id: 2,
    image: feature2,
    villa: "Smart Home Duplex",
    locate: "Catskills",
    vCount: "4",
  },
  {
    id: 3,
    image: feature3,
    villa: "Luxury House",
    locate: "Catskills",
    vCount: "4",
  },
  {
    id: 4,
    image: feature4,
    villa: "Gorgeous Villa for Rent",
    locate: "Jersey City",
    vCount: "6",
  },
];
