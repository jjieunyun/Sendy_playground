"use client"

import Image from "next/image";
import BgClouds from "@components/random-lunch/BgClouds";
import clover from '@image/random-lunch/clover.svg'
import IcRyan from '@image/random-lunch/ic_Ryan.svg'
import IcClover from '@image/random-lunch/ic_clover.svg'
import useSequentialFadeIn from "@hooks/useSequentialFadeIn";

type GroupData = {
    [key: string]: string[];
};

const groupData: GroupData = {
    0: ['라이언','디바','제이크'],
    1: ['지구','디바','제이크'],
    2: ['데이먼','디바','제이크'],
    3: ['톰','디바','제이크'],
    4: ['몰리','디바','제이크']
}

export default function Result(){
    const bounceUpVariants = {
        start: { y: "0px" },
        up: { y: "-30px" }
    };
    const {visibleNum} = useSequentialFadeIn({maxNum:Object.keys(groupData).length})


    return(
        <main className="w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover overflow-y-scroll scroll-hidden">
            <BgClouds/>
            <section className={'text-center mt-120 mb-50'}>
                <p className={'text-black text-40 font-bold mb-18'}>결과</p>
                <div className={'flex items-center justify-center'}>
                    <p className={'text-black text-18'}>당신의 식사시간이 아름답기를..</p>
                    <Image src={clover} alt={'clover'}/>
                </div>
            </section>

            <section className={'w-full max-w-1024 h-fit flex gap-16 flex-wrap justify-center items-center m-auto mb-100'}>
                {
                    Object.keys(groupData).map((key, index) => {
                        const item = groupData[key];
                        return <CardContainer
                            className={`transition-opacity ease-in-out duration-100 ${index < visibleNum? index === visibleNum &&  'opacity-100':'opacity-0'}`}
                            key={key} members={item} />;
                    })
                }
            </section>
        </main>
    )
}

const CardContainer = ({members,className}:{members:Array<string>, className:any}) => {
    return(
        <article className={`bg-[url('/image/random-lunch/bg_card.svg')] bg-cover w-300 h-fit py-30 px-35 rounded-12 ${className}`}>
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