import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { editableComponentNameValueMap, tableState, UnFilteredTableState } from "../constants";


const EditableCell = ({
  value,
  rowIdx,
  column,
  numeric,
  editableComponent,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const tableData = useRecoilValue(tableState);
  const setTableData = useSetRecoilState(tableState);
  const setUnfilteredData = useSetRecoilState(UnFilteredTableState);

  const inlineValue = useRef(value);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false);

    if (!event.target.value.trim()) {
      return;
    }
    if (numeric) {
      if (!isFinite(event.target.value.trim())) {
        return;
      }
    }

    setTableData((prevValues) => {
      return prevValues.map((item) => {
        if (tableData.indexOf(item) === rowIdx) {
          return { ...item, [column]: event.target.value };
        }
        return item;
      });
    });

    setUnfilteredData((prevValues) => {
      return prevValues.map((item) => {
        if (tableData.indexOf(item) === rowIdx) {
          return { ...item, [column]: event.target.value };
        }
        return item;
      });
    });
  };

  const handleChange = (event) => {
    inlineValue.current = event.target.value;
  };


  const EditableComponent = editableComponentNameValueMap[editableComponent];

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
