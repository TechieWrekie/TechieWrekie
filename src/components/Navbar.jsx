import React from 'react'
import { FaTools } from "react-icons/fa";


function Navbar() {
    return (
        <>
            <div className=' border-b-[1px] border-slate-300  z-10 relative py-3'>
                <nav className=' w-full h-14 flex justify-between  px-4 md:px-5 items-center '>
                    <div className='cursor-pointer flex items-center'>
                        <div className='me-3 text-slate-700'>
                        <FaTools size="1.5em" />
                        </div>
                        <span className=' text-2xl text-purple-700 '> Techie</span>
                        <span className=' text-2xl text-purple-700 '>Wrekie</span>
                    </div>
                    <ul className='flex '>
                        <li className='mx-7 cursor-pointer text-md text-slate-900 font-normal'>Home</li>
                        <li className='mx-7 cursor-pointer text-md text-slate-900 font-normal'>About</li>
                        <li className='mx-7 cursor-pointer text-md text-slate-900 font-normal'>Contact Us</li>
                    </ul>
                    <div className='flex'>
                        <button className='mx-1 text-white text-sm block bg-purple-700 p-2 border-purple-700 border-1 rounded-lg hover:bg-purple-800 hover:border-purple-800 '>Login</button>
                        <button className='mx-1 text-white text-sm block bg-purple-700 p-2 border-purple-700 border-1 rounded-lg hover:bg-purple-800 hover:border-purple-800 '>SignUp</button>
                    </div>
                </nav>
            </div>
        </>


    )
}

export default Navbar
