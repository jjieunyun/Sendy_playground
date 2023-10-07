"use client";

import busStop from '@image/random-lunch/bus-stop.svg'
import Image from "next/image";
import wheel from '@image/random-lunch/pink-bus_wheel.svg'
import bus from '@image/random-lunch/pink-bus_body.svg'
import {motion} from "framer-motion";

export default function Waiting() {

    
    return (
        <main className="w-full h-full relative">
            <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 "></div>
           <Image src={busStop} alt="busStop" className="absolute right-0 bottom-150"/>
            <div className="">
                <motion.div
                    initial="start"
                    animate={{ y: ["0px", "-10px", "0px"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="w-full h-full absolute">
                    <Image src={bus} alt="bus" className="absolute bottom-90 -left-[160px] w-[45%]"/>
                </motion.div>
                <Image src={wheel} alt="wheel" className="absolute left-0 bottom-0 w-240"/>
            </div>
        </main>
    )
}