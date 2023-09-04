"use client";

import hamburger from '@image/hamburger 1.svg'
import logo from '@image/sendyplayground-logo.svg'
import Image from "next/image";
import {useState} from "react";
import SideBar from "@components/common/SideBar";
import {useRouter} from "next/navigation";

export default function Header() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const router = useRouter()
    
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    
    const closeSidebar = () => {
        setSidebarVisible(false);
    };
    
    return (
        <div className="w-full h-full">
            <nav className="w-full flex justify-between px-24 pt-8">
                <Image src={logo} alt="logo" onClick={()=>router.push('/main')} className="cursor-pointer"/>
                <Image
                    src={hamburger}
                    alt="hamburger"
                    className="cursor-pointer"
                    onClick={toggleSidebar}
                />
            </nav>
            
            <div className={`fixed top-0 right-0 h-full bg-gray-900 transition-all duration-500 ease-in-out ${sidebarVisible ? 'w-440' : 'w-0'} overflow-hidden`}>
                <SideBar closeSidebar={closeSidebar}/>
            </div>
        </div>
    );
}