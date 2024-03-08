'use client';
import { links, contacts } from './utils/scripts';
import { Kode_mono } from '../utils/fonts';
import Grid from '@mui/material/Unstable_Grid2';
import Intro from './components/Intro';
import ContentSection from './components/ContentSection';
import './paperdash.sass';

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
          className={`border--top border--bottom h-[20%]`}
          spacing={0}
        >
          <Grid xs={6}>
            <h1 className="text-bold text-[2.5rem] p-4">This is the header</h1>
          </Grid>

          <Grid xs={6} container spacing={0}>
            <Grid xs={5}>
              <ul className="p-4">
                {links.map((link, i: number) => {
                  return <li key={i}>{link.name}</li>;
                })}
              </ul>
            </Grid>
            <Grid xs={7}>
              <div className="contact_data p-4 flex flex-col justify-between">
                {Object.keys(contacts).map((key: string, i: number) => {
                  return (
                    <div key={i} className="flex justify-between">
                      <span>{key.replace('_', ' ')}</span>
                      <span>{contacts[key as keyof typeof contacts]}</span>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={6} className={`border--right border--bottom h-[60%]`}>
          <Intro />
        </Grid>
        <Grid xs={6} className={`border--bottom`}>
          <ContentSection />
        </Grid>
        <Grid
          xs={12}
          container
          spacing={0}
          className={`border--bottom h-[20%]`}
        >
          <Grid xs={6} className={`flex h-[100%] items-end`}>
            <span>Impact beyond innovation</span>
          </Grid>
          <Grid xs={6} className="h-[100%]">
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
                  fontSize: '12rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                4AM
              </span>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
