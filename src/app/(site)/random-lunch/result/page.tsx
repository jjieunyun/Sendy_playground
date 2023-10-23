"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import left from "@image/random-lunch/white_cloud_left.svg";
import right from "@image/random-lunch/white_cloud_right.svg";
import BgClouds from "@components/random-lunch/BgClouds";
import clover from '@image/random-lunch/clover.svg'
import IcRyan from '@image/random-lunch/ic_Ryan.svg'
import IcClover from '@image/random-lunch/ic_clover.svg'

export default function Result(){
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };

    return(
        <main className="w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover overflow-y-scroll">
            <BgClouds/>
            <section className={'text-center mt-120 mb-50'}>
                <p className={'text-black text-40 font-bold mb-18'}>결과</p>
                <div className={'flex items-center justify-center'}>
                    <p className={'text-black text-18'}>당신의 식사시간이 아름답기를..</p>
                    <Image src={clover} alt={'clover'}/>
                </div>
            </section>

            <section className={'w-full max-w-1024 h-fit flex gap-16 flex-wrap justify-center items-center m-auto mb-100'}>
                <CardContainer members={['라이언','디바','제이크']}/>
                <CardContainer members={['라이언','디바','제이크']}/>
                <CardContainer members={['라이언','디바','제이크']}/>
                <CardContainer members={['라이언','디바','제이크']}/>
                <CardContainer members={['라이언','디바','제이크']}/>

            </section>
        </main>
    )
}

const CardContainer = ({members}:{members:Array<string>}) => {
    return(
        <article className={"bg-[url('/image/random-lunch/bg_card.svg')] bg-cover w-300 h-fit py-30 px-35 rounded-12"}>
            <div className={'flex gap-24 w-full flex-wrap justify-between'}>
                {
                    members.map((member,index) =>{
                        return<CardItem key={index} member={member}/>
                    })
                }
            </div>
        </article>
    )
}

const CardItem = ({member}:{member:string}) => {
    return (
        <div className={'flex flex-col justify-center items-center bg-white p-14 rounded-6 w-[calc(50%-12px)]'}>
            <Image src={member === '라이언'?IcRyan:IcClover} alt={'IcRyan'} width={60} height={60} className={'mb-14'}/>
            <p className={'text-black text-center text-18'}>{member}</p>
        </div>
    )
}