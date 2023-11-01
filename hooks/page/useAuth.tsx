import {useState} from "react";
import {useRouter} from  "next/navigation";
import {ContextState, useUserContext} from "@context/UserContext";
import Axios from "axios";
import apiClientHandler from "@lib/apiClientHandler";

interface AuthState {
    loading: boolean;
    isLogin?: boolean;
    error?: object;
}

export default function useAuth() {
    const [authState, setAuthState] = useState<AuthState>({
        loading: false,
        isLogin: false,
        error: undefined,
    });
    const {setUserInfo, getUserInfo} = useUserContext() as ContextState
    const router = useRouter()


    function onUserLogin({data}: { data: any }) {
        setAuthState(() => ({
            loading: false,
            isLogin: false,
            error: undefined,
        }));
        Axios.post('/api/users/login', data)
            .then((res) => {
                setAuthState((prev) => ({...prev, isLogin: true, loading: false}))
                getUserInfo()
            })
            .then(() => {
                router.push('/dashboard')
            })
            .catch((error) => {
                setAuthState((prev) => ({...prev, error: error.response.data.message}))
            });
    }


    function onUserLogout(): Promise<void> {
        return apiClientHandler(Axios.get('/api/users/logout')).then(() => setUserInfo({
            id: undefined,
            name: undefined,
            permission: undefined,
        }))
    }

    const onUpdateState = (newState: any) => {
        setAuthState((prev) => ({...prev, ...newState}));
    }

    return {onUserLogin, onUpdateState, authState, getUserInfo, onUserLogout};
}