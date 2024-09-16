import Link from "next/link";

export default function SecondaryNavList() {
  const links = ["Laker Girls", "Community", "Store", "Connect", "Careers"];

  return (
    <ul className="flex items-center gap-5 h-full px-3 border-l-[1px] border-r-[1px] border-gray-900">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className="font-thin"
            >
            <Link href="#">
              {link}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}