"use client"

import React, {useState, useEffect} from "react";
import BgClouds from "@components/random-lunch/BgClouds";
import Image from "next/image";
import sign from "@image/random-lunch/sign.svg";
import num1 from "@image/random-lunch/num1.svg";
import num2 from "@image/random-lunch/num2.svg";
import num3 from "@image/random-lunch/num3.svg";
import MyResults from "@components/random-lunch/MyResults";
import Waiting from "@components/random-lunch/Waiting";
import apiClientHandler from "@lib/apiClientHandler";
import {getMealResultStatus} from "../../../../api/RandomLunch";

type CurrentStep = 'BEFORE' | 'AFTER'
type Category = 'PRODUCT' | 'SEOBON' | 'ALL'


export default function RandomLunchPage() {
    // const [currentStep, setCurrentStep] = useState<CurrentStep>('BEFORE')
    const [currentStep, setCurrentStep] = useState<CurrentStep>('AFTER')
    const [hasGroup, setHasGroup] = useState<boolean>(false)

    const handleResultStatus = async ({category}: { category: Category }) => {
        const res = await apiClientHandler(getMealResultStatus({category}))
        if (res.result) {
            //결과를 hasGroup에 저장
            setCurrentStep('AFTER')
        } else {
            alert('랜덤 랜식 결과를 확인 할 수없습니다.')
        }
    }


    return (
        <main
            className="w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover relative">
            <BgClouds/>
            {
                currentStep === 'BEFORE' && (
                    <div
                        className="absolute bottom-0 flex flex-col items-center w-full scroll-hidden overflow-y-scroll h-fit max-h-full">
                        <div className={'relative'}>
                            <p className={'text-center text-black text-64 mb-50 mt-50'}>어디에 참여하시겠어요?</p>
                            <Image src={sign} alt="sign" className="z-0 w-[900px]"/>
                            <div className="absolute z-1 bottom-[330px] flex items-center flex-col left-[210px]">
                                <Image src={num1} alt="num1" onClick={() => handleResultStatus({category: 'PRODUCT'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({category: 'PRODUCT'})}>제품팀 랜식(화)</p>
                            </div>

                            <div className="absolute z-1 bottom-[280px] flex items-start flex-col left-[560px]">
                                <Image src={num2} alt="num1" onClick={() => handleResultStatus({category: 'SEOBON'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({category: 'SEOBON'})}>서본 랜식 (화)</p>
                            </div>

                            <div className="absolute z-1 top-[350px] left-[550px] flex items-center flex-col">
                                <Image src={num3} alt="num1" onClick={() => handleResultStatus({category: 'ALL'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({category: 'ALL'})}>전체 랜식 (금)</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                currentStep === 'AFTER' && (
                    hasGroup ? <MyResults/> : <Waiting/>
                )
            }
        </main>
    )
}
