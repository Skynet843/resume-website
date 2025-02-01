import Link from "next/link";
import { Button } from "./ui/button";

// components
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-6 xl:py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Souvik
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
