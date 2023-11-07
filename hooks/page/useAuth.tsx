import {useState} from "react";
import {useRouter} from  "next/navigation";
import {ContextState, useUserContext} from "@context/UserContext";
import apiClientHandler from "@lib/apiClientHandler";
import {onUserSignOut,onUserSignIn} from "../../api/Auth";

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


    const onUserLogin = async({data}: { data: any }) => {
        setAuthState(() => ({
            loading: false,
            isLogin: false,
            error: undefined,
        }));
      const res =  await apiClientHandler(onUserSignIn({id: data.accessId, password: data.password}))
          if(res?.result){
              setAuthState((prev) => ({...prev, isLogin: true, loading: false}))
              getUserInfo()
                router.push('/main')
          }else {
              alert(res.message)
              setAuthState((prev) => ({...prev, error: res.message, loading: false}))
          }
    }


    const onUserLogout = async(): Promise<void> => {
        return await apiClientHandler(onUserSignOut()).then(() => setUserInfo({
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