import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

const MobileMenu = () => {

    const [active, setActive] = useState("");

    const handleClick = (e) => {
        setActive(e.target.innerHTML);
    };

    return (
        <div className='w-full h-auto bg-black p-4 text-white'>
            <div className='flex flex-col items-start ml-5'>
                <NavItem
                    menuItem='home'
                    name='home'
                    active={active === "home"}
                    handleThisClick={handleClick}
                />
                <DropdownMenu
                    name='infographie'
                    active={active === "infographie"}
                    handleThisClick={handleClick}
                />
                <DropdownMenu
                    name='masterweb'
                    active={active === "masterweb"}
                    handleThisClick={handleClick}
                />
                <NavItem
                    menuItem='contact'
                    name='contact'
                    active={active === "contact"}
                    handleThisClick={handleClick}
                />
            </div>
        </div>
    )
}

export default MobileMenu;
