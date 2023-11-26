import CustomInput from "@components/login/CustomInput";
import PushButton from "@components/common/PushButton";
import {useRouter} from "next/navigation";
import useAuth from "@hooks/page/useAuth";
import {useForm} from "react-hook-form";
import {useEffect} from "react";

interface LoginForm {
    accessId: string;
    password: string;
}


export default function LoginForm({handleTabChange, title}: {
    handleTabChange: (tab: any) => void,
    title: string
}) {
    const router = useRouter();
    const {onUserLogin, authState: {error, loading}} = useAuth()
    const {register, handleSubmit, formState: {errors}} = useForm<LoginForm>()
    
    const onSubmit = async (data: any) => {
        await onUserLogin({
            data: {
                accessId: data.accessId,
                password: data.password,
            }
        })
    };
    
    const onInvalid = (data: any) => {
        console.log(data)
    }
    
    useEffect(() => {
        if(error){
            alert(error)
        }
    }, [error]);
    

    
    return (
        <section className="flex flex-col justify-start items-center w-full ">
            <p className={`text-18 ${title === '관리자' ? 'bg-sp_green text-sp_pink' : 'bg-sp_pink text-sp_green'} p-4 mb-30 w-90 flex justify-center`}>{title}용</p>
            
            <form
                onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <section className={'flex flex-col z-10 w-464 gap-y-24'}>
                    
                    <CustomInput label={'아이디'} theme={title === '관리자' ? 'pink' : 'green'} isError={errors?.accessId?.type === 'required'}
                                 register={register("accessId", {required: true,})}/>
                    <CustomInput label={'비밀번호'} theme={title === '관리자' ? 'pink' : 'green'} type="password"
                                 isError={errors?.password?.type === 'required'}
                                 register={register("password", {required: true,})}/>
                
                </section>
                <section className="flex mt-36 w-464 justify-between">
                    <PushButton label={'이전으로'} theme={title === '관리자' ? 'white_pink' : 'white_green'} type="button"
                                onClick={() => handleTabChange(null)}/>
                    <PushButton label={'로그인'} theme={title === '관리자' ? 'pink' : 'green'} type="submit"/>
                </section>
            </form>
        </section>
    )
}