import { StaticImageData } from "next/image";

interface Icon {
  src: StaticImageData;
  alt: string;
}

export default interface HappyClientsPopupProps {
  icons: Icon[];
  clientCount?: string;
}

export interface FeaturedItem {
  id: number;
  image: StaticImageData;
  villa: string;
  locate: string;
  vCount: string;
}

export interface PropertyItem {
  id: number;
  image: StaticImageData;
  title: string;
  details: string;
  roomType: string[];
  locate: string;
  roomCount: string;
  bedCount: string;
  bathCount: string;
  squareFit: string;
  price: string;
}

export interface AgentItem {
  name: string;
  role: string;
  listing: number;
  image: string | StaticImageData;
}

export interface PerkItem {
  title: string;
  description: string;
  image: string | StaticImageData;
}
