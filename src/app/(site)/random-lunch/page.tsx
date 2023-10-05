"use client";
import RandomLunchMain from "@components/random-lunch/RandomLunchMain";
import {Suspense} from "react";

async function getInitStatus() {
    // const res = await fetch(`https://...`, { cache: 'no-store' })
    // const haGroup = await res.json()
    return false
}


export default async function RandomLunchPage() {
    const hasGroup = await getInitStatus()

    return (
        <Suspense>
            <RandomLunchMain hasGroup={hasGroup}/>
        </Suspense>
    )
}
