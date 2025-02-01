"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  // {
  //   name: "services",
  //   path: "/services",
  // },
  {
    name: "resume",
    path: "/resume",
  },
  // {
  //   name: "work",
  //   path: "/work",
  // },
  {
    name: "contact",
    path: "/contact",
  },
];

export const MobileNav = () => {
  const currentPathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent " />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl ">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Souvik
                <span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                key={index}
                href={link.path}
                className={`
        ${
          link.path === currentPathName &&
          "text-accent border-b-2 border-accent"
        } text-xl capitalize hover:text-accent transition-all
        `}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
