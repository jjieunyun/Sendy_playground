//prettier-ignore
interface PushButtonProps {
    label: string;
    onClick?: () => void;
    theme?: 'pink' | 'green' | 'white_green' | 'white_pink';
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
        buttonText: '',
    },
    white_green: {
        containerBg: 'bg-[#00C178]',
        buttonBg: 'bg-white',
        buttonText: '',
    },
    white_pink: {
        containerBg: 'bg-[#FF0099]',
        buttonBg: 'bg-white',
        buttonText: '',
    },
};

export default function PushButton({ label, onClick = () => {}, theme = 'pink' }: PushButtonProps) {
    const { containerBg, buttonBg, buttonText } = THEME_STYLES[theme];

    return (
        <div className={'w-296 h-68'}>
            <div className={`${containerBg} pl-2 pr-4 pt-2 pb-10 rounded-bl-2 rounded-br-2 cursor-pointer transform active:translate-y-1 active:mt-4 active:p-1 active:w-292 active:rounded-4`}>
                <button className={`w-290 h-56 ${buttonBg} ${buttonText} text-24 active:pl-10`} onClick={onClick}>
                    {label}
                </button>
            </div>
        </div>

    );
}