import TableCell from "@mui/material/TableCell";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { columnClickedState, positionsState, resizeActiveState } from "../constants";

const ResizableCell = ({ header, resizableFieldName}) => {
  const isResizeActive = useRecoilValue(resizeActiveState);
  const isColumnClicked = useRecoilValue(columnClickedState);

  const setResizeActive = useSetRecoilState(resizeActiveState);
  const setColumnClicked = useSetRecoilState(columnClickedState);


  const positions = useRecoilValue(positionsState);
  const setPositions = useSetRecoilState(positionsState);

  const start = positions[resizableFieldName.current]?.start;
  const innerWidth = positions[resizableFieldName.current]?.width;

  const handleMouseDown = (event, name) => {
    if (isResizeActive) {
      setColumnClicked(true);
      resizableFieldName.current = name;
    }
  };

  const handleMouseMove = (event) => {
    const offSetX = event.nativeEvent.offsetX;

    if (offSetX < 2) {
      setResizeActive(true);
    } else {
      setResizeActive(false);
    }

    if (isColumnClicked) {
      const clientX = event.clientX;
      const dif = start - clientX;
      const updatedWidth = innerWidth + dif;
      setPositions((prevValues) => {
        return {
          ...prevValues,
          [resizableFieldName.current]: { start: clientX, width: updatedWidth }
        };
      });
    }
  };

  const handleMouseUp = () => {
    setColumnClicked(false);
  };

  return (
    <TableCell
      align="right"
      sx={{
        padding: "0px .5rem",
        borderRight: ".5px solid black",
        width: `${innerWidth}px`,
        cursor: `${(isResizeActive || isColumnClicked) && "col-resize"} `,
        userSelect: "none",
      }}
      onMouseDown={(event) => handleMouseDown(event, header.name)}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {header.label}
    </TableCell>
  );
};

export default ResizableCell;
