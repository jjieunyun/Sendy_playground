export default function MainButton({ label, onClick = () => {}, theme = 'pink'}
                                   : { label: string, onClick?: () => void, theme?: 'pink' | 'green' }) {
    return (
        <button className={`w-[312px] h-54 font-neo ${theme === 'pink' ? 'bg-sp_pink text-white':'bg-sp_green'}`}>
            {label}
        </button>
    );
}
