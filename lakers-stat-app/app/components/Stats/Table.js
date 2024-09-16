const TableHeader = ({ children }) => {
  return (
    <th className="border-[1px] broder-gray-300 text-left py-2 px-4">
      {children}
    </th>
  )
};

const DataCell = ({ children }) => {
  return (
    <td className="border-[1px] border-gray-300 text-left py-2 px-4">
      {children}
    </td>
  )
};

export default function Table({ tableData, showAllPlayers, currentStat }) {
  // Implemented a switch case because each API data had different object keys to access the data
  let filter = "";
  let value = ""

  switch (currentStat) {
    case "points":
      filter = "pts"
      value = "POINTS"
      break;
    case "rebounds":
      filter = "reb"
      value = "REBOUNDS"
      break;
    case "threePointers":
      filter = "tpp"
      value = "3P%"
      break;
    default:
      filter = "pts"
  }

  const orderedTableData = [...(tableData[filter]?.pl || [])].sort((a, b) => b.val - a.val);

  const top3Data = orderedTableData.slice(0, 3);

  const dataToDisplay = showAllPlayers ? orderedTableData : top3Data;

  return (
    <div className={`w-full ${showAllPlayers ? 'max-h-[400px] overflow-y-scroll' : 'overflow-auto'} rounded-sm shadow-md`}>
      <table className="w-full">
        <thead>
          <tr>
            <TableHeader>NAME</TableHeader>
            <TableHeader>POSITION</TableHeader>
            <TableHeader>{value}</TableHeader>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((player, index) => {
            const rowClass = index % 2 === 0 ? 'bg-gray-100' : 'bg-white';

            return (
              <tr key={index} className={rowClass}>
                <DataCell>{player.fn} {player.ln}</DataCell>
                <DataCell>{player.pos}</DataCell>
                <DataCell>{player.val.toFixed(2)}</DataCell>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}