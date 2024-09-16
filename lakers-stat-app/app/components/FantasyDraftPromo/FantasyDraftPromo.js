import Link from "next/link";
import Image from "next/image";

export default function FantasyDraftPromo({ showAllPlayers }) {
  return (
    <div className={`${showAllPlayers ? "hidden" : "flex"} mt-14 items-center md:flex-row flex-col`}>
      {/* Fantasy League Logo*/}
      <div className="w-[300px]">
        <Image
          src="/images/fantasyleague-logo.jpg"
          alt="Fantasy League Logo"
          height={400}
          width={300}
        />
      </div>

      {/* Fantasy Draft Promo Text*/}
      <div className="flex flex-col justify-between gap-5 ">
        <h3 className="font-bold text-[18px]">Analyze Stats to Make Your Fantasy Draft Picks</h3>
        <p className="text-[14px] w-[50ch]">Get ahead in your fantasy draft with expert stats. Use detailed insights to make the best picks for your team.</p>
        <div className="bg-black py-3 px-4 text-white rounded-full font-bold w-[250px] self-center hover:underline">
          <Link href="#" className="flex justify-center">
            COMMUNITY GUIDE FORM
          </Link>
        </div>
      </div>
    </div>
  )
};