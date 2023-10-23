"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import left from "@image/random-lunch/white_cloud_left.svg";
import right from "@image/random-lunch/white_cloud_right.svg";
import Waiting from "@components/random-lunch/Waiting";
import MyResults from "@components/random-lunch/MyResults";
import BgClouds from "@components/random-lunch/BgClouds";

export default function  RandomLunchMain({hasGroup}:{hasGroup:boolean}) {
    
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };
    return (
        <main className="w-full h-screen overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover">
            <BgClouds/>
            {
                hasGroup ? <MyResults/> : <Waiting/>
            }
        </main>
    )
}