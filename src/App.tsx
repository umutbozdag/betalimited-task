import React, { useEffect } from "react";
import Navbar from "components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "app/hooks";
import { createSessionStart } from "app/features/session/slice";
import { ThemeProvider } from "@mui/material";
import Home from "pages/Home";
import theme from "@/theme";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { sessionId } = useSelector((state) => state.session);

  useEffect(() => {
    if (!sessionId) {
      dispatch(createSessionStart());
    }
  }, [dispatch, sessionId]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
