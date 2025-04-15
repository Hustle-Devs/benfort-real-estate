import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="bg-background py-12 md:py-24 lg:py-32 xl:py-48 w-full">
        <div className="mx-auto px-4 md:px-6 container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="heading-style">Welcome to HustleArticles</h1>
              <p className="mx-auto max-w-[700px] text-[#000000] dark:text-white md:text-xl">
                Discover insightful articles, expert opinions, and the latest
                trends in technology and design.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/blog">
                <Button>
                  Read Our Blog
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-muted/50 py-12 md:py-24 lg:py-32 w-full">
        <div className="mx-auto px-4 md:px-6 container">
          <h2 className="featured-title">Featured Posts</h2>
          <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative bg-background shadow-md hover:shadow-lg p-6 border rounded-lg transition-shadow"
              >
                <h3 className="mb-2 font-bold text-xl">
                  Featured Post Title {i}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  A brief description of the featured post that gives readers an
                  idea of what to expect...
                </p>
                <Link
                  href={`/blog/post-${i}`}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
