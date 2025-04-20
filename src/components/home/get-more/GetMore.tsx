"use client";

import Image from "next/image";

export default function GetMore() {
  return (
    <main className="bg-[url('/8.png')] bg-cover bg-no-repeat bg-center px-4 py-[120px]">
      <div className="flex lg:flex-row flex-col justify-center items-start gap-[100px]">
        {/* Left Section */}
        <div className="flex flex-col items-start text-left">
          <h2 className="mb-4 text-background">Get more out of Homfort</h2>
          <p className="mb-6 max-w-md text-background para">
            Explore easier ways to search for properties.
          </p>
          <div className="flex flex-row justify-center lg:justify-start gap-4">
            <button className="border hover:border-primary border-background rounded text-background hover:text-primary btn2">
              Log In
            </button>
            <button className="bg-background hover:bg-primary rounded text-foreground hover:text-background dark:hover:text-foreground btn2">
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <Image src="/9.png" alt="Property UI" width={680} height={566} />
        </div>
      </div>
    </main>
  );
}
