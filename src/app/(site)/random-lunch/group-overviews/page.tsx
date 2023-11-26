"use client"

import Image from "next/image";
import BgClouds from "@components/random-lunch/BgClouds";
import clover from '@image/random-lunch/clover.svg'
import IcRyan from '@image/random-lunch/ic_Ryan.svg'
import IcClover from '@image/random-lunch/ic_clover.svg'
import useSequentialFadeIn from "@hooks/useSequentialFadeIn";
import React, {useEffect, useState} from "react";
import apiClientHandler from "@lib/apiClientHandler";
import {getAllGroupList} from "@api/RandomLunch";
import {useSearchParams, useRouter} from "next/navigation";
import arrow from "@image/random-lunch/arrow.svg";
import GoBackArrow from "@components/common/GoBackArrow";


const transformData = ({newData}: { newData: any }) => {
    return newData.map((group: any) => {
        const members = group.users.map((user: any) => user.name);
        if (group.groupName === 'RYAN') {
            members.push('라이언');
        }
        return members;
    });
}

export default function Result() {
    const [allGroup, setAllGroup] = useState([])
    const {visibleNum} = useSequentialFadeIn({maxNum: allGroup.length+1})

    const randomLunchType = useSearchParams().get('randomLunchType');
    const router = useRouter()

    const fetchAllGroupList = async () => {
        const res = await apiClientHandler(getAllGroupList({randomLunchType: randomLunchType as string}))
        if (res?.result) {
            setAllGroup(res.data.lunchGroupUserDTO)
        } else {
            alert(res?.message)
            router.replace('/random-lunch')
        }
    }


    useEffect(() => {
        if (!randomLunchType) return
        fetchAllGroupList()
    }, []);


    return (
        <main
            className="max-w-[1500px] min-h-[900px] w-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] relative bg-no-repeat bg-cover overflow-y-scroll scroll-hidden">
            <BgClouds/>
            {
                allGroup.length > 0 && <>
                <div className={'w-full h-full flex justify-center items-center flex-col'}>
                  <section className={'text-center mb-50'}>
                    <p className={'text-black text-40 font-bold mb-18'}>결과</p>
                    <div className={'flex items-center justify-center'}>
                      <p className={'text-black text-18'}>당신의 식사시간이 아름답기를..</p>
                      <Image src={clover} alt={'clover'}/>
                    </div>
                  </section>

                  <section className={'w-full max-w-1024 h-fit flex gap-16 flex-wrap justify-center items-center'}>
                      {
                          allGroup.length > 0 && transformData({newData: allGroup})?.map((members: any, index: any) => {
                              return <CardContainer
                                  className={`transition-opacity ease-in-out duration-100 ${index < visibleNum ? index === visibleNum && 'opacity-100' : 'opacity-0'}`}
                                  key={index} members={members}/>;
                          })
                      }
                  </section>
                </div>
              </>
            }
            <GoBackArrow/>

        </main>
    )
}

const CardContainer = ({members, className}: { members: Array<string>, className: any }) => {
    return (
        <article
            className={`bg-[url('/image/random-lunch/bg_card.svg')] bg-cover w-300 h-fit py-30 px-35 rounded-12 ${className}`}>
            <div className={'flex gap-24 w-full flex-wrap justify-between'}>
                {
                    members.map((member, index) => {
                        return <CardItem key={index} member={member}/>
                    })
                }
            </div>
        </article>
    )
}

const CardItem = ({member}: { member: string }) => {
    return (
        <div className={'flex flex-col justify-center items-center bg-white p-14 rounded-6 w-[calc(50%-12px)]'}>
            <Image src={member === '라이언' ? IcRyan : IcClover} alt={'IcRyan'} width={60} height={60}
                   className={'mb-14'}/>
            <p className={'text-black text-center text-18'}>{member}</p>
        </div>
    )
}