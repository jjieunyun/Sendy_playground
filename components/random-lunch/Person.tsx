import React, {useState, useEffect} from 'react';
import nameTag from "@image/random-lunch/name_tag.svg"
import WBody from '@image/random-lunch/cha-woman-body.svg'
import WHead from '@image/random-lunch/cha-woman-head.svg'
import MBody from '@image/random-lunch/cha-man-body.svg'
import MHead from '@image/random-lunch/cha-man-head.svg'
import Image from "next/image";
import useUpDown from "@hooks/useUpDown";

export default function Person({name, gender, className}: {
    name: string,
    gender: 'MAN' | 'WOMAN',
    className?: string
}) {
    const {isFold} = useUpDown()


    return (
        <div className={`w-full h-full flex flex-col items-center ${className}`}>
            <div className="relative mb-10">
                <Image src={nameTag} alt="nameTag"/>
                <span
                    className="text-black w-70 text-center absolute top-1/2 -mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {name}
                </span>
            </div>
            {gender === 'MAN' ? (
                <div className="flex flex-col items-center justify-end">
                    <Image src={MHead} width="81" alt="WHead" className="z-0"/>
                    <Image src={MBody} width="64" alt="WBody"
                           className={`transition-transform ${isFold ? '-mt-4' : '-mt-8'}`}/>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-end">
                    <Image src={WHead} width="81" alt="WHead" className="z-0"/>
                    <Image src={WBody} width="64" alt="WBody"
                           className={`transition-transform ${isFold ? '-mt-16' : '-mt-20'}`}/>
                </div>
            )}
        </div>
    )
}