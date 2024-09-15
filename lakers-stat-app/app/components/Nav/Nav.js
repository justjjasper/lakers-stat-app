import Link from "next/link";
import Image from "next/image";
import { lakersLogo } from "@/public/images/svgIcons";

export default function Nav() {
  return (
    <section className="flex items-center justify-between px-7 bg-[#232323] h-[85px] text-white mb-5">
      <Link
        href="/"
      >
        <div className="h-[75px] w-[75px]">
         { lakersLogo }
        </div>
      </Link>
      <div>Main Nav Section</div>
      <div>Secondary Nav Section</div>
      <div>Socials</div>
    </section>
  )
}