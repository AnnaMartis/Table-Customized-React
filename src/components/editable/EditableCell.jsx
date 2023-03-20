import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { tableState, UnFilteredTableState } from "../../constants";

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
  const setUnfilteredData = useSetRecoilState(UnFilteredTableState);

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

  const handleChange = (event, date = false) => {
    inlineValue.current = event.target.value;
  };

  const handleDateChange = (dayjs) => {
    inlineValue.current = dayjs;
  };

  const handleDateBlur = () => {
    const date = new Date(inlineValue.current);

    let month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    const year = date.getFullYear();

    const updatedDate = `${month}/${day}/${year}`;

    handleBlur(updatedDate, true);
  };

  return (
    <>
      {isFocused ? (
        <EditableComponent
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          handleDateBlur={handleDateBlur}
          ref={inlineValue}
        />
      ) : (
        <Typography onClick={handleFocus}>{value}</Typography>
      )}
    </>
  );
};

export default EditableCell;
