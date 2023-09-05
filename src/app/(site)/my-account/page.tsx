import Image from "next/image";
import phone from '@image/phone_2.svg'
import pencil from '@image/account/ic-pencil.svg'
import saved from '@image/account/ic-saved.svg'
import profile from '@image/account/profile.svg'
import heartFull from '@image/account/heart_full.svg'
import heartEmpty from '@image/account/heart_empty.svg'

export default function MyAccount() {
    return (
        <main className="pb-64 relative">
            <Image src={phone} alt="phone" className="w-full h-full"/>
            <section className={'absolute top-0 w-full h-[calc(100%-64px)] pt-50 pb-149 pr-53 pl-70'}>
                <article>
                    <div className={'flex items-center w-full justify-end'}>
                        <span className={'text-14 mr-4 cursor-pointer'}>수정하기</span>
                        <Image src={pencil} alt={'pencil'} width={36} height={36} className={'cursor-pointer'}/>
                    </div>
                </article>
                <article className={'my-40 flex justify-center items-center flex-col w-full'}>
                    <Image src={profile} alt={'profile'} className={'mb-16'}/>
                    <p className={'text-24'}>Hello!</p>
                    <p className={'text-sp_pink text-32 -mt-6'}>Rooney</p>
                </article>
                <article className={'flex flex-col gap-y-20 h-[calc(100%-340px)] overflow-y-scroll scroll-hidden'}>
                    <div className={'w-full flex justify-between items-center'}>
                        <span>선호 음식</span>
                        <span className={'text-18'}>마라탕, 김치찌개, 탕수육</span>
                    </div>

                    <div className={'w-full flex justify-between items-center'}>
                        <span>비선호 음식</span>
                        <span className={'text-18'}>쌀국수,월남쌈,고수</span>
                    </div>

                    <div className={'w-full flex justify-between items-center'}>
                        <span>선호 음식</span>
                        <span className={'text-18'}>마라탕, 김치찌개, 탕수육</span>
                    </div>

                    <div className={'w-full flex justify-between items-center'}>
                        <span>맵난이도</span>
                        <span className={'text-18 flex gap-x-2'}>
                            <Image src={heartFull} alt={'heartFull'}/>
                            <Image src={heartEmpty} alt={'heartEmpty'}/>
                        </span>
                    </div>

                    <div className={'w-full flex flex-col'}>
                        <p className={'mb-16'}>내 소개</p>
                        <textarea className={'h-110 w-full resize-none outline-none bg-transparent'}/>
                    </div>
                </article>
            </section>
        </main>
    );
}