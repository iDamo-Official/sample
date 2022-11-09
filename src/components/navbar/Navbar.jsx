import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

import logo from '../../assets/img/logo/logo.png'

import { Menu, Transition } from '@headlessui/react'

import { MenuItems } from  './MenuItems'

const Navbar = () => {
  // if the navlink is active or not, give this style
  const activeLink = 'px-8 py-2 m-1 mr-2 bg-[#FEA803] text-white rounded-full transition-all '
  const normalLink = 'px-8 py-2 m-1 mr-2 text-black bg-transparent hover:transition-all ease-in-out delay-100 duration-500 hover:bg-[#E8E6E6] hover:text-black rounded-full'

  // handle menu button click
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)

  return (
    <div className='w-screen h-[100px] z-10 bg-slate-50 fixed drop-shadow-lg'>
      {/* start normal navbar */}
      <div className="container mx-auto px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <NavLink to={"/"} ><img src={logo} alt="logo" className='w-full'/></NavLink>
        </div>

        <div className=''>
          <ul className='hidden md:flex'>
            {MenuItems.map((item) => {
              return (
                <NavLink to={item.url} className={({ isActive }) => isActive ? activeLink:normalLink}>
                  {item.title}
                </NavLink>
              )
            })}
          </ul>
        </div>

        <div className="hidden md:flex">
          <div className='mx-2 m-auto text-gray-600'>
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <form method="get" action="#" class="relative z-50">
                <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                  </svg>
                </button>
                <input type="search" name="search" id="search" class="block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out hover:bg-slate-50" placeholder="Search" />
              </form>
            </div>
          </div>

          <div className='my-auto'>
            <button className='mx-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <button className='px-6 py-2
                           bg-[#FEA803]
                           text-white
                           border-2 border-black
                           transition-all
                           hover:bg-[#F7931E] hover:text-white
                           rounded-lg
                           '>Launch App</button>
        </div>

        <Menu as="div" className="relative inline-block">
          <div>
            <Menu.Button className='md:hidden bg-[#FEA803] border-2 border-black rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' onClick={handleClick}>
              {!nav ? <Bars3Icon className='w-8 '/> : <XMarkIcon className='w-8 ' />}
            </Menu.Button>
          </div>
          
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >

            

              {/* start drop down menu */}
            <Menu.Items className={!nav ? 'hidden' : 'absolute right-0 mt-2 sm:w-[80vw] w-[80vw] origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:hidden'}>
              {MenuItems.map((item) => {
                return (
                  <Menu.Item>
                    <NavLink to={item.url} onClick={handleClose} className='flex p-5 py-2 border-b-2  border-zinc-300 w-full'>
                      {item.title}
                    </NavLink>
                  </Menu.Item>
                )
              })}

              
              <Menu.Item as="div" className='mx-2 mt-2 flex pt-3'>
                <div class="max-w-lg w-full lg:max-w-xs text-gray-600">
                  <label for="search" class="sr-only">Search</label>
                  <form method="get" action="#" class="relative z-50">
                    <button type="submit" id="searchsubmit" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                    <input type="search" name="search" id="search" class="block w-full pl-10 pr-3 py-2 border-2 border-black rounded-md leading-5 bg-white text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" />
                  </form>
                </div>
                <button className='mx-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                  </svg>
                </button>
              </Menu.Item>
              

              <Menu.Item as="div" className='mx-2 mt-2 pb-5'>
                <button className='py-1.5 max-w-lg w-full lg:max-w-xs
                                bg-[#FEA803]
                                text-white
                                border-2 border-black
                                hover:bg-[#F7931E] hover:text-white
                                rounded-lg
                                '>Launch App</button>
              </Menu.Item>
            </Menu.Items>
            {/* end drop down menu */}
          </Transition>
        </Menu>
        
      </div>
      {/* end normal navbar */}

    </div>
  )
}

export default Navbar