import React, {useEffect, useState, createContext, useContext} from 'react';

export interface UserState {
    id: number | undefined;
    userName: string | undefined;
    teamName: string | undefined;
}

export interface ContextState {
    userInfo: UserState | null;
    setUserInfo: React.Dispatch<React.SetStateAction<UserState | null>>;
}

export const UserContext = createContext<ContextState | null>(null);

export function UserContextProvider({children, userState}:{children:React.ReactNode,userState:UserState}) {
    const [userInfo, setUserInfo] = useState<UserState | null>({
        id: undefined,
        userName: undefined,
        teamName: undefined,
    });


    useEffect(() => {
        if (userState) {
            setUserInfo(userState)
        }
    }, [userState])


    return (
        <UserContext.Provider value={{setUserInfo, userInfo}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}




