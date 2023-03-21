import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { tableState, unFilteredTableState } from "../../constants";

const EditableCell = ({
  value,
  rowIdx,
  column,
  numeric,
  EditableComponent,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const tableData = useRecoilValue(tableState);
  const setTableData = useSetRecoilState(tableState);
  const setUnfilteredData = useSetRecoilState(unFilteredTableState);

  const inlineValue = useRef();

  const handleFocus = () => {
    inlineValue.current = value;
    setIsFocused(true);
  };

  const handleBlur = (event, date = false) => {
    setIsFocused(false);
    const value = date ? event : event.target.value.trim();

    if (!value) {
      return;
    }

    if (numeric) {
      if (!isFinite(value)) {
        return;
      }
    }

    setTableData((prevValues) => {
      return prevValues.map((item) => {
        if (tableData.indexOf(item) === rowIdx) {
          return { ...item, [column]: value };
        }
        return item;
      });
    });

    setUnfilteredData((prevValues) => {
      return prevValues.map((item) => {
        if (tableData.indexOf(item) === rowIdx) {
          return { ...item, [column]: value };
        }
        return item;
      });
    });
  };

  const handleChange = (event) => {
    inlineValue.current = event.target.value;
  };

  return (
    <>
      {isFocused ? (
        <EditableComponent
          handleBlur={handleBlur}
          handleChange={handleChange}
          ref={inlineValue}
        />
      ) : (
        <Typography onClick={handleFocus}>{value}</Typography>
      )}
    </>
  );
};

export default EditableCell;
