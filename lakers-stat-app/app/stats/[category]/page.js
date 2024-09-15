import Link from "next/link";
import { pointsAPI, reboundsAPI, threePointersAPI } from "../../config";
import Table from "../../components/Stats/Table";
import ButtonSection from "../../components/Stats/ButtonSection";

export default async function Stats({ params, searchParams }) {
  // Retrieve data via APIs
  const pointsResponse = await fetch(pointsAPI);
  const pointsData = await pointsResponse.json();

  const reboundsResponse = await fetch(reboundsAPI);
  const reboundsData = await reboundsResponse.json();

  const threePointersResponse = await fetch(threePointersAPI);
  const threePointersData = await threePointersResponse.json();

  // Utilize params as a way to keep track of the current stat State
  let currentStat = params.category;
  let tableData = currentStat === "points" ? pointsData :
                  currentStat === "rebounds" ? reboundsData :
                  threePointersData;

  // Utilize searchParams as a way to keep state to show all players (passes it into Table Component)
  let showAllPlayers = searchParams.showAllPlayers === "true";

  try{
      return (
      <main className="h-[575px] mx-60 p-10 bg-white border-2 shadow-sm rounded-md">
        <h2 className="text-[28px] font-bold">Los Angeles Lakers Stats 2020-21</h2>

        <ButtonSection currentStat={currentStat} showAllPlayers={showAllPlayers}/>
        <Table tableData={tableData} showAllPlayers={showAllPlayers}/>
        { currentStat }
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