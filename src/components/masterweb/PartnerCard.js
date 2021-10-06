import React from "react";

const PartnerCard = ({ img, name, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className='border p-4 m-2 shadow border-gray-300 rounded-md transition duration-200 md:hover:bg-blue md:hover:text-gray-50 md:hover:shadow-lg'>
                <img src={img} alt={name} className='object-fill' />
            </div>
        </a>
    )
}

export default PartnerCard;
