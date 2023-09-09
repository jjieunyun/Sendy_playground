import "../globals.css";
import {Inter} from "next/font/google";
import React from "react";
import Header from "@components/common/Header";
const inter = Inter({subsets: ["latin"]});


export const metadata = {
    title: "SENDY_Playground",
};



export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="ko">
        <body className="h-screen">
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
