import React from 'react';
import { createPortal } from 'react-dom';

const ModalContent = ({children}) => {
    return createPortal(
        <div className="absolute z-50 top-0 w-full h-full bg-[#090e24]">
            {children}
        </div>,
        document.getElementById('modal-root')
    );
}

export default ModalContent;
