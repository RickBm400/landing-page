"use client";
import "./paperdash.sass";
import Grid from "@mui/material/Unstable_Grid2";

export default function PaperDash() {
  return (
    <>
      <Grid container id="container" spacing={0}>
        <Grid
          container
          xs={12}
          className={`b-top b-left b-right b-bottom h-[20%]`}
          spacing={0}
        >
          <Grid xs={6}>99px</Grid>
          <Grid xs={6}>Mundo</Grid>
        </Grid>
        <Grid xs={6} className={`b-left b-right b-bottom h-[60%]`}>
          ols
        </Grid>
        <Grid xs={6} className={`b-right b-bottom h-[60%]`}>
          ola
        </Grid>
        <Grid xs={12} className={`b-left b-right b-bottom h-[20%]`}>
          12
        </Grid>
      </Grid>
    </>
  );
}
