"use client";
import type { NextPage } from "next";
import logo from "@image/sp_logo.svg";
import Image from "next/image";
import bottomBG from '@image/web-BG 1.png'
import PushButton from "@components/common/PushButton";
import cloudRight from '@image/cloud_right.png'
import cloudLeft from '@image/cloud_left.png'
import {useState, useEffect} from 'react'
// @ts-ignore
import styles from '@style/keyframes.modules.css'

const Auth: NextPage = () => {
    const [logoAnimated, setLogoAnimated] = useState(false);
    const [logoMove, setLogoMove] = useState(false)
    const [showSection, setShowSection] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showClouds, setShowClouds] = useState(false);

    useEffect(() => {
        const animateSequence = async () => {
            setLogoAnimated(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setLogoMove(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setShowSection(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setShowSection(false);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setShowButtons(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setShowClouds(true);
        };

        animateSequence();
    }, []);

    return (
        <main className="w-full h-screen relative flex justify-center items-center flex-col">
            {showSection ? (
                <section className="w-full h-full flex justify-center bg-gradient-linear absolute top-0 -z-0 transition-opacity duration-1000 opacity-100">
                    <Image src={bottomBG} alt='' className="absolute bottom-0 transition-opacity duration-1000 opacity-100"/>
                    <Image src={cloudLeft} alt={'cloudLeft'} className={`absolute left-0 ${showClouds ? styles.moveCloud : ""}`}/>
                    <Image src={cloudRight} alt={'cloudRight'} className={`absolute right-0 ${showClouds ? styles.moveCloud : ""}`}/>

                    <div className={`mt-40 flex gap-x-24 z-10 ${showButtons ? styles.bounce : ""}`}>
                        <PushButton label={'관리자용'} theme={'pink'}/>
                        <PushButton label={'참여자용'} theme={'green'}/>
                    </div>
                </section>
            ) : null}

            <Image
                src={logo}
                width={logoAnimated ? 476 : 274}
                alt="logo"
                className={`flex justify-center items-center transition-all duration-2000 ease-in-out ${logoMove ? "moveLogo " : "relative"}`}
            />
        </main>
    );
};

export default Auth;