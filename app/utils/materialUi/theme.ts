'use client'
import { createTheme } from "@mui/material/styles";
import { barlow, bebas } from "../fonts";

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