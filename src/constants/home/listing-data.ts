import propertyImg1 from "@/../public/card/propertyImg1.png";
import propertyImg2 from "@/../public/card/propertyImg2.png";
import propertyImg3 from "@/../public/card/propertyImg3.png";
import propertyImg4 from "@/../public/card/propertyImg4.png";
import propertyImg5 from "@/../public/card/propertyImg5.png";
import propertyImg6 from "@/../public/card/propertyImg6.png";
import { PropertyItem } from "@/types/Home";

export const listingData: PropertyItem[] = [
  {
    id: 1,
    image: propertyImg1,
    title: "Luxury Loft",
    details: `Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering...`,
    roomType: ["Rent", "Industrial"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "1",
    bathCount: "2",
    squareFit: "600 ft",
    price: "1500",
  },
  {
    id: 2,
    image: propertyImg2,
    title: "Cozy Condo",
    details: `Nestled amidst serene woodlands, this luxury house gracefully 
      sits atop a hill...`,
    roomType: ["Rent", "Houses"],
    locate: "Catskills",
    roomCount: "04",
    bedCount: "4+",
    bathCount: "4+",
    squareFit: "600 ft",
    price: "466,000",
  },
  {
    id: 3,
    image: propertyImg3,
    title: "Suburb Home",
    details: `Located in a charming suburban neighborhood, this beautiful 
      home gracefully...`,
    roomType: ["Sales", "Duplex"],
    locate: "Pleasantville",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: "950,000",
  },
  {
    id: 4,
    image: propertyImg4,
    title: "Smart Home Duplex",
    details: `Situated in a bustling urban neighborhood, this smart home duplex elegantly...`,
    roomType: ["Rent", "Industrial"],
    locate: "Catskills",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: "1500",
  },
  {
    id: 5,
    image: propertyImg5,
    title: "Smart Home Duplex",
    details: `Nestled amidst serene woodlands, this luxury house gracefully sits atop a hill...`,
    roomType: ["Lease", "Offices"],
    locate: "Catskills",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: "980,000",
  },
  {
    id: 6,
    image: propertyImg6,
    title: "Gorgeous Villa for Rent",
    details: `Primarily enveloped in woodland, this property majestically stands on a crest...`,
    roomType: ["Sales", "Apartment"],
    locate: "Jersey City",
    roomCount: "04",
    bedCount: "3",
    bathCount: "3",
    squareFit: "600 ft",
    price: "550,000",
  },
];
