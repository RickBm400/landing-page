import React from "react";

// project fonts
import { barlow } from "./utils/fonts";
import "./sass/global.sass"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={barlow.className}>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}