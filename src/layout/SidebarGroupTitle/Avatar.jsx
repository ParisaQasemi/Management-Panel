import React from 'react';

const Avatar = ({name, imagePath}) => {
    return (
        <div className='w-full h-24 mb-3'>
            <span className='flex justify-center'>
                <img src={imagePath} className='w-16 h-16 border border-white bg-transparent rounded-full' alt="" />
            </span>
            <span className='flex justify-center font-bold py-2 text-white'>{name}</span>
        </div>
    );
}

export default Avatar;
