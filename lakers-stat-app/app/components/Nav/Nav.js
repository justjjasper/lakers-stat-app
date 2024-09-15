import Link from "next/link";

export default function Nav() {
  return (
    <section className="flex items-center justify-between px-7 bg-[#232323] h-[85px] text-white mb-5">
      <Link
        href="/"
      >
        Laker Logo
      </Link>
      <div>Main Nav Section</div>
      <div>Secondary Nav Section</div>
      <div>Socials</div>
    </section>
  )
}