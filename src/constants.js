import { atom } from "recoil";
import CustomInput from "./components/CustomInput";
import CustomSelect from "./components/CustomSelect";
import CustomTextarea from "./components/CustomTextarea";

export const DUMMY_DATA = [
  {
    id: 1,
    name: "AltaSwim Sandals",
    description: "Cloud White / Beam Pink / Semi Lucid Fuchsia",
    date: "",
    status: "Active",
  },
  {
    id: 2,
    name: "NMD 360 SHOES",
    description: "Bliss Blue / Almost Blue / Cloud White",
    date: "",
    status: "Pending",
  },
  {
    id: 3,
    name: "STAN SMITH SHOES",
    description: "Cream White / Cream White / Core Black",
    date: "",
    status: "Cancelled",
  },
];

export const tableState = atom({
  key: "table",
  default: DUMMY_DATA,
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

export const UnFilteredTableState = atom({
  key: "unfilteredTable",
  default: structuredClone(DUMMY_DATA),
});

export const columns = [
  {
    label: "Id",
    name: "id",
    editableComponent:  CustomInput,
    numeric: true
  },
  {
    label: "Name",
    name: "name",
    editableComponent: CustomInput,
    numeric: false
  },
  {
    label: "Description",
    name: "description",
    editableComponent: CustomTextarea,
    numeric: false
  },
  {
    label: "Date",
    name: "date",
    editableComponent: CustomInput,
    numeric: false
  },
  {
    label: "Status",
    name: "status",
    editableComponent: CustomSelect,
    numeric: false
  },
];


