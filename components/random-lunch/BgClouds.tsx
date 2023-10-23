"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import left from "@image/random-lunch/white_cloud_left.svg";
import right from "@image/random-lunch/white_cloud_right.svg";

export default function BgClouds(){
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };

    return(
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
    )
}
