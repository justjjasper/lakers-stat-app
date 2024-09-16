import Link from "next/link";
import Image from "next/image";
import PrimaryNavList from "./NavComponents/PrimaryNavList";
import SecondaryNavList from "./NavComponents/SecondaryNavList";
import SocialList from "./NavComponents/SocialList";
import { lakersLogo, searchSVG } from "@/public/images/svgIcons";

export default function Nav() {
  return (
    <section className="flex items-center px-7 bg-[#232323] h-[85px] text-white mb-5">
      <nav className="flex items-center justify-between w-full h-full">
        <Link
          href="/"
          >
          <div className="h-[75px] w-[75px]">
          { lakersLogo }
          </div>
        </Link>
        <PrimaryNavList />
        <SecondaryNavList />
        <SocialList />
        <Link
          href="#"
        >
          {searchSVG}
        </Link>
      </nav>
    </section>
  )
}