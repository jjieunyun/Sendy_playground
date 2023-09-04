'use Client'
import setting from '@image/setting 1.svg'
import iconNew from '@image/icon_new.svg'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import close from '@image/close.svg'


export default function SideBar ({closeSidebar}:{closeSidebar:()=>void}){
    const router = useRouter()
    
    const goToAccount = () => {
        router.push('/my-account')
        closeSidebar()
    }
    
    return(
        <section className="w-full h-full bg-[#1A1A1A] pt-44">
            <div className="flex justify-end px-36">
                <Image src={close} alt="close" onClick={closeSidebar} className="cursor-pointer"/>
            </div>
            <article className="w-full px-24 flex justify-between">
                <div className="flex items-center gap-x-16">
                    <div className="w-80 h-80 bg-sp_pink rounded-full"></div>
                    <div>
                        <span className="text-24">hello! </span>
                        <span className="text-32 text-sp_pink">Diva</span>
                    </div>
                </div>
                <Image src={setting} alt="setting" onClick={goToAccount} className="cursor-pointer"/>
            </article>
        </section>
    )
}