"use client";

import FadeIn from "@/components/animations/FadeIn";
export default function SubscribeSection() {
  return (
    <section className="mb-14 px-4">
      <div className="flex md:flex-row flex-col justify-between items-center gap-10 lg:gap-32 bg-card mx-auto p-10 lg:p-22 rounded-2xl max-w-[1100px]">
        <div className="max-w-xl md:text-left text-center">
          <FadeIn delay={0.2}>
            {" "}
            <h6 className="mb-4 md:max-w-[350px] lg:max-w-[411px] h6">
              There is always something new! Don&apos;t miss out.
            </h6>{" "}
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="md:max-w-[350px] lg:max-w-[411px] p5">
              Get property updates and the latest on pricing for your next{" "}
              property decision.
            </p>
          </FadeIn>
        </div>
        <form className="flex sm:flex-row items-center md:max-w-[350px] lg:max-w-[428px]">
          <FadeIn delay={0.2}>
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-[293px]"
              required
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <button
              type="submit"
              className="bg-foreground hover:bg-primary mx-w-[127px] px-6 py-3 sm:w-auto font-semibold text-background dark:hover:text-foreground transition"
            >
              Submit
            </button>
          </FadeIn>
        </form>
      </div>
    </section>
  );
}
