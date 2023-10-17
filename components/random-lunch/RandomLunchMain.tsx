"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import left from "@image/random-lunch/white_cloud_left.svg";
import right from "@image/random-lunch/white_cloud_right.svg";
import Waiting from "@components/random-lunch/Waiting";

export default function RandomLunchMain({hasGroup}:{hasGroup:boolean}) {
    
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };
    return (
        <main className="w-full h-screen overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover">
            <div className="relative z-[-1]">
                <motion.div
                    initial="start"
                    animate={{ y: ["0px", "-30px", "0px"] }}
                    variants={bounceUpVariants}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut" // 애니메이션 타이밍 함수
                    }}
                >
                    <Image src={left} alt="left" className="absolute left-[-80px] top-[180px]"/>
                </motion.div>
                <motion.div
                    initial="start"
                    animate={{ y: ["0px", "-30px", "0px"] }}
                    variants={bounceUpVariants}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}
                >
                    <Image src={right} alt="right" className="absolute right-[-80px] top-[200px]"/>
                </motion.div>
            </div>
            
            {
                hasGroup ? <p>결과나옴</p> : <Waiting/>
            }

        </main>
    )
}