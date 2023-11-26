import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";

export default function GoBackArrow() {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }


    return(
        <article className={'absolute top-100 left-30 flex flex-col items-end cursor-pointer'} onClick={handleGoBack}>
            <Image src={'/image/random-lunch/arrow.svg'} alt={'eyes'} className={'rotate-180'} width={120} height={64}/>
            <p className={'text-black absolute top-20 left-40'}>이전으로</p>
        </article>
    )
}