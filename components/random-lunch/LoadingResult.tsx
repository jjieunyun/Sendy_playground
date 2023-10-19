import body from '@image/random-lunch/front-bus-body.svg';
import wheel from '@image/random-lunch/front-bus-tire.svg';
import Image from 'next/image';
import useUpDown from '@hooks/useUpDown';
import Person from "@components/random-lunch/Person";

export default function LoadingResult() {
    const { isFold } = useUpDown();
    
    // 이미지에 적용할 스타일 객체
    const imageStyle = {
        transform: `translateY(${isFold ? 0 : '-8px'})`,
        transition: 'transform',
    };
    
    return (
        <section className="w-full h-screen">
            <div className="h-150 w-full bg-[#8CFF9B] absolute bottom-0 z-0"></div>
            <article className="px-60 py-26 bg-[#000000] h-97 w-824 flex justify-center items-center mt-144 m-auto">
                <p className="text-24">당신과 점심을 함께 할 운명의 상대는...</p>
            </article>
            
            <div className=" flex flex-col items-center absolute -bottom-[150px] z-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
            </div>
           
            {/*<article className="">*/}
            {/*    <Person name="다엘" gender="MAN"/>*/}
            {/*</article>*/}
        </section>
    );
}
