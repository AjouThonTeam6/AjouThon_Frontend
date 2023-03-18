import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import styled from "styled-components";
import Search from "./Search";

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
  const [allChecked, setAllChecked] = useState(true);
  const checkboxRef = useRef<HTMLInputElement[]>([]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    setGlobalFilter,
  } =
    // @ts-ignore
    useTable({ columns, data }, useGlobalFilter);
  useEffect(() => {
    if (allChecked) {
      checkboxRef.current.map((box: HTMLInputElement) => {
        box.checked = true;
      });
    } else {
      checkboxRef.current.map((box: HTMLInputElement) => {
        box.checked = false;
      });
    }
  }, [allChecked]);
  return (
    <>
      <Search onSubmit={setGlobalFilter}></Search>
      <StyledTable align="center" width="800" {...getTableProps()}>
        <StyledThead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {needCheckBox ? (
                <StyledTh style={{ width: "50px" }}>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      e.target.checked
                        ? setAllChecked(true)
                        : setAllChecked(false);
                      rows.map((row) => row.index);
                    }}
                    type="checkbox"
                    name="xxx"
                  />
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
            // console.log(row);
            return (
              <tr {...row.getRowProps()}>
                {needCheckBox ? (
                  <StyledTd>
                    <input
                      ref={(e: HTMLInputElement) => {
                        checkboxRef.current[row.index] = e;
                      }}
                      type="checkbox"
                      name={row.id}
                    />
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
    </>
  );
};

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
