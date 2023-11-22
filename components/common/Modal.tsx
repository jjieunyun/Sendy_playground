import React from 'react';

const Modal = ({isVisible, children}: {
    isVisible: boolean,

    children: any
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            {children}
        </div>
    );
};

export default Modal;
