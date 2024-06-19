'use client';
import variables from './sass/variables.module.sass';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import land from 'utils/img/landscape-large.jpg';
import './styles.sass';

export default function Home() {
  return (
    <div className="landing_container">
      <Grid
        spacing={0}
        container
        className="h-screen"
        style={{ backgroundColor: variables.blackVariable, color: 'white' }}
      >
        <Grid xs={7} className="flex justify-center items-center h-screen">
          olamundo
        </Grid>
        <Grid xs={5} className="flex justify-center items-center h-[100vh]">
          <section className="h-[95%] w-[90%]">
            <Image style={{ height: '100%' }} src={land} alt="crop" />
          </section>
        </Grid>
      </Grid>
      <section className="h-screen"></section>
      <footer
        className="h-[16rem]"
        style={{ backgroundColor: variables.yellowVariable }}
      ></footer>
      {/* <ThemeProvider theme={true ? buttonTheme : button2theme}>
        <Button href="/playground" variant="contained">
          Go to playground
        </Button>
      </ThemeProvider> */}
    </div>
  );
}
