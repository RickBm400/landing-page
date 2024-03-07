import localFont from 'next/font/local'

import { Barlow, Bebas_Neue, } from 'next/font/google';

export const Kode_mono = localFont({ src: "../../public/fonts/KodeMono-VariableFont_wght.ttf", weight: '500', style: 'normal' })

export const barlow = Barlow({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const bebas = Bebas_Neue({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});
