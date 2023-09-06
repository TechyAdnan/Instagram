import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import Add from "./components/Add";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        padding="60px"
        // height="4000px"
        display="flex"
        flexDirection="column"
      >
        <Navbar />
        
          <Stack direction="row" spacing={2} minHeight="80%">
            <Leftbar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
            <Add />  
          </Stack>
      </Box>
      
        <Box top='100vh' position='relative'>
        <Footer/>
        </Box>
      
       
      
      
      
    </ThemeProvider>
  );
}

export default App;
