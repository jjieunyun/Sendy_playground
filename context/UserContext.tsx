import React, {useEffect, useState, createContext, useContext} from 'react';
import apiClientHandler from "@lib/apiClientHandler";
import Axios from "axios";

export interface UserState {
    id: number | undefined;
    name: string | undefined;
    permission: number | undefined;
}

export interface ContextState {
    userInfo: UserState | null;
    setUserInfo: React.Dispatch<React.SetStateAction<UserState | null>>;
    getUserInfo: () => void;
}

export const UserContext = createContext<ContextState | null>(null);

export function UserContextProvider({children, userState}:{children:React.ReactNode,userState:UserState}) {
    const [userInfo, setUserInfo] = useState<UserState | null>({
        id: undefined,
        name: undefined,
        permission: undefined,
    });

    const getUserInfo = async (): Promise<void> => {
        // const res = await apiClientHandler(Axios.get('/api/users/getUserInfo'))
        // if (res.data.data.result) {
        //     const {id, name, permission, token} = res.data
        //     setUserInfo({id, name, permission})
        // } else {
        //     setUserInfo({id: undefined, name: undefined, permission: undefined})
        // }
    }

    useEffect(() => {
        if (userState) {
            setUserInfo(userState)
        }
    }, [userState])


    return (
        <UserContext.Provider value={{setUserInfo, userInfo, getUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}




