import "../globals.css";
import React from "react";
import Header from "@components/common/Header";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../fonts/NeoDunggeunmoPro-Regular.ttf',
})


export default function AuthLayout({children}: { children: React.ReactNode; }) {
    return (
        <section className={myFont.className}> {children}</section>
    );
}
