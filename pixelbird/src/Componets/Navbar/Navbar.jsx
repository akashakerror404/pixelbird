import React, { useState } from 'react'
import logo from '../../assets/pixel.png';
import 'font-awesome/css/font-awesome.min.css';


function Navbar() {

    const [toggle, setToggle] = useState(false)






    return (
        <>
            <div className='w-full md:h-[95px] h-[70px] bg-[#ebebed] md:pt-[51px] pt-[40px] '>
            <div className='md:max-w-[70%]  lg:max-w-[70%]  w-full h-full flex justify-between md:p-0 p-2 items-center m-auto bg-[#ebebed]'>

                    <div className="flex flex-shrink-0 ">
                        <img
                            className="h-11 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                    </div>

                    <div className='hidden md:flex'>
                        <ul className='flex gap-9'>
                            <li className='group relative px-4 py-3 text-md  font-Poppins cursor-pointer' >
                                HOME
                                <div className='absolute inset-x-0 bottom-0 h-1 bg-[#ff9202] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 rounded-full'></div>
                            </li>
                            <li className='group relative px-4 py-3  text-md font-Poppins cursor-pointer'>
                                PROJECT
                                <div className='absolute inset-x-0 bottom-0 h-1  bg-[#ff9202] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                            </li>

                            <li className='group relative px-4 py-3 text-md font-Poppins cursor-pointer' >
                                AWARDS
                                <div className='absolute inset-x-0 bottom-0 h-1  bg-[#ff9202] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></div>
                            </li>
                            <li className='group relative px-4 py-3   text-md font-Poppins bg-gradient-to-r from-orange-300 to-orange-200 rounded-xl cursor-pointer'>
                                CONTACT US
                            </li>
                        </ul>
                    </div>




                    <div className="md:hidden " onClick={() => setToggle(!toggle)} >
                        {toggle ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </div>

                </div>
                <div className={toggle ? 'absolute z-50 p-4 mt-4 bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <ul>
                        <li className='p-4 hover:bg-orange-200 text-center rounded-xl'  >HOME</li>
                        <li className='p-4 hover:bg-orange-200  text-center rounded-xl'> PROJECT</li>
                        <li className='p-4 hover:bg-orange-200 text-center rounded-xl'>AWARDS</li>
                        <li className='p-4 hover:bg-gray-100 text-md font-medium bg-gradient-to-r from-orange-300 to-orange-200 rounded-xl text-center'>CONTACT US</li>
                    </ul>
                </div>
            </div>

        </>

    )
}

export default Navbar
