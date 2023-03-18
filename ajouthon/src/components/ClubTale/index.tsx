import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";



// 지금은 예시를 위해 데이터를 직접 삽입했지만 props로 넘겨주어야 합니다.
// 그러므로 지금 tsx에는 props를 받고있지 않습니다. 수정필요.
const columnData = [
  {
    accessor: "email",
    Header: "Email",
  },
  {
    accessor: "walletID",
    Header: "Wallet ID",
  },
  {
    accessor: "created_at",
    Header: "Created At",
  },
  {
    accessor: "edited_at",
    Header: "Edited At",
  },
  {
    accessor: "coin_list",
    Header: "Wallet Balance",
  },
];

const ClubTable = () => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(
    () => [
      {
        email: "이메일이에용",
        walletID: "아이디에용",
        created_at: "2021-08-03 01:14:47",
        edited_at: "2021-08-03 01:15:49",
        coin_list: ["TRV", "BTC", "BCH", "ETH"],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // @ts-ignore
    useTable({ columns, data }, usePagination);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClubTable;
