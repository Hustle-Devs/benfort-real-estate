"use client";

import AgentCard from "@/components/layout/AgentCard";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function OurAgentsSection() {
  const agents = [
    {
      name: "Ford Clinton",
      role: "Listing Agent",
      listing: 3,
      image: "/10.png",
    },
    {
      name: "Hassan Patrick",
      role: "Sales Person",
      listing: 2,
      image: "/11.png",
    },
    {
      name: "Mike Rutter",
      role: "Commercial Broker",
      listing: 2,
      image: "/12.png",
    },
    {
      name: "Sarah Morgan",
      role: "Property Consultant",
      listing: 4,
      image: "/13.png",
    },
    {
      name: "James Allen",
      role: "Real Estate Advisor",
      listing: 2,
      image: "/13.png",
    },
  ];

  return (
    <section className="mx-auto py-[120px] container">
      <div className="text-center">
        <h2>
          <span className="text-foreground">Our </span>
          <span className="text-primary">Agents</span>
        </h2>
        <p className="mt-2 pb-[104px] text-foreground">
          Explore the world-class agents.
        </p>
      </div>

      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px]">
        {agents.map((agent, index) => (
          <AgentCard key={index} {...agent} />
        ))}

        {/* CTA Box Instead of 6th Agent */}
        <div className="flex flex-col justify-between bg-card mx-auto p-6 rounded-2xl w-[373px]">
          <div className="bg-[#FFEEE5] dark:bg-black p-4 border border-primary border-dashed">
            <h6 className="h6"> homfort</h6>

            <p className="mt-[250px] mb-6 text-foreground p5">
              Our agent are available to help with your property search and give
              your enquiries on the best offers.
            </p>

            <button className="bg-primary hover:bg-foreground px-5 py-2 rounded text-background hover:text-background dark:hover:text-background dark:text-foreground">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
