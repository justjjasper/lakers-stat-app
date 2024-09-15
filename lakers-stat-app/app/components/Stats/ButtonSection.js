import Link from "next/link";

export default function ButtonSection({ currentStat, showAllPlayers, }) {
  const links = [
    { href: `/stats/points?showAllPlayers=${showAllPlayers}`, label: 'Points', category: 'points' },
    { href: `/stats/rebounds?showAllPlayers=${showAllPlayers}`, label: 'Rebounds', category: 'rebounds' },
    { href: `/stats/threePointers?showAllPlayers=${showAllPlayers}`, label: '3 Pointers', category: 'threePointers'},
  ];

  return (
    <div className="flex justify-between mt-7">
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
                px-5 py-3 hover:underline rounded-sm
              `}
            >
               {link.label}
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-black text-white px-5 py-3 hover:underline rounded-sm">
        <Link href={`/stats/${currentStat}?showAllPlayers=${!showAllPlayers}`}>
            {showAllPlayers ? "- Hide All Players" : "+ Show All Players"}
        </Link>
      </div>
    </div>
  )
};