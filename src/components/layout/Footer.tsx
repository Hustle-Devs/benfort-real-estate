import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-foreground pt-20 pb-8 text-background">
      <section className="container">
        <div className="flex lg:flex-row flex-col justify-between items-start gap-12 mx-auto text-start">
          {/* ************ */}
          <div className="flex sm:flex-row flex-col flex-wrap gap-12 lg:gap-16">
            {/* Social + Address */}
            <div className="space-y-4 min-w-[200px]">
              <div className="flex space-x-4">
                <Image
                  src="/1.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80 rounded cursor-pointer"
                />
                <Image
                  src="/2.png"
                  alt="Email"
                  width={24}
                  height={24}
                  className="hover:opacity-80 rounded cursor-pointer"
                />
                <Image
                  src="/3.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80 rounded cursor-pointer"
                />
                <Image
                  src="/4.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="hover:opacity-80 rounded cursor-pointer"
                />
              </div>
              <div>
                <h4 className="pt-8 pb-4 h4">Benfort</h4>
                <p className="text-background p5">
                  264 Brixton New Avenue.
                  <br />
                  Kansas, KS 83902
                </p>
              </div>
            </div>

            {/* Categories */}
            <div className="min-w-[150px]">
              <h3 className="mb-3 text-background uppercase h3">Categories</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline p5">
                    Latest Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline p5">
                    Featured Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline p5">
                    Agents
                  </Link>
                </li>
              </ul>
            </div>

            {/* More */}
            <div className="min-w-[150px]">
              <h3 className="mb-3 text-background uppercase h3">More</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline p5">
                    Search Properties
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline p5">
                    All Listings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account */}
            <div className="min-w-[150px]">
              <h3 className="mb-3 text-background uppercase h3">Account</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="hover:underline p5">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline p5">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Book A Call */}
          <div className="mt-6 lg:mt-0">
            <button className="border border-background hover:text-sidebar transition btn">
              Book A Call
            </button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex md:flex-row flex-col justify-between items-center bg-[url('/footerBg.png')] bg-contain bg-no-repeat bg-center mt-12 pt-[400px] pb-20 text-background p4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
          </div>
          <p className="mt-4 md:mt-0 md:text-left text-center">
            Copyright © 2025 Benfort. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
