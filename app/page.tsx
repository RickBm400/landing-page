"use client";
import variables from "./sass/variables.module.sass";
import CardComponent from "./components/Card.component";
import { Button } from "@mui/material";
import { buttonTheme, button2theme } from "./utils/materialUi/theme";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  return (
    <>
      <div
        className="w-screen flex relative justify-center items-center h-screen white-text "
        style={{ backgroundColor: variables.bgColor }}
      >
        <div
          className={`w-[90%] h-[90%] font-[100] text-[10rem] rounded-[1rem] flex justify-center items-center`}
          style={{
            backgroundColor: variables.bgColorGreen,
            color: variables.bgColor,
          }}
        >
          <CardComponent />
        </div>
        <div className="absolute bottom-10 right-10">
          <ThemeProvider theme={true ? buttonTheme : button2theme}>
            <Button href="/playground" variant="contained">
              Go to playground
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
