import "../Scss/App.scss";
import "../Scss/appColors";
import { AppBar, Stack, TextField, Typography, Box } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import appColors from "./../Scss/appColors";

function App() {
  return (
    <div className="App">
      <Stack>
        <AppBar static sx={{ height: "80px", bgcolor: appColors.yellow }}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ flexgrow: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              variant="h2"
              fontWeight="700"
              sx={{ textShadow: "3px 3px 5px #0005" }}
            >
              kontakuto_
            </Typography>
            <TextField variant="filled">AHAHAH</TextField>
          </Stack>
        </AppBar>

        <Box>
          <Typography>Kontakuto_</Typography>
        </Box>
      </Stack>
    </div>
  );
}

export default App;
