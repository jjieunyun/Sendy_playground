"use client";
import type {NextPage} from "next"
import logo from '@image/SP_logo.svg'
import Image from "next/image";
import MainButton from "@components/MainButton";

const Login: NextPage = () => {
  


  return (
    <main className="w-full h-screen relative flex justify-center items-center flex-col">
        <Image src={logo} alt={'logo'} className="transition-transform duration-500 ease-in-out animate-zoomAndMove"/>
        <section className="flex w-full justify-center">
            <MainButton label="관리자용" theme="pink"/>
        </section>
    </main>
  )
}

export default Login;

