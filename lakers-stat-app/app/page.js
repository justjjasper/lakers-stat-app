import Image from "next/image";
import Link from "next/link";
import { rightArrow } from "@/public/images/svgIcons";

export default function Home() {
  return (
    <main>
      <section className="flex relative">
        <Image
          src="/images/image-9.jpeg"
          alt="Lakers Floor Court"
          height={580}
          width={400}
          className="h-[580px] w-full"
          objectFit="cover"
          />

          <Link
            href={`/stats/points?showAllPlayers=${false}`}
            className="absolute flex bg-black text-white bottom-[5%] rounded-md right-10 py-4 px-3 cursor-pointer hover:underline"
          >
            VIEW PLAYER STATS
            { rightArrow }
          </Link>
      </section>
    </main>
  );
}
