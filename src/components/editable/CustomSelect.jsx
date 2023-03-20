import { forwardRef } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const CustomSelect = forwardRef(({ handleBlur, handleChange }, ref) => {
  return (
    <Select
      labelId="label"
      id="select"
      defaultValue={ref.current}
      onBlur={handleBlur}
      onChange={handleChange}
      autoFocus
    >
      <MenuItem value="Active">Active</MenuItem>
      <MenuItem value="Cancelled">Cancelled</MenuItem>
      <MenuItem value="Pending">Pending</MenuItem>
    </Select>
  );
});

export default CustomSelect;
