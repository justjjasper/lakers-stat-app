import Link from "next/link";

export default function PrimaryNavList() {
  const links = ["NEWS AND MEDIA", "TEAM", "SCHEDULE", "TICKETS"];

  return (
    <ul className="flex gap-5">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className="font-bold hover:underline"
            style={{ textDecorationColor: '#F3BB4B' }}
            >
            <Link href="#">
              {link}
            </Link>
          </li>
        )
      })}
    </ul>
  )
};