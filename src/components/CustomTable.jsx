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
import EditableInput from "./EditableInput";

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
              <TableCell align="right">
                <EditableInput
                  value={row.id}
                  rowIdx={rowIdx}
                  column="id"
                  numeric
                />
              </TableCell>
              <TableCell align="right">
                <EditableInput
                  value={row.name}
                  rowIdx={rowIdx}
                  column="name"
                />
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
