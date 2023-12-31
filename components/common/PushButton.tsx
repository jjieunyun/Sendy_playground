//prettier-ignore
interface PushButtonProps {
    label: string;
    onClick?: any;
    theme?: 'pink' | 'green' | 'white_green' | 'white_pink';
    type?: any;
}

const THEME_STYLES = {
    pink: {
        containerBg: 'bg-[#FF0099]',
        buttonBg: 'bg-sp_pink',
        buttonText: 'text-white',
    },
    green: {
        containerBg: 'bg-[#00C178]',
        buttonBg: 'bg-sp_green',
        buttonText: 'text-[#000000]',
    },
    white_green: {
        containerBg: 'bg-[#00C178]',
        buttonBg: 'bg-white',
        buttonText: 'text-[#000000]',
    },
    white_pink: {
        containerBg: 'bg-[#FF0099]',
        buttonBg: 'bg-white',
        buttonText: 'text-[#000000]',
    },
};

export default function PushButton({ label, onClick = () => {}, theme = 'pink' ,type ='button'}: PushButtonProps) {
    const { containerBg, buttonBg, buttonText } = THEME_STYLES[theme];

    return (
        <div className={'w-226 h-68'}>
            <div className={`${containerBg} pl-2 pr-4 pt-2 pb-8 rounded-bl-2 rounded-br-2 cursor-pointer transform active:translate-y-1 active:mt-4 active:p-1 active:w-222 active:rounded-4`}>
                <button
                    type={type}
                    className={`w-220 h-40 ${buttonBg} ${buttonText} text-16 active:pl-10`} onClick={onClick}>
                    {label}
                </button>
            </div>
        </div>

    );
}