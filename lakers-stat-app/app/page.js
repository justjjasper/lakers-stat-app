import Image from "next/image";
import Link from "next/link";
import { rightArrow } from "@/public/images/svgIcons";

export default function Home() {
  return (
    <main>
      <section className="relative flex justify-center">
        <Image
          src="/images/image-9.jpeg"
          alt="Lakers Floor Court"
          height={580}
          width={400}
          className="h-[580px] w-full"
          objectFit="cover"
          />

        <div className="absolute text-white mt-32 text-center">
          <h1 className="text-[72px] font-bold leading-tight">
            Rise Above the Rest
          </h1>

          <p className="text-[24px] my-10">Stay ahead by tracking player stats and witnessing how the top performers excel.</p>

          <Link
            href={`/stats/points?showAllPlayers=${false}`}
            className="inline-flex bg-black text-white rounded-full py-4 px-8 cursor-pointer hover:underline"
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
