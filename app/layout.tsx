'use client';
import React, { useEffect } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { theme } from 'utils/materialUi/theme';
import { ThemeProvider } from '@mui/material';
import { ReactLenis } from '@studio-freight/react-lenis';
// project fonts
import { barlow } from 'utils/fonts';
import './sass/global.sass';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={barlow.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <main>
              <ReactLenis
                root
                options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
              >
                {children}
              </ReactLenis>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
