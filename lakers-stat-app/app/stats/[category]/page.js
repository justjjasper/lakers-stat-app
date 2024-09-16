import Link from "next/link";
import Image from "next/image";
import { pointsAPI, reboundsAPI, threePointersAPI } from "@/app/config";
import Table from "@/app/components/Stats/Table";
import ButtonSection from "@/app/components/Stats/ButtonSection";
import FantasyDraftPromo from "@/app/components/FantasyDraftPromo/FantasyDraftPromo";

export default async function Stats({ params, searchParams }) {
  // Retrieve API data
  const pointsResponse = await fetch(pointsAPI);
  const pointsData = await pointsResponse.json();

  const reboundsResponse = await fetch(reboundsAPI);
  const reboundsData = await reboundsResponse.json();

  const threePointersResponse = await fetch(threePointersAPI);
  const threePointersData = await threePointersResponse.json();

  // Utilize params as a way to keep track of the current stat State to display
  let currentStat = params.category;
  let tableData = currentStat === "points" ? pointsData :
                  currentStat === "rebounds" ? reboundsData :
                  threePointersData;

  // Utilize searchParams as a way to keep state to show all players
  let showAllPlayers = searchParams.showAllPlayers === "true";

  try{
    return (
      <main className="xl:mx-60 lg:mx-36 sm:mx-12 mx-5 p-10 bg-white border-2 shadow-sm rounded-md">
        <h2 className="sm:text-[28px] text-[24px] font-bold">Los Angeles Lakers Stats 2020-21</h2>

        <ButtonSection currentStat={currentStat} showAllPlayers={showAllPlayers}/>
        <Table currentStat={currentStat} showAllPlayers={showAllPlayers} tableData={tableData}/>
        <FantasyDraftPromo showAllPlayers={showAllPlayers} />
      </main>
    )
  } catch(error) {
    return (
      <div>
        Error Loading Page
      </div>
    )
  }
};