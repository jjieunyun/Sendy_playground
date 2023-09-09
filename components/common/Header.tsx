"use client";
import hamburger from '@image/hamburger 1.svg'
import logo from '@image/sendyplayground-logo.svg'
import Image from "next/image";
import {useState,useEffect} from "react";
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
    
    useEffect(() => {
        const handleEscape = (event:any) => {
            if (event.keyCode === 27) {
                closeSidebar();
            }
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);
    
    return (
        <div className="w-full h-full relative z-10">
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out ${sidebarVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={closeSidebar}>
            </div>
            
            <nav className="w-full flex justify-between items-center px-24 py-8 z-20">
                <Image src={logo} alt="logo" onClick={()=>router.push('/main')} className="cursor-pointer h-full"/>
                <Image
                    src={hamburger}
                    alt="hamburger"
                    className="cursor-pointer"
                    onClick={toggleSidebar}
                />
            </nav>
            <div className={`fixed top-0 right-0 h-full bg-gray-900 transition-all duration-500 ease-in-out ${sidebarVisible ? 'w-440' : 'w-0'} overflow-hidden z-10`}>
                <div className="w-440 h-full">
                    <SideBar closeSidebar={closeSidebar}/>
                </div>
            </div>
        </div>
    );
}