import "../../globals.css";
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
        <body>
        <div>
            <Header/>
        </div>
        <div>
            {children}
        </div>
        </body>
        </html>
    );
}
