import * as React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EventNoteIcon from '@mui/icons-material/EventNote';
import "./index.css"
import {
  ThemeProvider,
  createTheme,
  useColorScheme,
} from "@mui/material/styles";
import Card from "./Card";
import { Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";

function MyApp() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mx: 1,
        alignItems: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        minHeight: "56px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: mode === "dark" ? "white" : "black", 
          flexGrow: 1, 
          textAlign: "center",
          fontStyle:"oblique"
        }}
      >  
        STICKY NOTES
        <EventNoteIcon />
      </Typography>
      <Select
        value={mode}
        onChange={(event) => setMode(event.target.value)}
        sx={{ position: "relative" }}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </Box>
  );
}

const theme = createTheme({
  colorSchemes: {
    dark: true,
   
  },
});

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={2000} />
      <MyApp />
      <Card />
    </ThemeProvider>
  );
}
