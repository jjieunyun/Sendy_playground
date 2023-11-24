"use client"

import React, {useState} from "react";
import BgClouds from "@components/random-lunch/BgClouds";
import Image from "next/image";
import sign from "@image/random-lunch/sign.svg";
import num1 from "@image/random-lunch/num1.svg";
import num2 from "@image/random-lunch/num2.svg";
import num3 from "@image/random-lunch/num3.svg";
import useToast from "@hooks/useToast";
import ToastPopup from "@components/common/ToastPopup";
import ToastMessage from "@components/common/ToastMessage";
import {useUserContext} from "@context/UserContext";
import depTranslator from "@utils/departmentTranslator";
import {useRouter} from "next/navigation"


type CurrentStep = 'BEFORE' | 'AFTER'
type RandomLunchType = 'PRODUCT' | 'SERVICE' | 'ALL'


export default function RandomLunchPage() {
    const [currentStep, setCurrentStep] = useState<CurrentStep>('BEFORE')
    const {isToastVisible, message, showToast, hideToast} = useToast();
    const userInfo = useUserContext()?.userInfo
    const router = useRouter()

    const handleResultStatus = async ({randomLunchType}: { randomLunchType: RandomLunchType }) => {
        const isUnauthorized = (type:any) => randomLunchType === type && userInfo?.teamName !== type;

        if (isUnauthorized('PRODUCT') || isUnauthorized('SERVICE')) {
            showToast({msg: `허거덩! 당신은 ${depTranslator({dep: userInfo?.teamName})}이라 입장이 불가합니다.`});
            return;
        }

        router.push(`/random-lunch/type-selected?randomLunchType=${randomLunchType}`)
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
                                <Image src={num1} alt="num1"
                                       onClick={() => handleResultStatus({randomLunchType: 'PRODUCT'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({randomLunchType: 'PRODUCT'})}>제품팀 랜식(화)</p>
                            </div>

                            <div className="absolute z-1 bottom-[280px] flex items-start flex-col left-[560px]">
                                <Image src={num2} alt="num1"
                                       onClick={() => handleResultStatus({randomLunchType: 'SERVICE'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({randomLunchType: 'SERVICE'})}>서본 랜식 (화)</p>
                            </div>

                            <div className="absolute z-1 top-[350px] left-[550px] flex items-center flex-col">
                                <Image src={num3} alt="num1" onClick={() => handleResultStatus({randomLunchType: 'ALL'})}
                                       className={'cursor-pointer'}/>
                                <p className="text-32 text-black cursor-pointer"
                                   onClick={() => handleResultStatus({randomLunchType: 'ALL'})}>전체 랜식 (금)</p>
                            </div>
                        </div>
                        <ToastPopup
                            message={<ToastMessage message={message}/>}
                            isVisible={isToastVisible}
                            onClose={hideToast}
                        />
                    </div>
                )
            }
        </main>
    )
}

