"use client";

import AgentCard from "@/components/layout/AgentCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerWrapper from "@/components/animations/StaggerWrapper";

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
    <section className="mx-auto px-4 py-8 md:py-12 lg:py-[120px] container">
      <div className="text-center">
        <FadeIn delay={0.2}>
          <h2>
            <span className="text-foreground">Our </span>
            <span className="text-primary">Agents</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-2 pb-12 lg:pb-[104px] text-foreground">
            Explore the world-class agents.
          </p>
        </FadeIn>
      </div>

      <StaggerWrapper
        stagger={0.5}
        duration={0.6}
        className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1200px]"
      >
        {agents.map((agent, index) => (
          <AgentCard
            image={agent.image}
            name={agent.name}
            role={agent.role}
            listing={agent.listing}
            key={index}
          />
        ))}

        <div className="flex flex-col justify-between bg-card mx-auto p-6 rounded-2xl max-w-[373px]">
          <div className="bg-[#FFEEE5] dark:bg-black p-4 border border-primary border-dashed">
            <FadeIn delay={0.2}>
              <h6 className="h6"> homfort</h6>{" "}
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="mt-[250px] lg:mt-[180px] xl:mt-[250px] mb-6 text-foreground p5">
                Our agent are available to help with your property search and
                give your enquiries on the best offers.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <button className="bg-primary hover:bg-foreground px-5 py-2 rounded text-background hover:text-background dark:hover:text-background dark:text-foreground">
                Sign up
              </button>
            </FadeIn>
          </div>
        </div>
      </StaggerWrapper>
    </section>
  );
}
