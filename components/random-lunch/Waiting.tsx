"use client";

import busStop from '@image/random-lunch/bus-stop.svg'
import Image from "next/image";
import wheel from '@image/random-lunch/pink-bus_wheel.svg'
import bus from '@image/random-lunch/pink-bus_body.svg'
import Person from "@components/random-lunch/Person";
import icon from "@image/random-lunch/mdi_dinosaur-pixel.svg"
import Polygon from '@image/random-lunch/Polygon.svg'
import useUpDown from "@hooks/useUpDown";

export default function Waiting() {
    const {isFold} = useUpDown()
    
    const handleNoLunch = () => {
        console.log('npono')
    }

    
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
                <div className={`w-full h-full absolute transition-transform ${isFold  ? '-mt-4' : '-mt-8'}`}>
                    <Image src={bus} alt="bus" width={601} className="absolute bottom-84"/>
                </div>
                <Image src={wheel} alt="wheel" width={167} className="absolute bottom-22 left-109"/>
                <div
                    onClick={handleNoLunch}
                    className="bg-[#FF83DC] p-16 absolute bottom-170 left-[300px] border-2 border-[#FF0FBC] flex items-center gap-x-23 cursor-pointer">
                    <div className="flex flex-col">
                        <span className="">Click!</span>
                        <span className="text-12">전 오늘 랜덤식사 안합니다만?</span>
                    </div>
                   <Image src={Polygon} alt="Polygon"/>
                </div>
            </div>
            <div className="absolute bottom-20 right-20 flex gap-x-40">
                <Person name="제인" gender="WOMAN"/>
                <Person name="디바" gender="WOMAN"/>
                <Person name="데이크크" gender="MAN"/>
                <Person name="다이몬도" gender="MAN"/>
                <Person name="제인" gender="WOMAN"/>
                <Person name="디바" gender="WOMAN"/>
                <Person name="데이크크" gender="MAN"/>
                <Person name="다이몬도" gender="MAN"/>
            </div>
        </main>
    )
}