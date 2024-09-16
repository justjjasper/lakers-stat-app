"use client";

import Link from "next/link";
import PrimaryNavList from "./NavComponents/PrimaryNavList";
import SecondaryNavList from "./NavComponents/SecondaryNavList";
import SocialList from "./NavComponents/SocialList";
import { lakersLogo, searchSVG, hamburgerSVG } from "@/public/images/svgIcons";

export default function Nav() {
  return (
    <section className="flex lg:h-[85px] h-[55px] items-center md:px-7 px-3 bg-[#232323] text-white mb-5">
      <nav className="flex items-center justify-between w-full h-full">
        <Link
          href="/"
          >
          <div className="lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]">
            { lakersLogo }
          </div>
        </Link>
        <PrimaryNavList />
        <SecondaryNavList />
        <SocialList />
        <div className="flex gap-4">
          <button>
            {searchSVG}
          </button>
          <button className="lg:hidden block">
            { hamburgerSVG }
          </button>
        </div>
      </nav>
    </section>
  )
}