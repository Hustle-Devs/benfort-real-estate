import Image from "next/image";

const AgentCard = ({ image, name, role, listing }) => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <Image src={image} alt={name} width={373} height={394} />

      <div className="flex flex-row justify-between px-4 py-8">
        <div className="flex flex-col items-start">
          <h5 className="h5">{name}</h5> <p className="p5">{role}</p>
        </div>
        <div>
          {" "}
          <p className="p5">{listing} listing</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
