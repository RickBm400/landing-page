'use client';
import { Kode_mono } from '../utils/fonts';
import './paperdash.sass';
import Grid from '@mui/material/Unstable_Grid2';

export default function PaperDash() {
  interface contact {
    phone_number: string;
    email: string;
    location: string;
  }
  const links = [
    {
      url: '',
      name: 'About',
    },
    {
      url: '',
      name: 'Work',
    },
    {
      url: '',
      name: 'What i do',
    },
    {
      url: '',
      name: 'Contact me',
    },
  ];

  const contacts: contact = {
    phone_number: '99999999',
    email: 'rjbm29@gmail.com',
    location: 'B/quilla',
  };

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
          className={`b-top b-left b-right b-bottom h-[20%]`}
          spacing={0}
        >
          <Grid xs={6}>
            <h1>This is the header</h1>
          </Grid>

          <Grid xs={6} container spacing={0}>
            <Grid xs={5}>
              <ul>
                {links.map((link) => {
                  return <li>{link.name}</li>;
                })}
              </ul>
            </Grid>
            <Grid xs={7}>
              {Object.keys(contacts).map((key: string) => {
                return (
                  <>
                    <div className="contact_data flex justify-between">
                      <span>{key.replace('_', ' ')}</span>
                      <span>{contacts[key as keyof typeof contacts]}</span>
                    </div>
                  </>
                );
              })}
            </Grid>
          </Grid>
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
