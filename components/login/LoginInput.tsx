export default function LoginInput({label, type = 'text', theme}: {
    label: string,
    type?: string,
    theme: any
}) {
    return (
        <article className={'w-full'}>
            <p className={'text-white mb-8'}>{label}</p>
            <div className={`w-full border-1 ${theme === 'green' ? 'border-sp_green' : 'border-sp_pink'}`}>
                <input type={type} className={`w-full h-48 outline-none ${theme === 'green'?'text-sp_pink':'text-black'}  py-16 px-8 text-18`}/>
            </div>

        </article>
    )
}