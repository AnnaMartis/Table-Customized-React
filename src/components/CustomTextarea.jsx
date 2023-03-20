import TextareaAutosize from "@mui/base/TextareaAutosize";
import { forwardRef } from "react";

const CustomTextarea = forwardRef(({ handleBlur, handleChange }, ref) => {
  console.log('current', ref.current)
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      style={{ width: 200 }}
      autoFocus
      ref={ref}
      onBlur={handleBlur}
      onChange={handleChange}
      defaultValue={ref.current}
    />
  );
});

export default CustomTextarea;
