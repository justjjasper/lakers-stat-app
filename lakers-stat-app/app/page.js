import Image from "next/image";
import Link from "next/link";
import { rightArrow } from "@/public/images/svgIcons";

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-center mb-5">
        {/* Hero Banner Image*/}
        <Image
          src="/images/image-9.jpeg"
          alt="Lakers Floor Court"
          height={580}
          width={400}
          className="h-[580px] w-full"
          />

        {/* Hero Banner Text */}
        <div className="absolute text-white mt-32 text-center px-3">
          <h1 className="md:text-[72px] text-[40px] font-bold leading-tight">
            Rise Above the Rest
          </h1>

          <p className="md:text-[24px] text-[18px] my-10">Stay ahead by tracking player stats and witnessing how the top performers excel.</p>

          <Link
            href={`/stats/points?showAllPlayers=${false}`}
            className="inline-flex items-center bg-black text-white md:text-base text-[12px] rounded-full md:py-4 md:px-8 py-3 px-6 cursor-pointer hover:underline"
            >
            VIEW PLAYER STATS
            <span className="ml-1">
              { rightArrow }
            </span>
          </Link>

        </div>
      </section>
    </main>
  );
}
