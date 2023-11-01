import LoginInput from "@components/login/LoginInput";
import PushButton from "@components/common/PushButton";
import {useRouter} from "next/navigation";
import useAuth from "@hooks/page/useAuth";

export default function LoginForm({handleTabChange, title}: {
    handleTabChange: (tab: any) => void,
    title: string
}) {
    const router = useRouter();
    const {onUserLogin, onUpdateState, authState: {error, loading, isLogin}, onUserLogout} = useAuth()

    const onLogin = () => {
        router.push('/main')
    }

    //관리자 인지 아닌지 알아야됨?
    const onSubmit = async (data: any) => {
        onUserLogin({
            data: {
                accessId: data.id,
                password: data.password,
            }
        })
    };

    return (
        <section className="flex flex-col justify-start items-center w-full">
            <p className={`text-18 ${title === '관리자' ? 'bg-sp_green text-sp_pink' : 'bg-sp_pink text-sp_green'} p-4 mb-30 w-90 flex justify-center`}>{title}용</p>

            <section className={'flex flex-col z-10 w-464 gap-y-24'}>
                <LoginInput label={'아이디'} theme={title === '관리자' ? 'pink' : 'green'}/>
                <LoginInput label={'비밀번호'} theme={title === '관리자' ? 'pink' : 'green'} type="password"/>
            </section>
            <section className="flex mt-36 w-464 justify-between">
                <PushButton label={'이전으로'} theme={title === '관리자' ? 'white_pink' : 'white_green'}
                            onClick={() => handleTabChange(null)}/>
                <PushButton label={'로그인'} onClick={onLogin} theme={title === '관리자' ? 'pink' : 'green'}/>
            </section>
        </section>
    )
}