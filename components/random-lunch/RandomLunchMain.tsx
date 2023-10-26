"use client"
import Image from "next/image";
import Waiting from "@components/random-lunch/Waiting";
import MyResults from "@components/random-lunch/MyResults";
import BgClouds from "@components/random-lunch/BgClouds";
import sign from '@image/random-lunch/sign.svg'
import num1 from '@image/random-lunch/num1.svg'
import num2 from '@image/random-lunch/num2.svg'
import num3 from '@image/random-lunch/num3.svg'


export default function  RandomLunchMain({hasGroup}:{hasGroup:boolean}) {
    
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };
    return (
        <main className="w-full h-screen overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover">
            <BgClouds/>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <Image src={sign} width="800" alt="sign" className=""/>
                <div className="absolute z-1 bottom-0">
                    <Image src={num1} alt="num1"/>
                    <p className="text-32 text-black">제품팀</p>
                </div>
                
                <div className="absolute z-1 bottom-0">
                    <Image src={num2} alt="num1"/>
                    <p className="text-32 text-black">서비스본부</p>
                </div>
                
                <div className="absolute z-1 bottom-0">
                    <Image src={num3} alt="num1"/>
                    <p className="text-32 text-black">전체</p>
                </div>
            </div>
           
            {/*{*/}
            {/*    hasGroup ? <MyResults/> : <Waiting/>*/}
            {/*}*/}
        </main>
    )
}