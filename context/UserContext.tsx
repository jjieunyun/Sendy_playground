import React, {useEffect, useState, createContext, useContext} from 'react';

export interface UserState {
    id: number | undefined;
    userName: string | undefined;
    userKoName: string | undefined;
    teamName: "SERVICE" | "GA" | "BUSINESS" | "STRATEGY" | "PRODUCT" | undefined;
    gender : string | undefined;
}


export interface ContextState {
    userInfo: UserState | null;
    fetchUserInfo: () => Promise<void>;
    setUserInfo: React.Dispatch<React.SetStateAction<UserState | null>>;
}

export const UserContext = createContext<ContextState | null>(null);

export function UserContextProvider({children, fetchUserInfo, userState}: {
    children: React.ReactNode,
    userState: UserState,
    fetchUserInfo: () => Promise<void>
}) {
    const [userInfo, setUserInfo] = useState<UserState | null>({
        id: undefined,
        userName: undefined,
        userKoName: undefined,
        teamName: undefined,
        gender: undefined,
    });


    useEffect(() => {
        if (userState) {
            setUserInfo(userState)
        }
    }, [userState])


    return (
        <UserContext.Provider value={{setUserInfo, userInfo, fetchUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}




