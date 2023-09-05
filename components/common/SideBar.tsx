'use Client'
import setting from '@image/setting 1.svg'
import iconNew from '@image/icon_new.svg'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import close from '@image/close.svg'
import {v4 as uuidv4} from "uuid"
import logout from '@image/logout.svg'

const menuData = [
    {
        id : uuidv4(),
        title : '경품추첨',
        path : '/main',
    },
    {
        id : uuidv4(),
        title : '랜덤식사',
        path : '/main',
    },
    {
        id : uuidv4(),
        title : '오늘의 생일',
        path : '/main',
    },
    {
        id : uuidv4(),
        title : '맛집리스트',
        path : '/main',
    },
]


export default function SideBar ({closeSidebar}:{closeSidebar:()=>void}){
    const router = useRouter()
    
    const goToAccount = () => {
        router.push('/my-account')
        closeSidebar()
    }
    
    return(
        <section className="w-full h-full bg-[#1A1A1A] pt-44 pb-24">
            <div className="flex w-full h-full flex-col justify-between">
                <div >
                    <div className="flex justify-end px-36">
                        <Image src={close} alt="close" onClick={closeSidebar} className="cursor-pointer"/>
                    </div>
                    <article className="w-full px-24 flex gap-x-8">
                        <div className="flex items-center gap-x-16">
                            <div className="w-80 h-80 bg-sp_pink rounded-full"></div>
                            <div>
                                <span className="text-24">hello! </span>
                                <span className="text-32 text-sp_pink">Rooney</span>
                            </div>
                        </div>
                        <Image src={setting} alt="setting" onClick={goToAccount} className="cursor-pointer"/>
                    </article>
                    <article>
                        {
                            menuData.map(item => {
                                return(
                                    <div key={item.id} className="flex items-center px-24 py-8 gap-x-8 cursor-pointer mt-40 hover:bg-[#2f2f2f] transition-all duration-200" onClick={()=>router.push(item.path)}>
                                        <span className="text-24">{item.title}</span>
                                        {
                                            item.title === '경품추첨' && <Image src={iconNew} alt="iconNew" className="ml-8"/>
                                        }
                                    </div>
                                )
                            })
                        }
                    </article>
                </div>
                <div className="w-full flex justify-end" onClick={()=> router.push('/')}>
                    <Image src={logout} alt="logout" className="mr-24"/>
                </div>
            </div>
        </section>
    )
}