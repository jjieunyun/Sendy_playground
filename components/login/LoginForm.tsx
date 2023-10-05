import LoginInput from "@components/login/LoginInput";
import PushButton from "@components/common/PushButton";
import {useRouter} from "next/navigation";

export default function LoginForm({handleTabChange}: {handleTabChange: (tab: any) => void}){
    const router = useRouter();
    
    const onLogin = () => {
        router.push('/main')
    }
    
    return(
        <section className="flex flex-col justify-start items-center w-full">
            <p className={'text-24 text-sp_green bg-sp_pink p-4 mb-36 w-120 flex justify-center'}>참여자용</p>

            <section className={'flex flex-col z-10 w-604 gap-y-24'}>
                <LoginInput label={'아이디'}/>
                <LoginInput label={'비밀번호'} type="password"/>
            </section>
            <section className="flex mt-72  gap-x-24">
                <PushButton label={'이전으로'} theme={'white_green'} onClick={()=>handleTabChange(null)}/>
                <PushButton label={'로그인'} theme={'green'} onClick={onLogin}/>
            </section>
        </section>
    )
}