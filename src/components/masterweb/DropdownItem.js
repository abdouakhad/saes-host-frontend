import React from "react";
import { Link } from "react-router-dom";

const DropdownItem = (props) => {
    return (
        <div className='flex flex-row align-top space-x-4 text-white'>
            <div className=''>
            {props.children}
            </div>
            <div className='flex flex-col space-y-2'>
                <h3 className='font-semibold cursor-pointer text-lg pt-1'>
                    <Link to={`/${props.menuItem}/${props.menuSubItem}`}>
                        {props.menuSubItem}
                    </Link>
                </h3>
                <p className='text-sm font-medium'> {props.text} </p>
            </div>
        </div>
    )
}

export default DropdownItem;
