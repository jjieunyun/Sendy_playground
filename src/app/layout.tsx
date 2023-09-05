import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
    src: "./fonts/NeoDunggeunmoPro-Regular.ttf",
    display: "swap",
});

export const metadata = {
    title: "SENDY_Playground",
};

// prettier-ignore
export default function RootLayout({children,}: {children: React.ReactNode;}) { 
    return (
        <html lang="ko">
            <body className={myFont.className}>{children}</body>
        </html>
    );
}
