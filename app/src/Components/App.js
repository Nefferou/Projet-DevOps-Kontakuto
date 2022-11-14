import '../Scss/App.scss';
import {AppBar, Stack, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <AppBar>
          <Stack direction={"row"}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Kontakuto
              </Typography>

          </Stack>
      </AppBar>
    </div>
  );
}

export default App;
