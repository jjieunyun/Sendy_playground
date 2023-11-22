import React from 'react';
import close from '@image/random-lunch/close_pink.svg'
import Image from "next/image";

const ToastPopup = ({ message, isVisible, onClose }:{
    message:any,
    isVisible:boolean,
    onClose:()=>void
}) => {
    return (
        <div className={`fixed bottom-0 left-0 right-0 w-full 
                    transition-transform duration-300 ease-in-out
                    ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="bg-[#FECBFF] text-white px-24
                      flex items-center justify-center text-sm h-68 w-full">
                {message}
                <button onClick={onClose} className="absolute right-24 hover:scale-125 transition-all">
                   <Image src={close} alt={'close'}/>
                </button>
            </div>
        </div>
    );
};

export default ToastPopup;
