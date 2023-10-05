import "../globals.css";
import React from "react";
import Header from "@components/common/Header";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../fonts/NeoDunggeunmoPro-Regular.ttf',
})


export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="ko" className={myFont.className}>
        <body className={`h-screen ${myFont.className}`}>
        <div className="h-100 w-full">
            <Header/>
        </div>
        <div className="h-[calc(100vh-100px)] w-full flex justify-center">
            {children}
        </div>
        </body>
        </html>
    );
}
