'use client'
import { createTheme } from "@mui/material/styles";
import { barlow, bebas } from "utils/fonts";

export const theme = createTheme({
    typography: {
        fontFamily: barlow.style.fontFamily,
    },
});

export const buttonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) =>
                    theme.unstable_sx({
                        fontFamily: bebas.style.fontFamily,
                        backgroundColor: 'red',
                        ":hover": {
                            backgroundColor: '#fb4f66'
                        }
                    })
            }
        }
    }
})

export const button2theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) =>
                    theme.unstable_sx({
                        fontFamily: bebas.style.fontFamily,
                        backgroundColor: 'green',
                    })
            }
        }
    }
})