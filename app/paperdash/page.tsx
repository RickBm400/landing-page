'use client';
import { links, contacts } from './utils/scripts';
import { Kode_mono } from '../utils/fonts';
import './paperdash.sass';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from './components/Intro';

export default function PaperDash() {
  return (
    <>
      <Grid
        container
        id="container"
        spacing={0}
        className={Kode_mono.className}
      >
        <Grid
          container
          xs={12}
          className={`b-top b-bottom h-[20%]`}
          spacing={0}
        >
          <Grid xs={6}>
            <h1 className="text-bold text-[2.5rem] p-4">This is the header</h1>
          </Grid>

          <Grid xs={6} container spacing={0}>
            <Grid xs={5}>
              <ul className="p-4">
                {links.map((link) => {
                  return <li>{link.name}</li>;
                })}
              </ul>
            </Grid>
            <Grid xs={7}>
              <div className="contact_data p-4 flex flex-col justify-between">
                {Object.keys(contacts).map((key: string) => {
                  return (
                    <>
                      <div className="flex justify-between">
                        <span>{key.replace('_', ' ')}</span>
                        <span>{contacts[key as keyof typeof contacts]}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} className={`b-right b-bottom h-[60%]`}>
          <Intro />
        </Grid>
        <Grid xs={6} className={`b-bottom h-[60%]`}></Grid>
        <Grid
          xs={12}
          className={`b-bottom h-[20%] flex justify-between items-end`}
        >
          <div>alala</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              containerType: 'inline-size',
              width: '100%',
              height: '100%',
            }}
          >
            <span
              className="p-0 m-0"
              style={{
                fontSize: '13rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              4AM
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
