"use client"

import React, {useState} from "react";
import BgClouds from "@components/random-lunch/BgClouds";
import Image from "next/image";
import sign from "@image/random-lunch/sign.svg";
import num1 from "@image/random-lunch/num1.svg";
import num2 from "@image/random-lunch/num2.svg";
import num3 from "@image/random-lunch/num3.svg";
import MyResults from "@components/random-lunch/MyResults";
import Waiting from "@components/random-lunch/Waiting";
import apiClientHandler from "@lib/apiClientHandler";
import {getMealResultStatus} from "@api/RandomLunch";
import useToast from "@hooks/useToast";
import ToastPopup from "@components/common/ToastPopup";
import info from '@image/random-lunch/octagon.svg'
import ToastMessage from "@components/common/ToastMessage";

type CurrentStep = 'BEFORE' | 'AFTER'
type Category = 'PRODUCT' | 'SERVICE' | 'ALL'


export default function RandomLunchPage() {
    const [currentStep, setCurrentStep] = useState<CurrentStep>('BEFORE')
    const [hasGroup, setHasGroup] = useState<boolean>(false)
    const { isToastVisible, message, showToast, hideToast } = useToast();

    const handleResultStatus = async ({category}: { category: Category }) => {
        // const res = await apiClientHandler(getMealResultStatus({category}))
        // if (res.result) {
        //     //결과를 hasGroup에 저장
        //     setCurrentStep('AFTER')
        //     res.data.isCreated ? setHasGroup(true) : setHasGroup(false)
        // } else {
        //     alert('랜덤 랜식 결과를 확인 할 수없습니다. 다엘 또는 제인에게 문의주세요!')
        // }
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
                                <Image src={num2} alt="num1" onClick={() => handleResultStatus({category: 'SERVICE'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({category: 'SERVICE'})}>서본 랜식 (화)</p>
                            </div>

                            <div className="absolute z-1 top-[350px] left-[550px] flex items-center flex-col">
                                <Image src={num3} alt="num1" onClick={() => handleResultStatus({category: 'ALL'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({category: 'ALL'})}>전체 랜식 (금)</p>
                            </div>
                        </div>
                        <ToastPopup
                            message={<ToastMessage message={'허거덩! 당신은 제품팀이라 입장이 불가합니다.'}/>}
                            isVisible={isToastVisible}
                            onClose={hideToast}
                        />
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

