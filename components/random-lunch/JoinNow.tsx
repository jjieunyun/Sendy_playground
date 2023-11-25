"use client";

import busStop from '@image/random-lunch/bus-stop.svg'
import Image from "next/image";
import wheel from '@image/random-lunch/pink-bus_wheel.svg'
import bus from '@image/random-lunch/pink-bus_body.svg'
import Person from "@components/random-lunch/Person";
import icon from "@image/random-lunch/mdi_dinosaur-pixel.svg"
import Polygon from '@image/random-lunch/Polygon.svg'
import useUpDown from "@hooks/useUpDown";
import bubble from '@image/random-lunch/speech_bubble.svg'
import React, {useEffect, useRef, useState} from "react";
import apiClientHandler from "@lib/apiClientHandler";
import {addToExcludeGroup, getExcludeGroupList, removeFromExcludeGroup} from "@api/RandomLunch";
import {useSearchParams} from 'next/navigation'
import BgClouds from "@components/random-lunch/BgClouds";
import {useUserContext} from "@context/UserContext";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface Member {
    userName: string;
    userId: number;
    gender: string;
}

export default function JoinNow() {
    const {isFold} = useUpDown()
    const randomLunchType = useSearchParams().get('randomLunchType');
    const [members, setMembers] = useState<Member[]>([]);
    const [isSelfExcluded, setIsSelfExcluded] = useState<null | boolean>(null) //true면 제외자에 등록, false면 제외자에 등록되지 않음
    const userInfo = useUserContext()?.userInfo
    const [date,setDate] = useState("")


    const fetchExcludeGroupList = async () => {
        const res = await apiClientHandler(getExcludeGroupList({randomLunchType: randomLunchType as string}))
        if (res?.result) {
            const group = res?.data?.userInfo
            setMembers(group)
            setDate(dayjs(res?.data?.mealDate).locale('ko').format('MM월 DD일 dddd'))
        } else {
            alert('오류가 발생했습니다. 다엘 또는 제인에게 문의주세요!')
        }
    }

    useEffect(()=>{
        setIsSelfExcluded(members.some((member: Member) => member.userId === userInfo?.id))
    },[members])

    useEffect(() => {
        fetchExcludeGroupList()
    }, [])

    const handleNoLunch = async () => {
        if (isSelfExcluded) { //제외자로등록 -> 제외자 해제
            setIsSelfExcluded(true)
            const res = await apiClientHandler(removeFromExcludeGroup({
                randomLunchType: randomLunchType as string,
            }))
            if(res.result){
                fetchExcludeGroupList()
            }else{
                setIsSelfExcluded(true)
                alert(res.message)
            }

        } else { // 제외자등록안됨 -> 제외자로 등록
            setIsSelfExcluded(false)
            const res = await apiClientHandler(addToExcludeGroup({
                randomLunchType: randomLunchType as string,
            }))
            if(res.result){
                fetchExcludeGroupList()
            }else{
                setIsSelfExcluded(false)
                alert(res.message)
            }
        }
    }


    return (
        <main
            className="w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover relative">
            <BgClouds/>
            <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 "></div>
            <div className="">
                <Image src={busStop} alt="busStop" height={492} className="absolute right-0 bottom-150"/>
                <div className="absolute bottom-[527px] right-[286px] overflow-hidden py-4">
                    <div className="w-[270px] h-32 animate-slider">
                        <div className="w-[1540px] flex text-24">
                            <div className="flex w-[770px] items-center gap-x-20 relative flex-nowrap">
                                <p>안먹는 사람 현재 <span className={'text-sp_pink text-26'}>{members.length}명</span> 입니다.</p>
                                <Image src={icon} alt="icon"/>
                                <p>안먹는 사람 현재 <span className={'text-sp_pink text-26'}>{members.length}명</span> 입니다.</p>
                                <Image src={icon} alt="icon"/>
                            </div>
                            <div className="flex w-[770px] items-center gap-x-20 relative flex-nowrap">
                                <p>안먹는 사람 현재 <span className={'text-sp_pink text-26'}>{members.length}명 </span>입니다.</p>
                                <Image src={icon} alt="icon"/>
                                <p>안먹는 사람 현재 <span className={'text-sp_pink text-26'}>{members.length}명</span> 입니다.</p>
                                <Image src={icon} alt="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div>
                    <Image src={bubble} alt={'container'} className={'absolute bottom-[490px] left-120'}/>
                    <p className={'absolute bottom-[520px] left-150 text-black text-24'}>{date} 오전 11시 출발합니다.</p>
                </div>

                <div className={`w-full h-full absolute transition-transform ${isFold ? '-mt-4' : '-mt-8'}`}>
                    <Image src={bus} alt="bus" width={601} className="absolute bottom-84"/>
                </div>
                <Image src={wheel} alt="wheel" width={167} className="absolute bottom-22 left-109"/>
                {
                    isSelfExcluded !== null && (
                        isSelfExcluded ? <CancelBtn onClick={handleNoLunch}/> : <ClickBtn onClick={handleNoLunch}/>
                    )
                }
            </div>
            <div className="absolute bottom-60 right-20 flex gap-x-40">
                {
                    members?.map((member, index) => {
                        return <Person name={member?.userName} gender={member?.gender} key={index}/> //수정하기

                    })
                }
            </div>
        </main>
    )
}

const ClickBtn = ({onClick}: { onClick: any }) => {
    return (
        <div
            onClick={onClick}
            className="bg-[#FF83DC] w-233 p-16 absolute bottom-170 left-[300px] border-2 border-[#FF0FBC] flex items-center gap-x-23 cursor-pointer">
            <div className="flex flex-col">
                <span className="">Click!</span>
                <span className="text-12">전 오늘 랜덤식사 안합니다만?</span>
            </div>
            <Image src={Polygon} alt="Polygon"/>
        </div>
    )
}

const CancelBtn = ({onClick}: { onClick: any }) => {
    return (
        <div
            onClick={onClick}
            className="bg-[#FF4242] w-233 p-16 absolute bottom-170 left-[300px] border-2 border-[#FF0FBC] flex items-center justify-between gap-x-23 cursor-pointer">
            <div className="flex flex-col">
                <span className="">취소하기!</span>
                <span className="text-12">앗 그냥 랜덤식사하겠습니다!</span>
            </div>
            <Image src={Polygon} alt="Polygon" className={''}/>
        </div>
    )
}
