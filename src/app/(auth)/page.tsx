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
import LoginForm from '@components/login/LoginForm';

const Auth: NextPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [bounce, setBounce] = useState(false);
    const [showBigCloud, setShowBigCloud] = useState(false);
    const [showSmallCloud, setShowSmallCloud] = useState(false);
    const [currentTab, setCurrentTab] = useState<'참여자'|'관리자'|null>(null);
    
    
    const handleBgFadeIn = () => {
        setFadeIn(true);
    }
    
    const handleBounceStart = () => {
        setBounce(true);
    }
    
    const handleBigCloud = () => {
        setShowBigCloud(true);
    }
    
    const handleSmallCloud = () => {
        setShowSmallCloud(true);
    }
    
    const handleTabChange = (tab:any) => {
        setCurrentTab(tab)
    }
    
    return (
        <main className="w-full h-screen relative flex justify-center items-center overflow-hidden">
            <motion.div
                className="z-10 "
                initial={{ scale: 1, y: 0 }}
                animate={{ scale: 2, y: -300 }}
                transition={{
                    scale: { duration: 0.5 },
                    y: { duration: 0.2, delay: 1 , type: "spring", stiffness: 100}
                }}
                onAnimationComplete={handleBgFadeIn}
            >
                <Image
                    src={logo}
                    alt="logo"
                    className={`flex justify-center items-center`}
                />
            </motion.div>

            <motion.section
                className="w-full h-full flex justify-center bg-gradient-linear absolute top-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeIn ? 1 : 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={()=>{
                    handleBounceStart()
                }}
            >
                <Image src={bottomBG} alt='bottomBG'
                       className="absolute w-full h-full bottom-0 z-[2]"/>
                <motion.div
                    className={`absolute w-full h-fit z-10`}
                    initial={{ bottom: "-100%" }}
                    animate={{ bottom: bounce ? "30%" : "-100%" }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 15,
                        mass: 1,
                        restSpeed: 0.5,
                        restDelta: 0.5,
                        delay: 1.7
                    }}
                    onAnimationComplete={handleBigCloud}
                >
                    {
                        currentTab === '참여자' && (
                            <div className="w-full h-full z-20">
                                <LoginForm handleTabChange={handleTabChange}/>
                            </div>
                        )
                    }
                    {
                        !currentTab && (
                            <div className="flex w-full gap-x-24 justify-center">
                                <PushButton label={'관리자용'} theme={'pink'} onClick={()=>handleTabChange(null)}/>
                                <PushButton label={'참여자용'} theme={'green'} onClick={()=>handleTabChange('참여자')}/>
                            </div>
                        )
                    }
                    
                </motion.div>
                <motion.div
                    initial={{ right: "-50%" }}
                    animate={{ right: showBigCloud ? "0%" : "-50%" }}
                    transition={{
                        delay: 3,
                        duration : 2
                    }}
                    className={`absolute right-0 bottom-[28%]`}
                >
                    <Image src={cloudR1} alt={'cloudRight'} />
                </motion.div>
                
                <motion.div
                    initial={{ left: "-50%" }}
                    animate={{ left: showBigCloud ? "0%" : "-50%" }}
                    transition={{
                        delay: 3,
                        duration : 2
                    }}
                    className={`absolute left-0 bottom-[28%]`}
                    onAnimationComplete={handleSmallCloud}
                >
                    <Image src={cloudL1} alt={'cloudLeft'} />
                </motion.div>
                <motion.div
                    initial={{ right: "-50%" }}
                    animate={{ right: showSmallCloud ? "0%" : "-50%" }}
                    transition={{
                        delay: 4,
                        duration : 2
                    }}
                    className={`absolute right-0 bottom-[54%]`}
                >
                    <Image src={cloudR2} alt={'cloudRight'}/>
                </motion.div>
                <motion.div
                    initial={{ left: "-50%" }}
                    animate={{ left: showSmallCloud ? "0%" : "-50%" }}
                    transition={{
                        delay: 4,
                        duration : 2
                    }}
                    className={`absolute left-0 bottom-[54%]`}
                >
                    <Image src={cloudL2} alt={'cloudLeft'}/>
                </motion.div>
            </motion.section>
        </main>
    );
};

export default Auth;


