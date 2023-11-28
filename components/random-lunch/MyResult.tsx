"use client";

import body from '@image/random-lunch/front-bus-body.svg';
import wheel from '@image/random-lunch/front-bus-tire.svg';
import eyes from '@image/random-lunch/eyes.svg'
import Image from 'next/image';
import useUpDown from '@hooks/useUpDown';
import Person from "@components/random-lunch/Person";
import React, {useEffect, useRef, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import useSequentialFadeIn from "@hooks/useSequentialFadeIn";
import BgClouds from "@components/random-lunch/BgClouds";
import apiClientHandler from "@lib/apiClientHandler";
import {getMyGroupList} from "@api/RandomLunch";
import arrow from "@image/random-lunch/arrow.svg"
import GoBackArrow from "@components/common/GoBackArrow";

interface MyGroup {
    userId: number;
    userName: string;
    gender: "WOMEN" | 'MEN';
    order: number;
}

export default function MyResult() {
    const { isFold } = useUpDown();
    const [text, setText] = useState('');
    const fullText = '당신과 점심을 함께 할 운명의 상대는...?';
    const router = useRouter()

    const [myGroup, setMyGroup] = useState<MyGroup[]>([])
    const {visibleNum} = useSequentialFadeIn({maxNum:(myGroup?.length) +2, delay: 1500})
    const randomLunchType = useSearchParams().get('randomLunchType');

    const imageStyle = {
        transform: `translateY(${isFold ? 0 : '-8px'})`,
        transition: 'transform',
    };

    const textStyle = {
        transform: `translateY(${isFold ? 0 : '-10px'})`,
        transition: 'transform 1s ease-in-out  ',
    }

    const onClick = () => {
        router.push(`/random-lunch/group-overviews?randomLunchType=${randomLunchType}`)
    }



    const fetchMyGroup = async () => {
        const res = await apiClientHandler(getMyGroupList({randomLunchType: randomLunchType as string}))
        if(res?.result){
            if(res?.data?.groupName){
                const list = res?.data.myLunchGroupUser

                const usersWithOrder = list.map((user:any, index:any) => ({
                    ...user,
                    order: index + 1
                }));


                setMyGroup(usersWithOrder)
            }else {
                router.replace(`/random-lunch/group-overviews?randomLunchType=${randomLunchType}`)
            }

        }else {
            alert(res?.message)
            router.replace('/random-lunch')
        }
    }


    useEffect(() => {
        fetchMyGroup()
    }, []);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <main  className="max-w-[1500px] w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover relative">
            <BgClouds/>

            {
                myGroup.length > 0 && <>
                <article className="px-60 py-26 bg-[#000000] h-97 w-824 flex justify-center items-center mt-144 m-auto">
                  <p className="text-24">{text}</p>
                </article>

                <article className=" flex flex-col items-center absolute -bottom-[150px] z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div style={imageStyle}>
                    <Image
                      src={body}
                      width={420}
                      alt=""
                      className="w-410 h-auto"
                    />
                  </div>
                  <Image
                    src={wheel}
                    width={340}
                    alt="wheel"
                    className="-mt-45 -z-[1] w-340 h-auto"
                  />
                </article>

                <article className="absolute bottom-120 w-full">
                  <div className='flex justify-center gap-x-[500px]'>
                    <div className={'flex gap-x-20 w-400 justify-start'}>
                        {myGroup
                            .filter((person, index) => index % 2 === 0)
                            .map((person, index) => (
                                <Person
                                    key={index}
                                    name={person?.userName}
                                    gender={person.gender}
                                    className={`transition-opacity ease-in-out duration-100 ${person.order < visibleNum? person.order === visibleNum &&  'opacity-100':'opacity-0'}`}
                                />
                            ))}
                    </div>
                    <div className={'flex gap-x-20 w-400 justify-start'}>
                        {myGroup
                            .filter((person, index) => index % 2 !== 0)
                            .map((person, index) => (
                                <Person
                                    key={index}
                                    name={person.userName}
                                    gender={person.gender}
                                    className={`transition-opacity ease-in-out duration-100 ${person.order < visibleNum? person.order === visibleNum && 'opacity-100':'opacity-0'}`}
                                />
                            ))}
                    </div>
                  </div>
                </article>

              <GoBackArrow/>


                <article className={'absolute bottom-30 right-30 flex flex-col items-end'}>
                  <p className={'text-black text-36 font-400 -mb-4' } style={textStyle}>Click!!</p>
                  <div
                    onClick={onClick}
                    className={'border-3 rounded-4 border-black p-16 w-fit bg-sp_blue flex  items-center gap-x-22 cursor-pointer'}>
                    <div className={'flex flex-col'}>
                      <span>염탐하러가기</span>
                      <span className={'text-12'}>다른사람은 누구랑 먹을까?</span>
                    </div>
                    <Image src={eyes} alt={'eyes'}/>
                  </div>
                </article>
                <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 -z-[10]"></div>
              </>
            }
        </main>
    );
}
