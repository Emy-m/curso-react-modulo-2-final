import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/Header";
import { Box } from "@mui/material";
/* import HeaderConditional from "./components/HeaderConditional";
import Conditional from "./components/Conditional";
import { useState } from "react"; */
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  /* const [option, setOption] = useState(1); */
  return (
    <BrowserRouter>
      {/* <HeaderConditional setOption={setOption} /> */}
      {/* <Conditional option={option} /> */}
      <Header />
      <Box
        sx={{
          minHeight: "100px",
        }}
      ></Box>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
