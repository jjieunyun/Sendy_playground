export default function CustomInput({label, type = 'text', theme, register, isError, labelColor = 'white'}: {
    label: string,
    type?: string,
    theme: any,
    register: any,
    isError?: boolean,
    labelColor?: 'white' | 'black'
}) {
    return (
        <article className={`w-full`}>
            <p className={`${isError? 'text-[#e73333]': labelColor === 'black' ? 'text-black' :'text-white'} mb-8`}>{label}</p>
            <div className={`w-full border-1 ${theme === 'green' ? 'border-sp_green' : 'border-sp_pink'}`}>
                <input
                    {...register}
                    autoComplete="off"
                    type={type} className={`w-full h-48 outline-none ${theme === 'green'?'text-sp_pink':'text-black'}  py-16 px-8 text-18`}/>
            </div>

        </article>
    )
}