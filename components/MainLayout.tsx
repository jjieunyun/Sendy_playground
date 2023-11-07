"use client"
import React,{useState} from "react";
import {UserContextProvider, UserState} from "@context/UserContext";

export default function MainLayout ({children}: { children: React.ReactNode}) {
    const [_userInfo, _setUserInfo] = useState<UserState>({
        id: undefined,
        name: undefined,
        permission: undefined,
    })

    // const getUserInfo = async (): Promise<void> => {
    //     const res = await apiClientHandler(Axios.get('/api/auth/getUserInfo'))
    //     if (res.result) {
    //         const {id, name, permission, token} = res.data
    //         _setUserInfo({id, name, permission, token})
    //     } else {
    //         _setUserInfo({id: undefined, name: undefined, permission: undefined, token: undefined})
    //     }
    // }
    //
    // useEffect(() => {
    //     if (router.pathname === '/') return
    //     getUserInfo()
    // }, [])


    return (
        <UserContextProvider userState={_userInfo}>
            {children}
        </UserContextProvider>
    )
}