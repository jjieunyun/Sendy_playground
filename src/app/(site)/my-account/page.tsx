"use client"
import Image from "next/image";
import phone from '@image/phone_2.svg'
import pencil from '@image/account/ic-pencil.svg'
import saved from '@image/account/ic-saved.svg'
import profile from '@image/account/profile.svg'
import heartFull from '@image/account/heart_full.svg'
import heartEmpty from '@image/account/heart_empty.svg'
import camera from '@image/account/camera.svg'

import {useState} from "react";

export default function MyAccount() {
    const [isEdit, setIsEdit] = useState(false)
    const [userData, setUserData] = useState(mockData);
    
    const handleInputChange = (field: string, value: string) => {
        setUserData(prevData => ({...prevData, [field]: value}));
    };
    
    const handleSpicyLevelChange = (level: any) => {
        setUserData(prevData => ({ ...prevData, spicyLevel: level }));
    };
    
    
    const inputStyle = 'text-18 bg-transparent outline-none w-240 text-right'
    const editMode = 'border-1 border-white p-15'
    const nonEditMode = 'border-transparent p-16'
    
    return (
        <main className="pb-64 relative">
            <Image src={phone} alt="phone" className="w-full h-full"/>
            <section className={'absolute top-0 w-full h-[calc(100%-64px)] pt-50 pb-149 px-50'}>
                <article className="relative">
                    <div className={'flex items-center w-full justify-end'} onClick={() => setIsEdit(!isEdit)}>
                        <span className={'text-14 mr-4 cursor-pointer'}>{isEdit ? '저장하기' : '수정하기'}</span>
                        <Image src={isEdit ? saved : pencil} alt={'pencil'} width={36} height={36}
                               className={'cursor-pointer'}/>
                    </div>
                </article>
                <article className={'my-40 flex justify-center items-center flex-col w-full'}>
                    <div className="relative">
                        <Image src={profile} alt={'profile'} className={'mb-16'}/>
                        {
                            isEdit && <Image src={camera} alt="camera" className="absolute -mt-50 right-1 cursor-pointer"/>
                        }
                    </div>
                   
                    <p className={'text-24'}>Hello!</p>
                    <p className={'text-sp_pink text-32 -mt-6'}>{userData.name}</p>
                </article>
                <article className={'flex flex-col h-[calc(100%-340px)] overflow-y-scroll scroll-hidden gap-y-20'}>
                    <div>
                        <div className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                            <span className="text-[#BBB]"> 선호 음식</span>
                            <input readOnly={!isEdit}
                                   onChange={e => handleInputChange('preferFood', e.target.value)}
                                   className={`${inputStyle}`} value={userData.preferFood}/>
                        </div>
                        {isEdit && <p className="mt-9 text-12 text-[#BBB]">최대 음식 3개만 작성해주세요!</p>}
                    </div>
                    
                    <div>
                        <div className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                            <span className="text-[#BBB]">비선호 음식</span>
                            <input readOnly={!isEdit}
                                   onChange={e => handleInputChange('unpreferFood', e.target.value)}
                                   className={`${inputStyle}`} value={userData.unpreferFood}/>
                        </div>
                        {isEdit && <p className="mt-9 text-12 text-[#BBB]">최대 음식 3개만 작성해주세요!</p>}
                    </div>
                    
                    
                    <div className={`${isEdit ? editMode : nonEditMode} w-full flex justify-between items-center`}>
                        <span className="text-[#BBB]">맵난이도</span>
                        <span className={'text-18 flex gap-x-2'}>
                            {[1, 2, 3, 4, 5].map(level => (
                                <div
                                    key={level}
                                    onClick={isEdit ? () => handleSpicyLevelChange(level) : undefined}
                                >
                                    <Image
                                        src={level <= userData.spicyLevel ? heartFull : heartEmpty}
                                        alt={`Heart ${level}`}
                                        className={isEdit ? 'cursor-pointer' : ''}
                                    />
                                </div>
                            ))}
                        </span>
                    </div>
                    
                    <div className={`w-full flex flex-col ${isEdit ? editMode : nonEditMode}`}>
                        <p className={'mb-16 text-[#BBB]'}>내 소개</p>
                        <textarea readOnly={!isEdit}
                                  onChange={e => handleInputChange('introduce', e.target.value)}
                                  className={`h-110 w-full resize-none outline-none bg-transparent`}
                                  value={userData.introduce}/>
                    </div>
                </article>
            </section>
        </main>
    );
}

const mockData = {
    id: 1,
    name: 'Rooney',
    preferFood: '마라탕, 김치찌개, 탕수육',
    unpreferFood: '쌀국수,월남쌈,고수',
    spicyLevel: 3,
    introduce: '안녕하세요.\n저는 맵쌉고수이지만 매운거 별로 안좋아합니다.\n감사합니다^^',
}