import { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useRecoilState } from "recoil";
import Search from "./Search";
import { columns, tableState } from "../constants";
import EditableCell from "./EditableCell";

const CustomTable = () => {
  const [tableData] = useRecoilState(tableState);

  // useEffect(()=>{
  //     const getTableData = async()=>{
  //         const url = "";
  //         const response = await fetch(url);
  //         const body = await response.json();
  //         setTableData(body);

  //     }
  //     getTableData()

  // }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((header) => {
              return (
                <TableCell key={header.name} align="right">
                  {header.label}
                </TableCell>
              );
            })}
          </TableRow>
          <TableRow>
            {columns.map((header) => {
              return (
                <TableCell key={header.name} align="right">
                  <Search name={header.name} />
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, rowIdx) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => {
                return (
                  <TableCell align="right" key={column.id}>
                    <EditableCell
                      value={row[column.name]}
                      rowIdx={rowIdx}
                      column={column.name}
                      numeric={column.numeric}
                      editableComponent={column.editableComponent}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
