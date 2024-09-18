import Link from "next/link";
import SocialList from "@/app/components/Nav/NavComponents/SocialList"

export default function Footer() {
  return (
    <section className="flex mt-auto bg-[#232323] lg:h-[100px] h-[55px]">
      <div className="flex items-center xl:justify-between justify-center px-7 h-full text-white">
        <Link
          href="/"
        >
          <span className="xsm:text-base text-[14px]">
            © 2024 Los Angeles Lakers
          </span>
        </Link>

        <nav>
          <SocialList/>
        </nav>
      </div>
    </section>
  )
}