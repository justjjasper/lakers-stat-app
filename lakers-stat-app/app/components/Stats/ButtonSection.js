import Link from "next/link";
import { plusSVG, minusSVG } from "@/public/images/svgIcons";

export default function ButtonSection({ currentStat, showAllPlayers, }) {
  const links = [
    { href: `/stats/points?showAllPlayers=${showAllPlayers}`, label: 'Points', category: 'points' },
    { href: `/stats/rebounds?showAllPlayers=${showAllPlayers}`, label: 'Rebounds', category: 'rebounds' },
    { href: `/stats/threePointers?showAllPlayers=${showAllPlayers}`, label: '3 Point %', category: 'threePointers'},
  ];

  return (
    <div className="flex justify-between mt-7">
      {/* Mapped stat buttons */}
      <div className="flex">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
          >
            <div
              className={`
                ${link.category === currentStat
                ? 'pointer-events-none border-t-[1px] border-l-[1px] border-r-[1px] font-bold shadow-md'
                : 'bg-black text-white'
                }
                md:px-5 md:py-3 px-3 py-2 hover:underline rounded-sm md:text-base text-[12px]
              `}
            >
               {link.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Show All Players toggle button */}
      <div className="bg-black text-white md:px-5 md:py-3 px-3 py-2 hover:underline rounded-sm md:text-base text-[12px]">
        <Link href={`/stats/${currentStat}?showAllPlayers=${!showAllPlayers}`}>
           {showAllPlayers ?
              <div className="flex items-center gap-2 md:min-w-[160px] justify-center">
                <span>{minusSVG}</span>
                <span className="flex justify-center">Hide All Players</span>
              </div>
              :
              <div className="flex items-center gap-2 md:min-w-[160px] justify-center">
                <span>{plusSVG}</span>
                <span className="flex justify-center">Show All Players</span>
              </div>
            }
        </Link>
      </div>
    </div>
  )
};