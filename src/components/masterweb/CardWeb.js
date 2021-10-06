import React from "react";

const CardWeb = ({ imgURL, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className='sm:hover:z-10'>
            <div className='flex-col my-4 w-full lg:w-full shadow-md rounded-xl transform transition duration-200 sm:hover:scale-125 cursor-pointer'>
                <div className='h-8 w-full p-1 flex content-start space-x-2 items-center bg-gradient-to-bl from-black to-master_blue rounded-t-xl'>
                    <div className='h-3 w-3  rounded-full bg-red-700 ' />
                    <div className='h-3 w-3 rounded-full bg-yellow ' />
                    <div className='h-3 w-3 rounded-full bg-green-600 ' />
                </div>
                <div className='w-full h-full bg-transparent'>
                    <img className='object-fill w-full h-full' src={imgURL} alt='Website' />
                </div>
            </div>
        </a>
    )
}

export default CardWeb;
