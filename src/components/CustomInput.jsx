import TextField from "@mui/material/TextField";
import { forwardRef } from "react";


const CustomInput = forwardRef(({ handleBlur, handleChange }, ref) => {

  return (
    <TextField
      variant="outlined"
      onBlur={handleBlur}
      onChange={handleChange}
      autoFocus
      ref={ref}
      defaultValue={ref.current}
    />
  );
});

export default CustomInput;
