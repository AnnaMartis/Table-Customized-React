import { forwardRef } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";


const CustomDatePicker = forwardRef(({ handleDateBlur, handleDateChange }, ref) => {
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
