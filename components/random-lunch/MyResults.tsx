import body from '@image/random-lunch/front-bus-body.svg';
import wheel from '@image/random-lunch/front-bus-tire.svg';
import eyes from '@image/random-lunch/eyes.svg'
import Image from 'next/image';
import useUpDown from '@hooks/useUpDown';
import Person from "@components/random-lunch/Person";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useSequentialFadeIn from "@hooks/useSequentialFadeIn";

const personData = [
    { name: "다엘", gender: "MAN", order:0 },
    { name: "디바", gender: "WOMAN", order:1 },
    { name: "다이몬도", gender: "MAN", order:2 },
    { name: "ㅈㅔ인", gender: "WOMAN", order:3 },
    { name: "미소", gender: "WOMAN", order:4 },
];

export default function MyResults() {
    const { isFold } = useUpDown();
    const [text, setText] = useState('');
    const fullText = '당신과 점심을 함께 할 운명의 상대는...?';
    const router = useRouter()
    const {visibleNum} = useSequentialFadeIn({maxNum:personData.length})


    const imageStyle = {
        transform: `translateY(${isFold ? 0 : '-8px'})`,
        transition: 'transform',
    };

    const textStyle = {
        transform: `translateY(${isFold ? 0 : '-10px'})`,
        transition: 'transform 1s ease-in-out  ',
    }



    const onClick = () => {
        router.push('/random-lunch/result')
    }

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
        <section className="w-full h-screen">
            <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 z-0"></div>
            <article className="px-60 py-26 bg-[#000000] h-97 w-824 flex justify-center items-center mt-144 m-auto">
                <p className="text-24">{text}</p>
            </article>
            
            <article className=" flex flex-col items-center absolute -bottom-[150px] z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div style={imageStyle}>
                    <Image
                        src={body}
                        width={456}
                        alt=""
                        className="w-456 h-auto"
                    />
                </div>
                <Image
                    src={wheel}
                    width={386}
                    alt="wheel"
                    className="-mt-45 -z-[1] w-386 h-auto"
                />
            </article>

            <article className="absolute bottom-120 w-full">
                <div className='flex justify-center gap-x-[500px]'>
                    <div className={'flex gap-x-20 w-400 justify-start'}>
                        {personData
                            .filter((person, index) => index % 2 === 0)
                            .map((person, index) => (
                                <Person
                                    key={index}
                                    name={person.name}
                                    gender={person.gender}
                                    className={`transition-opacity ease-in-out duration-100 ${person.order < visibleNum? person.order === visibleNum &&  'opacity-100':'opacity-0'}`}
                                />
                            ))}
                    </div>
                    <div className={'flex gap-x-20 w-400 justify-start'}>
                        {personData
                            .filter((person, index) => index % 2 !== 0)
                            .map((person, index) => (
                                <Person
                                    key={index}
                                    name={person.name}
                                    gender={person.gender}
                                    className={`transition-opacity ease-in-out duration-100 ${person.order < visibleNum? person.order === visibleNum && 'opacity-100':'opacity-0'}`}
                                />
                            ))}
                    </div>
                </div>
            </article>


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
        </section>
    );
}
