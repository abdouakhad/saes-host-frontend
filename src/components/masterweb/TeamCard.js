import React from 'react'

const TeamCard = ({ name, title, img }) => {
    return (
        <div className='bg-gradient-to-r from-black to-master_blue flex text-white rounded-md shadow w-full relative my-8 lg:w-4/5 md:w-80 mx-auto'>
            <div className='p-3'>
                <h1 className='font-bold tracking-wide'>{name}</h1>
                <h3>{title}</h3>
            </div>
            <div className='absolute right-5 -top-1/3 h-28 w-28 rounded-md bg-transparent'>
                <img className='w-full h-full object-cover rounded-md' src={img} alt={name} />
            </div>
        </div>
    )
}

export default TeamCard;
