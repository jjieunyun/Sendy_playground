export default function LoginInput({label, type='text'}:{label:string,type?:string}){
    return(
        <article className={'w-full'}>
            <p className={'text-white mb-8'}>{label}</p>
            <div className={'w-full border-1 border-sp_green'}>
                <input type={type} className={'w-full h-48 outline-none text-sp_pink py-16 px-8 text-18'}/>
            </div>

        </article>
    )
}