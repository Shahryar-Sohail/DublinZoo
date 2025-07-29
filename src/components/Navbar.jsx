import React, { useRef, useState } from 'react'
import { motion } from "motion/react"
import logo from '../assets/logo.png'
import btn from '../assets/btn.png'
import Footer from './Footer'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (

        <div>
            <p className='text-xs sm:text-md text-white p-5 bg-red-600'>Please Note: The South American House is temporarily closed due to maintenance works. Visitors will not be able to access this habitat. We apologise for any inconvenience caused. To ensure a safe and enjoyable visit for all visitors, scooters are not permitted inside Dublin Zoo. Thank you for your understanding and cooperation. <span><a href='' className='italic underline cursor-pointer'>Find out more</a></span></p>

            <div className="navbar bg-black/20 relative z-10 shadow-sm text-white text-xs py-0 -mt-1 sm:mt-0 ">
                <div className="navbar-end sm:navbar-start w-full">
                    <div className="dropdown w-full flex flex-wrap justify-between items-center relative">
                        <div className='navbar-start'>
                            <img src={logo} className='w-24 h-12 lg:hidden' />
                        </div>

                        <li className='bg-cover bg-fit w-20 h-20 lg:hidden' style={{ backgroundImage: `url(${btn})` }}
                        >
                            <button></button>
                        </li>

                        <div tabIndex={0} onClick={() => setMenuOpen(true)} role="button" className="btn btn-ghost lg:hidden" >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        {menuOpen && (
                            <ul
                                tabIndex={0}
                                className="absolute top-full leftmenu menu-sm bg-green-500 text-white text-xl font-bold h-[80vh] overflow-y-scroll z-50 mt-2 w-full shadow border-none"
                            >
                                <li className='navbar-end text-red-600 pr-4'>
                                    <button className='btn btn-ghost' onClick={() => setMenuOpen(false)}>X</button>
                                </li>
                                <li className='border-b border-gray-600'><a>Home</a></li>
                                <li className='border-b border-gray-600'><a>WildLight</a></li>
                                <li className='border-b border-gray-600'><a>Your Visit</a></li>
                                <li className='border-b border-gray-600'><a>Conservation</a></li>
                                <li className='border-b border-gray-600'><a>Support</a></li>
                                <li className='border-b border-gray-600'><a>Private Events</a></li>
                                <li className='border-b border-gray-600'><a>Conversations</a></li>
                                <li className='border-b border-gray-600'><a>Gift Shop</a></li>
                                <li className='border-b border-gray-600'><a>Zoo News</a></li>
                                <li className='border-b border-gray-600'><a>About Us</a></li>
                                <li className='border-b border-gray-600'><a>Contact Us</a></li>

                                <div className='w-full lg:hidden'>
                                <footer className="footer flex sm:footer-horizontal bg-gray-700 text-base-content p-10 justify-around text-white">

                                    <nav>
                                        <a className="link link-hover">About us</a>
                                        <a className="link link-hover">Contact</a>
                                        <a className="link link-hover">Jobs</a>
                                        <a className="link link-hover">Press kit</a>
                                    </nav>
                                    <nav>
                                        <a className="link link-hover">Terms of use</a>
                                        <a className="link link-hover">Privacy policy</a>
                                        <a className="link link-hover">Cookie policy</a>
                                    </nav>
                                </footer>

                            </div>
                            </ul>
                        )}



                        <div className='w-full lg:hidden mt-1'>
                            <ul
                                tabIndex={0}
                                className="flex justify-center items-center gap-4 font-semibold text-lg cursor-pointer border-b-2 border-red-600">
                                <li><a>Your Visit</a><span className='mx-5 text-red-600 text-lg'>|</span></li>
                                <li><a>Conservation</a><span className='mx-5 text-red-600 text-lg'>|</span></li>
                                <li><a>Support </a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>WildLight</a></li>
                        <li><a>Private Events</a></li>
                        <li><a>Conversations</a></li>
                        <li><a>Gift Shop</a></li>
                        <li><a>Zoo News</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>


            </div>




            <div className="navbar relative z-10 shadow-sm text-white text-xs py-0 ">
                <div className="navbar-start mx-10 hidden lg:flex">
                    <img src={logo} className="w-40 h-14 object-contain " />
                </div>
                {/* <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm  bg-white text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Your Visit</a></li>
                            <li><a>Conservation</a></li>
                            <li>
                                <a>Support</a>
                                <ul className="p-2">
                                    <li><a>What U can do</a></li>
                                    <li><a>Partnership</a></li>
                                </ul>

                            </li>


                        </ul>
                    </div>

                </div> */}
                <div className="navbar-center hidden lg:flex mx-24 ">

                    <ul className="menu menu-horizontal px-1 items-center">
                        <li><a>Your Visit</a></li>
                        <li><a>Conservation</a></li>
                        <li>
                            <details>
                                <summary>Support</summary>
                                <ul className="p-2 bg-white text-black rounded-lg px-2 py-1">
                                    <li><a>What u can do</a></li>
                                    <li><a>Partnership</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className='bg-center bg-cover w-24 h-24' style={{ backgroundImage: `url(${btn})` }}
                        >
                            <button></button>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navbar
