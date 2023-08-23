"use client";
import type { NextPage } from "next";
import logo from "@image/SP_logo.svg";
import Image from "next/image";
import MainButton from "@components/MainButton";

const Auth: NextPage = () => {
    return (
        <main className="w-full h-screen relative flex justify-center items-center flex-col p-48">
            <section className="w-full h-2/3 flex justify-center">
                <Image
                    src={logo}
                    alt={"logo"}
                    // className="transition-transform duration-500 ease-in-out animate-zoomAndMove"
                />
            </section>
            <section className="flex w-full justify-center gap-x-24">
                <MainButton label="관리자용" theme="pink" />
                <MainButton label="사용자용" theme="green" />
            </section>
        </main>
    );
};

export default Auth;
