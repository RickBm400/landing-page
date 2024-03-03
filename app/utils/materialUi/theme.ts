'use client'
import { createTheme } from "@mui/material/styles";
import { barlow, bebas } from "../fonts";

export const theme = createTheme({
    typography: {
        fontFamily: barlow.style.fontFamily,
    },
});