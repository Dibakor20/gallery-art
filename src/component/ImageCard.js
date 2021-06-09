import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.webformatURL} alt="" className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                Photo {image.user}
                </div>
            </div>
            </div>
        </>
    );
};

export default ImageCard;