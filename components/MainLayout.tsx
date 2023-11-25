"use client"
import React, {useState, useEffect} from "react";
import {UserContextProvider, UserState} from "@context/UserContext";
import apiClientHandler from "@lib/apiClientHandler";
import {usePathname} from 'next/navigation'
import {getUserInfo} from "@api/Auth"

export default function MainLayout({children}: { children: React.ReactNode }) {
    const [_userInfo, _setUserInfo] = useState<UserState>({
        id: undefined,
        userName: undefined,
        teamName: undefined,
        userKoName: undefined,
    })
    const path = usePathname()

    const fetchUserInfo = async (): Promise<void> => {
        const res = await apiClientHandler(getUserInfo())

        if (res.result) {
            const {teamName, userName, userId, accessId} = res.data
            _setUserInfo({
                id: userId,
                userName: accessId,
                userKoName: userName,
                teamName: teamName
            })
        }
    }


    useEffect(() => {
        if (path === '/') return
        fetchUserInfo()
    }, [])


    return (
        <UserContextProvider userState={_userInfo} fetchUserInfo={fetchUserInfo}>
            {children}
        </UserContextProvider>
    )
}