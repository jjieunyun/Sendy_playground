import Image from "next/image";
import phone from '@image/phone_2.svg'

export default function MyAccount() {
    return (
        <main className="pb-64">
            <Image src={phone} alt="phone" className="h-full"/>
        </main>
    );
}