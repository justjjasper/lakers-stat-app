import Link from "next/link";

export default function ButtonSection({ currentStat, showAllPlayers, }) {
  const links = [
    { href: `/stats/points?showAllPlayers=${showAllPlayers}`, label: 'Points', category: 'points' },
    { href: `/stats/rebounds?showAllPlayers=${showAllPlayers}`, label: 'Rebounds', category: 'rebounds' },
    { href: `/stats/threePointers?showAllPlayers=${showAllPlayers}`, label: '3 Pointers', category: 'threePointers'},
  ];

  return (
    <div className="flex justify-between mt-7">
      <div>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={link.category === currentStat ? 'pointer-events-none text-gray-400' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div>
        <Link href={`/stats/${currentStat}?showAllPlayers=${!showAllPlayers}`}>
          {showAllPlayers ? "Hide All Players" : "Show All Players"}
        </Link>
      </div>
    </div>
  )
};