import { useSetRecoilState, useRecoilValue } from "recoil";

import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import {
  columns,
  searchState,
  tableState,
  UnFilteredTableState,
} from "../constants";

const debounce = (func, wait = 800) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const Search = ({ name }) => {
  const searchData = useRecoilValue(searchState);
  const unfilteredData = useRecoilValue(UnFilteredTableState);

  const setSearchData = useSetRecoilState(searchState);
  const setTableData = useSetRecoilState(tableState);
 

  const handleInputChange = (event, name) => {
    setSearchData((prevData) => {
      return { ...prevData, [name]: event.target.value };
    });
  };

  useEffect(() => {
    const filterData = () => {
      const filteredData = unfilteredData.filter((item) => {
        return columns.every((header) => {
          return item[header.name]
            .toString()
            .toLowerCase()
            .includes(searchData[[header.name]].toString().toLowerCase());
        });
      });
      setTableData(filteredData);
    };
    debounce(filterData)();
  }, [searchData, setTableData, unfilteredData]);

  return (
    <TextField
      value={searchData[name]}
      variant="standard"
      onChange={(event) => {
        handleInputChange(event, name);
      }}
    />
  );
};

export default Search;
