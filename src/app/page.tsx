import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container mx-auto px-4 md:px-6">
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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="featured-title">Featured Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative rounded-lg border bg-background p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">
                  Featured Post Title {i}
                </h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the featured post that gives readers an
                  idea of what to expect...
                </p>
                <Link
                  href={`/blog/post-${i}`}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
