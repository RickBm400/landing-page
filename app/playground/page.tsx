'use client';
import { ThemeProvider } from '@emotion/react';
import variables from 'sass/variables.module.sass';
import { button2theme } from '../utils/materialUi/theme';
import { Button } from '@mui/material';

export default function Playground() {
  return (
    <>
      <div
        id="container"
        className="h-screen flex relative justify-center items-center text-[5rem] font-[600]"
        style={{
          backgroundColor: variables.bgColorGreen,
        }}
      >
        olamundo
        <div className="absolute bottom-10 right-10 flex align-baseline">
          <ThemeProvider theme={button2theme}>
            <Button href="/" variant="contained">
              Back to main
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
