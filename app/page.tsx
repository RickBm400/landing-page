"use client";
import variables from "./sass/variables.module.sass";
import CardComponent from "./components/Card.component";
import { Button } from "@mui/material";
import { buttonTheme, button2theme } from "./utils/materialUi/theme";
import { ThemeProvider } from "@emotion/react";

const name = "Hola mundo";

console.log(buttonTheme);

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
        <div className="absolute top-0 left-0">
          <ThemeProvider theme={false ? buttonTheme : button2theme}>
            <Button
              href="/playground"
              variant="contained"
              sx={{
                color: "white",
                fontWeight: 800,
                borderRadius: "40px",
              }}
              className="absolute top-0 left-0 m-20"
            >
              ola
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
