import LoginInput from "@components/login/loginInput";

export default function LoginForm(){
    return(
        <section>
            <p className={'mt-36 text-24 text-sp_green bg-sp_pink p-4 mb-36'}>참여자용</p>

            <section className={'flex flex-col z-10 w-604 gap-y-24'}>
                <LoginInput label={'아이디'}/>
                <LoginInput label={'비밀번호'}/>
            </section>
        </section>
    )
}