"use client";

export default function SubscribeSection() {
  return (
    <section className="mb-14 px-4">
      <div className="flex md:flex-row flex-col justify-between items-center gap-[72px] bg-card mx-auto p-10 md:p-22 rounded-2xl max-w-[1100px]">
        {/* Left content */}
        <div className="max-w-xl md:text-left text-center">
          <h6 className="mb-4 h6">
            There is always something new! <br />
            Don't miss out.
          </h6>
          <p className="p5">
            Get property updates and the latest on pricing for your next <br />
            property decision.
          </p>
        </div>

        {/* Right content */}
        <form className="flex sm:flex-row items-center w-full max-w-[428px]">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary w-full"
            required
          />
          <button
            type="submit"
            className="bg-foreground hover:bg-primary px-6 py-3 sm:w-auto font-semibold text-background dark:hover:text-foreground transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
