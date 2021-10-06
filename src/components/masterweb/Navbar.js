import React, { useState } from 'react'
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu'
import DropdownMenu from './DropdownMenu'

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false)
  // Global
  const [active, setActive] = useState('')

  const handleClick = (e) => {
    setActive(e.target.innerHTML)
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className='h-16 w-full bg-black flex flex-row justify-between border-b border-gray-800'>
        {/* Logo */}
        <div className='w-32 h-16 p-2'>
          <span className='text-3xl font-extrabold text-white flex justify-center align-middle ml-5'>
            SAES
          </span>
        </div>

        {/* Navigation Items */}
        <ul className='md:flex flex-row w-full h-full text-white justify-center hidden'>
          <NavItem
            menuItem=''
            name='home'
            active={active === 'home'}
            handleThisClick={handleClick}
          />
          <NavItem
            menuItem='infographie'
            name='infographie'
            active={active === 'infographie'}
            handleThisClick={handleClick}
          />
          <NavItem
            menuItem='masterweb'
            name='masterweb'
            active={active === 'masterweb'}
            handleThisClick={handleClick}
          />
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className='m-2 md:hidden w-8 h-8 text-white'>
          <span
            className='cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <XIcon /> : <MenuAlt3Icon />}
          </span>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {openMenu && <MobileMenu />}
    </>
  )
}

export default Navbar
