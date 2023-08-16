import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
// import {UserContextProvider} from "@context/UserContext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'React Sendy Console',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
        <body className={inter.className}>
        {/*<UserContextProvider>*/}
        {children}
        {/*</UserContextProvider>*/}
        </body>
        </html>
    )
}
