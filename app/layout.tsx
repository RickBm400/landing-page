import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { theme } from 'utils/materialUi/theme';
import { ThemeProvider } from '@mui/material';
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
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
