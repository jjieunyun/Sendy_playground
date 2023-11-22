import { useState, useCallback } from 'react';

const useModal = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, []);

    const hideModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    return { isModalVisible, showModal, hideModal };
};

export default useModal;
