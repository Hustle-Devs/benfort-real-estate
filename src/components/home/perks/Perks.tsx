import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const perks = [
  {
    title: "BUY PROPERTIES",
    description:
      "Explore Homfort’s 2 million+ homes tailored and uncover your ideal living space.",
    image: "/round1.png",
  },
  {
    title: "RENT PROPERTIES",
    description:
      "Discover a rental you’ll love on Homfort, thanks to 35+ filters and tailored keywords.",
    image: "/round2.png",
  },
  {
    title: "LEASE PROPERTIES",
    description:
      "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
    image: "/round3.png",
  },
];

const Perks = () => {
  return (
    <section className="bg-card px-4 py-8 md:py-12 lg:py-[120px] text-center">
      <FadeIn delay={0.1}>
        <h2 className="mb-2">
          Perks with <span className="text-primary">Benfort</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="mb-[102px]">
          Your trusted real estate partner in every transaction.
        </p>
      </FadeIn>

      <div className="gap-12 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-[1200px]">
        {perks.map((perk, index) => {
          const baseDelay = 0.5 + index * 0.2;
          return (
            <FadeIn key={index} delay={baseDelay}>
              <div className="flex flex-col items-center space-y-4 text-center">
                <FadeIn delay={baseDelay + 0.1}>
                  <Image
                    src={perk.image}
                    alt={perk.title}
                    width={138}
                    height={138}
                    className="rounded-full"
                  />
                </FadeIn>

                <FadeIn delay={baseDelay + 0.2}>
                  <h3 className="h3">{perk.title}</h3>
                </FadeIn>

                <FadeIn delay={baseDelay + 0.3}>
                  <p className="perks-p2">{perk.description}</p>
                </FadeIn>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};

export default Perks;
