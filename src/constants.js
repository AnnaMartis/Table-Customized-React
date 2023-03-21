import { atom } from "recoil";
import CustomDatePicker from "./components/editable/CustomDatePicker";
import CustomInput from "./components/editable/CustomInput";
import CustomSelect from "./components/editable/CustomSelect";
import CustomTextarea from "./components/editable/CustomTextarea";

// export const DUMMY_DATA = [
//   {
//     id: 1,
//     name: "AltaSwim Sandals",
//     description: "Cloud White / Beam Pink / Semi Lucid Fuchsia",
//     date: "04/17/2022",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "NMD 360 SHOES",
//     description: "Bliss Blue / Almost Blue / Cloud White",
//     date: "08/16/2022",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     name: "STAN SMITH SHOES",
//     description: "Cream White / Cream White / Core Black",
//     date: "03/31/2022",
//     status: "Cancelled",
//   },
// ];

export const tableState = atom({
  key: "table",
  default: [],
});

export const searchState = atom({
  key: "search",
  default: {
    id: "",
    name: "",
    description: "",
    date: "",
    status: "",
  },
});

export const unFilteredTableState = atom({
  key: "unfilteredTable",
  default: [],
});


export const columns = [
  {
    label: "Id",
    name: "id",
    editableComponent: CustomInput,
    numeric: true,
  },
  {
    label: "Name",
    name: "name",
    editableComponent: CustomInput,
    numeric: false,
  },
  {
    label: "Description",
    name: "description",
    editableComponent: CustomTextarea,
    numeric: false,
  },
  {
    label: "Date",
    name: "date",
    editableComponent: CustomDatePicker,
    numeric: false,
  },
  {
    label: "Status",
    name: "status",
    editableComponent: CustomSelect,
    numeric: false,
  },
];






// Resizable Part

export const resizeActiveState = atom({
  key: "isResizeActive",
  default: false,
});

export const columnClickedState = atom({
  key: "isColumnClicked",
  default: false,
});

export const positionsState = atom({
  key: "positons",
  default: {
    id: {
      start: 48,
      width: 170,
    },

    name: {
      start: 218,
      width: 170,
    },
    description: {
      start: 388,
      width: 170,
    },
    date: {
      start: 558,
      width: 170,
    },
    status: {
      start: 728,
      width: 170,
    },
  },
});
