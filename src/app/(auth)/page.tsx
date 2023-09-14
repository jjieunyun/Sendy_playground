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
import { motion } from "framer-motion"
// @ts-ignore
import styles from '@style/keyframes.modules.css'

const Auth: NextPage = () => {

    
    return (
        <main className="w-full h-screen relative flex justify-center items-center flex-col">
            <motion.div
                initial={{ scale: 1, y: 0 }}
                animate={[{ scale: 2 }, { y: -100 }]}
                transition={[
                    { duration: 1 },
                    { duration: 1, delay: 1 }
                ]}
            >
                <Image
                    src={logo}
                    alt="logo"
                    className={`flex justify-center items-center`}
                />
            </motion.div>

            {/*<section*/}
            {/*    className="w-full h-full flex justify-center bg-gradient-linear absolute top-0 z-1 transition-opacity duration-1000 opacity-100">*/}
            {/*    <Image src={bottomBG} alt=''*/}
            {/*           className="absolute w-full h-full bottom-0 z-[2]"/>*/}
            {/*    */}
            {/*    <Image src={cloudR1} alt={'cloudRight'}*/}
            {/*           className={`absolute right-0 bottom-1/3 ${styles.moveCloud}`}/>*/}
            {/*    <Image src={cloudL1} alt={'cloudLeft'}*/}
            {/*           className={`absolute left-0 bottom-1/3 ${styles.moveCloud}`}/>*/}
            {/*    */}
            {/*    <Image src={cloudR2} alt={'cloudRight'}*/}
            {/*           className={`absolute right-0 bottom-[60%] ${styles.moveCloud}`}/>*/}
            {/*    <Image src={cloudL2} alt={'cloudLeft'}*/}
            {/*           className={`absolute left-0 bottom-[60%] ${styles.moveCloud}`}/>*/}
            {/*    */}
            {/*    <div*/}
            {/*        className={`absolute flex gap-x-24 z-10 bottom-1/3 `}>*/}
            {/*        <PushButton label={'관리자용'} theme={'pink'}/>*/}
            {/*        <PushButton label={'참여자용'} theme={'green'}/>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </main>
    );
};

export default Auth;