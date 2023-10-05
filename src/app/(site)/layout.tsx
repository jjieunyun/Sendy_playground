import "../globals.css";
import React from "react";
import Header from "@components/common/Header";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../fonts/NeoDunggeunmoPro-Regular.ttf',
})


export default function DashboardLayout({children}: { children: React.ReactNode; }) {
    return (
        <section className={`h-screen ${myFont.className}`}>
            <div className="h-100 fixed w-full bg-transparent z-10">
                <Header/>
            </div>
            <div className="h-screen w-full flex justify-center">
                {children}
            </div>
        </section>
    );
}
