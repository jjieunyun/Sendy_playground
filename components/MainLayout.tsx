"use client"
import React,{useState, useEffect} from "react";
import {UserContextProvider, UserState} from "@context/UserContext";
import apiClientHandler from "@lib/apiClientHandler";
import { usePathname } from 'next/navigation'
import {getUserInfo} from "@api/Auth"

export default function MainLayout ({children}: { children: React.ReactNode}) {
    const [_userInfo, _setUserInfo] = useState<UserState>({
        id: undefined,
        userName: undefined,
        teamId: undefined,
    })
    const path = usePathname()

    const fetchUserInfo = async (): Promise<void> => {
        const res = await apiClientHandler(getUserInfo())

        if(res.result){
            const {teamId, userName, id} = res.data
            _setUserInfo({id, teamId, userName})
        }
    }


    useEffect(() => {
        if (path === '/') return
        fetchUserInfo()
    }, [])


    return (
        <UserContextProvider userState={_userInfo}>
            {children}
        </UserContextProvider>
    )
}