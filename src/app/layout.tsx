import localFont from 'next/font/local'
import React from "react";
import "./globals.css";

const myFont = localFont({
    src: './fonts/NeoDunggeunmoPro-Regular.ttf',
})

export const metadata = {
    title: "SENDY_Playground",
};


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" >
        <body className={myFont.className}> {children}</body>
        </html>
    )
}