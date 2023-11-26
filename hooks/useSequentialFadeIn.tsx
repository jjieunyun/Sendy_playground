import { useEffect, useState } from "react";

export default function useSequentialFadeIn({ maxNum, delay = 0 }: { maxNum: number, delay?: number }) {
    const [visibleNum, setVisibleNum] = useState(-1);

    useEffect(() => {
        if (!maxNum) return;

        const fadeInInterval = 500; // 각 컴포넌트가 나타나는 간격(ms)

        let timer: string | number | NodeJS.Timeout | undefined;

        // 초기 딜레이 후에 순차적으로 표시 시작
        const initialDelayTimer = setTimeout(() => {
            timer = setInterval(() => {
                setVisibleNum((prevNum) => {
                    if (prevNum < maxNum - 1) {
                        return prevNum + 1;
                    } else {
                        clearInterval(timer);
                        return prevNum;
                    }
                });
            }, fadeInInterval);
        }, delay);

        return () => {
            clearInterval(timer);
            clearTimeout(initialDelayTimer);
        };
    }, [maxNum, delay]);

    return { visibleNum };
}
