import React from 'react'

const TestimonialCard = ({ img, text, name, company }) => {
    return (
        <div className='relative h-full w-full max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-tr from-black rounded-lg shadow-md to-master_blue p-6 mt-16 mb-8 mx-auto md:transform md:-rotate-3 md:transition duration-200 md:hover:rotate-0 cursor-pointer'>
            <div className='absolute -top-10 -right-10 ring-4 ring-offset-4 ring-offset-gray-300 rounded-full w-20 h-20'>
                <img src={img} alt={name} className='object-cover rounded-full w-full h-full' />
            </div>
            <div className=' text-lg md:text-xl font-semibold text-gray-200'>
                <h1 className=''>{name}</h1>
                <h3 className='pl-4'>{company}</h3>
                <blockquote className='tracking-wide font-normal leading-8 py-2 text-gray-50'>
                    {text}
                </blockquote>
            </div>
        </div>
    )
}

export default TestimonialCard;
