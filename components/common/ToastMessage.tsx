import Image from "next/image";
import info from "@image/random-lunch/octagon.svg";
import React from "react";

export default function ToastMessage ({message}:{message:any}) {
    return(
        <div className={'flex gap-x-16 items-center'}>
            <Image src={info} alt={'info'}/>
            <p className={'text-black text-24'}>{message}</p>
        </div>
    )
}