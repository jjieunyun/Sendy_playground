import localFont from 'next/font/local'
import React from "react";
import "./globals.css";
import MainLayout from "@components/MainLayout";

const myFont = localFont({
    src: './fonts/NeoDunggeunmoPro-Regular.ttf',
})

export const metadata = {
    title: "♫•*¨S e n d y P l a y g r o u n d*•.¸¸♪✧",
};


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" >
        <body className={myFont.className}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    )
}