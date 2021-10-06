import React, { useState } from "react";
import { BellIcon, ChevronDownIcon, ChevronUpIcon, CodeIcon, CogIcon } from "@heroicons/react/outline";
import DropdownItem from "./DropdownItem";
// import { Link } from "react-router-dom";

const DropdownMenu = ({ name, active, handleThisClick }) => {

    const [open, setOpen] = useState(false);
    
    const handleClick = (e) => {
        handleThisClick(e);
        setOpen(!open);
    }


    return (
        <>
            <div className='text-white relative'>
                <li className='flex p-4 cursor-pointer' onClick={ (e) => handleClick(e) }>
                    <div className='capitalize font-semibold tracking-wide leading-relaxed transition-all duration-100 hover:text-lg'>
                        {name}
                    </div>
                    <div className='flex justify-center pt-1.5 px-1'>
                        { (open & active) ? <ChevronUpIcon className='text-white w-4 h-4' /> : <ChevronDownIcon className='text-white w-4 h-4' />}
                    </div>
                </li>

                { active && open && 
                    (
                        <div className='border-2 shadow-md bg-black opacity-80 rounded-md border-gray-700 m-2 md:absolute md:z-50 md:w-600 md:-left-1/2 md:-translate-x-1/2 md:top-16 md:h-auto'>
                            <div className='flex flex-col p-2 md:grid md:grid-cols-2 space-y-3 space-x-4 text-white'>
                                <DropdownItem
                                    menuItem={name}
                                    menuSubItem='home'
                                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde obcaecati minus tenetur architecto quis. Amet.'
                                >
                                    <CodeIcon className='w-10 h-10 text-white' />
                                </DropdownItem>
                                
                                <DropdownItem
                                    menuItem={name}
                                    menuSubItem='about'
                                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde obcaecati minus tenetur architecto quis. Amet.'
                                >
                                    <BellIcon className='w-10 h-10 text-white' />
                                </DropdownItem>
                                
                                <DropdownItem
                                    menuItem={name}
                                    menuSubItem='service'
                                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde obcaecati minus tenetur architecto quis. Amet.'
                                >
                                    <CogIcon className='w-10 h-10 text-white' />
                                </DropdownItem>
                                
                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default DropdownMenu;
