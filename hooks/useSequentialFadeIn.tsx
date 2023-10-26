import {useEffect, useState} from "react";

export default function useSequentialFadeIn({maxNum}:{maxNum:number}) {
    const [visibleNum, setVisibleNum] = useState(0);

    useEffect(() => {
        if(!maxNum) return

        const fadeInInterval = 500; // 각 컴포넌트가 나타나는 간격(ms)

        const timer = setInterval(() => {
            if (visibleNum < maxNum) {
                setVisibleNum((prevCount) => prevCount + 1);
            } else {
                clearInterval(timer);
            }
        }, fadeInInterval);

        return () => {
            if (visibleNum < maxNum) {
                clearInterval(timer);
            }
        };
    }, [visibleNum,maxNum]);

    return{visibleNum}
}