import React from 'react'
import bg from '../assets/bg4.svg'
import bg1 from '../assets/bg.jpg'
import monkey from '../assets/monkey1.jpg'
import monkey1 from '../assets/monkey1.jpg'
import sparrow from '../assets/sparrow.jpg'
import { motion } from "framer-motion";

const Section7 = () => {
    return (
        <div>
            <div
                className=" w-full py-16 bg-stone-300"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='flex justify-around items-center w-full px-10'>
                    <h1 className='text-4xl font-bold text-transparent '>Zoo News</h1>
                    <h1 className='text-4xl font-bold text-gray-700'>Zoo News</h1>
                    <button className="btn btn-error text-white">All Zoo News</button>
                </div>


                <div className='w-full relative group mt-10 flex justify-center '>
                    <img src={bg1} alt="Zoo News" className='sm:w-[50%] ' />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-300 w-1/2 mx-auto" />

                    <div className="absolute right-5 top-40 hover:scale-105 transition duration-300 ease-in-out card-body w-96 h-64 bg-white shadow-4xl rounded-2xl">
                        <h2 className="card-title text-green-400 font-bold text-4xl">Wild Light Tickets on Sale Now</h2>
                        <p className="text-md text-gray-700">Something strange happening in dublin zoo Let's find out with our team...</p>
                        <p className="underline text-red-500 cursor-pointer">Read More</p>
                    </div>

                </div>



                <div className='flex justify-center gap-10 items-center flex-col sm:flex-row w-full px-10 mt-32 sm:mt-0'>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.65 }}
                    >
                        <div className="card bg-transparent w-96 shadow-sm items-center mt-5">
                            <figure>
                                <img
                                    src={monkey}
                                    alt="cat" />
                            </figure>

                            <div className="card-body w-80 -mt-10 bg-white">
                                <h2 className="card-title text-green-400 text-2xl">Animal Encyclopedia</h2>
                                <p className='text-md'>Find out more about the animal living here</p>
                                <div className="card-actions justify-end">
                                    <p className='underline cursor-pointer text-red-500'>Lets Go</p>
                                </div>
                                <div>
                                    <svg className="w-6 h-6 mt-5  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.65 }}
                    >
                        <div className="card bg-transparent w-96 shadow-sm items-center mt-5">
                            <figure>
                                <img
                                    src={sparrow}
                                    alt="cat" />
                            </figure>
                            <div className="card-body w-80 -mt-10 bg-white ">
                                <h2 className="card-title text-green-400 text-2xl">Animal Encyclopedia</h2>
                                <p className='text-md'>Find out more about the animal living here</p>
                                <div className="card-actions justify-end">
                                    <p className='underline cursor-pointer text-red-500'>Buy a gift</p>
                                </div>
                                <div>
                                    <svg className="w-6 h-6 mt-5  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.65 }}
                    >
                        <div className="card bg-transparent w-96 shadow-sm items-center mt-5">
                            <figure>
                                <img
                                    src={monkey1}
                                    alt="cat" />
                            </figure>
                            <div className="card-body w-80 -mt-10 bg-white ">
                                <h2 className="card-title text-green-400 text-2xl">Animal Encyclopedia</h2>
                                <p className='text-md'>Find out more about the animal living here</p>
                                <div className="card-actions justify-end">
                                    <p className='underline cursor-pointer text-red-500'>Adopt an Animal</p>
                                </div>
                                <div>
                                    <svg className="w-6 h-6 mt-5  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                </div>
            </div>
        </div>
    )
}

export default Section7
