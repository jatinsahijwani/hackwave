// pages/component.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel";
import { Caudex } from "next/font/google";
import { Eczar } from "next/font/google";
import { ReactNode } from "react";

const caudex = Caudex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caudex",
});
const eczar = Eczar({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eczar",
});

interface Props {}

const Component: React.FC<Props> = () => {
  return (
    <html lang="en">
      <body className={`${caudex.variable} ${eczar.variable}`}>
        <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm dark:bg-gray-950/90">
            <div className="container mx-auto flex items-center justify-between">
              <Link href="#" className="flex items-center gap-2 font-semibold">
                {/* Your HeartIcon SVG */}
                <span className="text-xl">Eldercare</span>
              </Link>
              <nav className="hidden space-x-4 md:flex">
                {/* Links */}
              </nav>
              <div className="flex items-center gap-2">
                <Button className="md:hidden" size="icon" variant="outline">
                  {/* Your MenuIcon SVG */}
                  <span className="sr-only">Toggle navigation</span>
                </Button>
                <Link href="#" className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 md:inline-flex">
                  Join Now
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Section 1 */}
            <section className="bg-gray-100 py-12 dark:bg-gray-950">
              <div className="container mx-auto px-4">
                {/* Content */}
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-gray-100 py-12 dark:bg-gray-950">
              <div className="container mx-auto px-4">
                {/* Content */}
              </div>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
};

// Export
export default Component;

// CSS

body {
  font-family: var(--font-eczar), serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-caudex), serif;
}
