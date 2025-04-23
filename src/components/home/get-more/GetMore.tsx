"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

export default function GetMore() {
  return (
    <main className="bg-[url('/8.png')] bg-cover bg-no-repeat bg-center px-4 py-[120px]">
      <div className="flex lg:flex-row flex-col justify-center items-start gap-[100px]">
        <div className="flex flex-col items-start text-left">
          <FadeIn delay={0.2}>
            <h2 className="mb-4 text-background">Get more out of Homfort</h2>{" "}
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="mb-6 max-w-md text-background para">
              Explore easier ways to search for properties.
            </p>
          </FadeIn>

          <div className="flex flex-row justify-center lg:justify-start gap-4">
            <FadeIn delay={0.5}>
              {" "}
              <button className="border hover:border-primary border-background rounded text-background hover:text-primary btn2">
                Log In
              </button>
            </FadeIn>

            <FadeIn delay={0.5}>
              {" "}
              <button className="bg-background hover:bg-primary rounded text-foreground hover:text-background dark:hover:text-foreground btn2">
                Sign Up
              </button>
            </FadeIn>
          </div>
        </div>

        <div>
          <FadeIn delay={0.5}>
            <Image src="/9.png" alt="Property UI" width={680} height={566} />{" "}
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
