import {useEffect, useState} from "react";

export default function useUpDown() {
    const [isFold, setIsFold] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFold((isFold)=>!isFold);
        }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return{isFold, setIsFold}
}