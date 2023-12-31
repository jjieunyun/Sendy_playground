import {useState} from "react";
import {useRouter} from  "next/navigation";
import {ContextState, useUserContext} from "@context/UserContext";
import apiClientHandler from "@lib/apiClientHandler";
import {onUserSignOut} from "@api/Auth";
import Axios from "axios";

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
    const {setUserInfo, fetchUserInfo} = useUserContext() as ContextState
    const router = useRouter()


    
    const onUserLogin = async({data}: { data: any }) => {
        setAuthState(() => ({
            loading: false,
            isLogin: false,
            error: undefined,
        }));
        
        try {
            const res = await Axios.post('/api/auth/onUserSignIn', {accessId: data.accessId, password: data.password});
            if (res.data.data.result) {
                setAuthState((prev) => ({...prev, isLogin: true, loading: false}));
                await fetchUserInfo()
                router.push('/main');
            } else {
                setAuthState((prev) => ({...prev, error: res.data.data.message, loading: false}));
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("로그인 중 오류가 발생했습니다.");
            setAuthState({isLogin:false, error: undefined, loading: false});
        }
    };



    const onUserLogout = async(): Promise<void> => {
        const res = await apiClientHandler(onUserSignOut())
        if(res.result){
            setUserInfo({
                    id: undefined,
                    userName: undefined,
                    teamName: undefined,
                    userKoName: undefined,
                    gender: undefined,
            })
            router.replace('/')
        }else {
            alert(res.message)
        }
    }

    const onUpdateState = (newState: any) => {
        setAuthState((prev) => ({...prev, ...newState}));
    }

    return {onUserLogin, onUpdateState, authState, onUserLogout};
}