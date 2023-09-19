import LoginInput from "@components/login/LoginInput";
import SendyButton from "@components/common/SendyButton";

export default function LoginForm(){
    return(
        <section className="flex flex-col justify-start items-center">
            <p className={'text-24 text-sp_green bg-sp_pink p-4 mb-36 w-120 flex justify-center'}>참여자용</p>

            <section className={'flex flex-col z-10 w-604 gap-y-24'}>
                <LoginInput label={'아이디'}/>
                <LoginInput label={'비밀번호'}/>
            </section>
            <section>
                <SendyButton label={'이전으로'} theme={'green'} onClick={()=>{}}/>
                <SendyButton label={'로그인'} theme={'green'} onClick={()=>{}}/>
            </section>
        </section>
    )
}