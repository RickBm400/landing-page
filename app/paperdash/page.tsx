"use client";
import "sass/paperdash.sass";
import Grid from "@mui/material/Unstable_Grid2";

export default function PaperDash() {
  return (
    <>
      <Grid container id="container" className="p-[1rem]" spacing={0}>
        <Grid container xs={12} className={`col-h-20`} spacing={0}>
          <Grid xs={6}>Hola</Grid>
          <Grid xs={6}>Mundo</Grid>
        </Grid>
        <Grid xs={6} className={`col-h-60`}>
          ols
        </Grid>
        <Grid xs={6} className={`col-h-60`}>
          ola
        </Grid>
        <Grid xs={12} className={`col-h-20`}>
          12
        </Grid>
      </Grid>
    </>
  );
}
