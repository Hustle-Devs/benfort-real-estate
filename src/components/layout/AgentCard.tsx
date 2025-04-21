import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const AgentCard = ({ image, name, role, listing }) => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <FadeIn delay={0.8}>
        <Image src={image} alt={name} width={373} height={394} />
      </FadeIn>
      <div className="flex flex-row justify-between px-4 py-8">
        <div className="flex flex-col items-start">
          <FadeIn delay={0.2}>
            <h5 className="h5">{name}</h5>{" "}
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="p5">{role}</p>
          </FadeIn>
        </div>
        <div>
          {" "}
          <FadeIn delay={0.5}>
            <p className="p5">{listing} listing</p>{" "}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
