"use client";

import busStop from '@image/random-lunch/bus-stop.svg'
import Image from "next/image";
import wheel from '@image/random-lunch/pink-bus_wheel.svg'
import bus from '@image/random-lunch/pink-bus_body.svg'
import Person from "@components/random-lunch/Person";
import {useEffect, useState} from "react";
import icon from "@image/random-lunch/mdi_dinosaur-pixel.svg"

export default function Waiting() {
    const [marginTop, setMarginTop] = useState('unfold');
    
    useEffect(() => {
        const interval = setInterval(() => {
            setMarginTop((prevMarginTop) => (prevMarginTop === 'unfold' ? 'fold' : 'unfold'));
        }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    
    return (
        <main className="w-full h-full relative">
            <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 "></div>
            <div className="">
                <Image src={busStop} alt="busStop" height={492} className="absolute right-0 bottom-150"/>
                <div className="absolute bottom-[528px] right-[286px] overflow-hidden">
                    <div className="w-[270px] h-32 animate-slider">
                        <div className="w-[1160px] flex">
                            <div className="flex w-[580px] items-center gap-x-20 relative flex-nowrap">
                                <p> 화요일 오전 11시에 출발합니다.</p>
                                <Image src={icon} alt="icon"/>
                                <p> 안누르면 그냥 드셔야합니다.</p>
                                <Image src={icon} alt="icon"/>
                            </div>
                            <div className="flex w-[580px] items-center gap-x-20 relative flex-nowrap">
                                <p> 화요일 오전 11시에 출발합니다.</p>
                                <Image src={icon} alt="icon"/>
                                <p> 안누르면 그냥 드셔야합니다.</p>
                                <Image src={icon} alt="icon"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="">
                <div className={`w-full h-full absolute transition-transform ${marginTop === 'unfold' ? '-mt-4' : '-mt-8'}`}>
                    <Image src={bus} alt="bus" width={601} className="absolute bottom-84"/>
                </div>
                <Image src={wheel} alt="wheel" width={167} className="absolute bottom-22 left-109"/>
            </div>
            <div className="absolute bottom-20 right-20 flex gap-x-40">
                <Person name="제인" gender="WOMAN"/>
                <Person name="디바" gender="WOMAN"/>
                <Person name="데이크크" gender="MAN"/>
                <Person name="다이몬도" gender="MAN"/>
            </div>
        </main>
    )
}