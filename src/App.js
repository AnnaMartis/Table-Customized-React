import { Grid } from "@mui/material";
import "./App.css";
import CustomTable from "./components/CustomTable";

function App() {
  return (
    <Grid padding="3rem">
      <h1>Simple Table</h1>
        <CustomTable />
    </Grid>
  );
}

export default App;
