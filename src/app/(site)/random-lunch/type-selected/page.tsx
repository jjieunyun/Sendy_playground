"use client";

import React, { Suspense, useState, useEffect } from 'react';
import MyResult from '@components/random-lunch/MyResult';
import JoinNow from '@components/random-lunch/JoinNow';
import apiClientHandler from '@lib/apiClientHandler';
import { getMealResultStatus } from '@api/RandomLunch';
import { useRouter, useSearchParams } from 'next/navigation';
import BgClouds from "@components/random-lunch/BgClouds";

export default function TypeSelected() {
    const [hasGroup, setHasGroup] = useState(null); // 초기 상태를 null로 설정
    const randomLunchType = useSearchParams().get('randomLunchType');

    const getRandomGroupStatus = async () => {
            const res = await apiClientHandler(getMealResultStatus({ randomLunchType: randomLunchType as string }));
            if (res.result) {
                setHasGroup(res.data.isCreated);
            } else {
                alert('오류가 발생했습니다. 다엘 또는 제인에게 문의주세요!');
            }
        }


    useEffect(() => {
        getRandomGroupStatus()
    }, []);

    return (
        <Suspense fallback={<LoadingCompo/>}>
            {hasGroup !== null ? (
                hasGroup ? <MyResult/> : <JoinNow/>
            ) : (
                <LoadingCompo/>
            )}
        </Suspense>
    );
}

const LoadingCompo = () => {
    return(
        <main  className="max-w-[1500px] w-full h-full overflow-hidden z-0 bg-[url('/image/random-lunch/random_bg.svg')] bg-no-repeat bg-cover relative">
            <BgClouds/>
        </main>
    )
}