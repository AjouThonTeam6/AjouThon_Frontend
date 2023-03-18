import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";

interface ClubTableType {
  columnData: {
    accessor: string;
    Header: string;
  }[];
  datas: unknown[];
  needCheckBox: boolean;
}
const ClubTable = ({ columnData, datas, needCheckBox }: ClubTableType) => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => datas, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // @ts-ignore
    useTable({ columns, data }, usePagination);

  return (
    <StyledTable align="center" width="800" {...getTableProps()}>
      <StyledThead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {needCheckBox ? (
              <StyledTh style={{ width: "50px" }}>
                <input type="checkbox" name="xxx" value="yyy" />
              </StyledTh>
            ) : (
              <></>
            )}

            {headerGroup.headers.map((column) => (
              <StyledTh {...column.getHeaderProps()}>
                {column.render("Header")}
              </StyledTh>
            ))}
          </tr>
        ))}
      </StyledThead>
      <StyledTBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {needCheckBox ? (
                <StyledTd>
                  <input type="checkbox" name="xxx" value="yyy" />
                </StyledTd>
              ) : (
                <></>
              )}

              {row.cells.map((cell) => (
                <StyledTd {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </StyledTd>
              ))}
            </tr>
          );
        })}
      </StyledTBody>
    </StyledTable>
  );
};
const CheckBox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
`;
const StyledTable = styled.table`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;
const StyledThead = styled.thead`
  background: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
const StyledTBody = styled.tbody`
  text-align: center;
`;
const StyledTh = styled.th`
  height: 40px;
  vertical-align: middle;
  border-right: 1px solid rgba(0, 0, 0, 0.06);
  line-height: 5px;
`;
const StyledTd = styled.td`
  height: 40px;
  vertical-align: middle;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
export default ClubTable;
