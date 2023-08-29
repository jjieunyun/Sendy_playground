"use client";
import type {NextPage} from "next";
import logo from "@image/sp_logo.svg";
import Image from "next/image";
import bottomBG from '@image/web-BG 1.png'
import PushButton from "@components/common/PushButton";
import cloudR1 from '@image/Cloud-R-1.png'
import cloudR2 from '@image/Cloud-R-2.png'
import cloudL1 from '@image/Cloud-L-1.png'
import cloudL2 from '@image/Cloud-L-2.png'
import {useState, useEffect} from 'react'
// @ts-ignore
import styles from '@style/keyframes.modules.css'

const Auth: NextPage = () => {
    const [state, setState] = useState({
        logoAnimated: false,
        logoMoved: false,
        sectionVisible: false,
        buttonsVisible: false,
        cloud1Visible: false,
        cloud2Visible: false
    });
    useEffect(() => {
        const animateSequence = async () => {
            setState(prevState => ({...prevState, logoAnimated: true}));
            await wait(1000);
            
            setState(prevState => ({...prevState, logoMoved: true}));
            await wait(1000);
            
            setState(prevState => ({...prevState, sectionVisible: true}));
            await wait(1000);
            
            setState(prevState => ({...prevState, buttonsVisible: true}));
            await wait(1000);
            
            setState(prevState => ({...prevState, cloud1Visible: true, cloud2Visible: true}));
        };
        
        const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
        
        animateSequence();
    }, []);
    
    return (
        <main className="w-full h-screen relative flex justify-center items-center flex-col">
            <section
                className="w-full h-full flex justify-center bg-gradient-linear absolute top-0 z-1 transition-opacity duration-1000 opacity-100">
                <Image src={bottomBG} alt=''
                       className="absolute bottom-0 transition-opacity z-[2] duration-1000 opacity-100"/>
                
                <Image src={cloudR1} alt={'cloudRight'}
                       className={`absolute right-0 bottom-[250px] ${styles.moveCloud}`}/>
                <Image src={cloudL1} alt={'cloudLeft'}
                       className={`absolute left-0 bottom-[250px] ${styles.moveCloud}`}/>
                
                <Image src={cloudR2} alt={'cloudRight'}
                       className={`absolute right-0 bottom-[500px] ${styles.moveCloud}`}/>
                <Image src={cloudL2} alt={'cloudLeft'}
                       className={`absolute left-0 bottom-[500px] ${styles.moveCloud}`}/>
                
                <div
                    className={`absolute flex gap-x-24 z-10 bottom-[375px] ${state.buttonsVisible ? styles.bounce : ""}`}>
                    <PushButton label={'관리자용'} theme={'pink'}/>
                    <PushButton label={'참여자용'} theme={'green'}/>
                </div>
            </section>
            <Image
                src={logo}
                width={state.logoAnimated ? 476 : 274}
                alt="logo"
                className={`flex justify-center items-center transition-all duration-2000 ease-in-out ${state.logoMoved ? "moveLogo " : "relative"}`}
            />
        </main>
    );
};

export default Auth;