import { createTheme, NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import Agents from "./components/agents";
import Footer from "./components/footer";
import Header from "./components/header";
import Map from "./components/map";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#FF4654",
      secondary: "#0F1923",
      secondaryLight: "#132231",
      background: "#111111",
      border: "#3F4953",
    },
  },
});

const Game = () => {
  return (
    <NextUIProvider theme={theme}>
      <Header />
      <Agents />
      <Map />
      <Footer />
    </NextUIProvider>
  );
};
export default Game;
