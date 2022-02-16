import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
//TODO: Import Pages (Routes)
import Homepage from "routes/Homepage";

declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    layout: {
      offBlack: string;
      offWhite: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#3221ce",
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
