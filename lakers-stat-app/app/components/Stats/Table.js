const TableHeader = ({ children }) => {
  return (
    <th className="border-[1px] broder-gray-300 text-left py-2 px-4">
      {children}
    </th>
  )
};

const DataCell = ({ children }) => {

};

export default function Table({ tableData }) {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader>NAME</TableHeader>
          <TableHeader>POSITION</TableHeader>
          <TableHeader>VALUE</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jasper</td>
          <td>PF</td>
          <td>617</td>
        </tr>
      </tbody>
    </table>
  )
}