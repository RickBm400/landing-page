'use client';
import variables from './sass/variables.module.sass';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { buttonTheme, button2theme } from './utils/materialUi/theme';
import { ThemeProvider } from '@emotion/react';

export default function Home() {
  return (
    <>
      <Grid
        xs={12}
        spacing={0}
        container
        className="h-screen"
        style={{ backgroundColor: variables.bgColor, color: 'white' }}
      >
        <Grid xs={7} className="flex justify-center items-center h-screen">
          olamundo {variables.bgColor}
        </Grid>
        <Grid xs={5} className="flex justify-center items-center h-[100vh]">
          <section
            className="h-[95%] w-[90%]"
            style={{ backgroundColor: variables.bgColorGreen }}
          >
            ola
          </section>
        </Grid>
      </Grid>
      {/* <ThemeProvider theme={true ? buttonTheme : button2theme}>
        <Button href="/playground" variant="contained">
          Go to playground
        </Button>
      </ThemeProvider> */}
    </>
  );
}
