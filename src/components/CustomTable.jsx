import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecoilState, useSetRecoilState } from "recoil";
import Search from "./Search";
import { columns, tableState, UnFilteredTableState } from "../constants";
import EditableCell from "./editable/EditableCell";

const CustomTable = () => {
  const [tableData] = useRecoilState(tableState);

  const setunFilteredData = useSetRecoilState(UnFilteredTableState);
  const setTableData = useSetRecoilState(tableState);

  useEffect(() => {
    const getTableData = async () => {
      const url =
        "https://table-task-1a203-default-rtdb.firebaseio.com/items.json";
      const response = await fetch(url);
      const data = await response.json();

      let loadedItems = [];

      for (let key in data) {
        loadedItems.push({
          id: data[key].id,
          name: data[key].name,
          description: data[key].description,
          date: data[key].date,
          status: data[key].status,
        });
      }
      setTableData(loadedItems);
      setunFilteredData(loadedItems);
    };
    getTableData();
  }, [setTableData, setunFilteredData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((header) => (
              <TableCell key={header.name} align="right">
                {header.label}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {columns.map((header) => (
              <TableCell key={header.label} align="right">
                <Search name={header.name} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, rowIdx) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                  <TableCell align="right" key={column.name}>
                    <EditableCell
                      value={row[column.name]}
                      rowIdx={rowIdx}
                      column={column.name}
                      numeric={column.numeric}
                      EditableComponent={column.editableComponent}
                    />
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
