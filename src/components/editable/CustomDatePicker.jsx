import { forwardRef } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const CustomDatePicker = forwardRef(({ handleBlur }, ref) => {
    
  const handleDateBlur = () => {
    const date = new Date(ref.current);

    let month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    const year = date.getFullYear();
    const updatedDate = `${month}/${day}/${year}`;

    handleBlur(updatedDate, true);
  };

  const handleDateChange = (dayjs) => {
    ref.current = dayjs;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Basic date picker"
          defaultValue={dayjs(ref.current)}
          open
          autoFocus
          onClose={handleDateBlur}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
});

export default CustomDatePicker;
