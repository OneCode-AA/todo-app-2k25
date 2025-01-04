import { Flight, WatchTwoTone } from '@mui/icons-material'
import React from 'react'

function Header() {
  return (
   <header className='sm:text-center text-3xl flex justify-center items-center w-[30vw] gap-[12px] p-[42px]'>
    <h1 className=" flex justify-start items-center">
    <span className="flex items-center">My<Flight className='mx-3'/></span> <span className="flex items-center">T<WatchTwoTone/></span>Do
    </h1>

   </header>
  )
}

export default Header