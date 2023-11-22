import { useState, useCallback } from 'react';

const useToast = () => {
    const [isToastVisible, setToastVisible] = useState(false);
    const [message, setMessage] = useState(null);

    const showToast = useCallback(({msg}:{msg:any}) => {
        setMessage(msg);
        setToastVisible(true);

        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    }, []);

    const hideToast = useCallback(() => {
        setToastVisible(false);
    }, []);

    return { isToastVisible, message, showToast, hideToast };
};

export default useToast;
