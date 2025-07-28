import React from 'react'
import bg from '../assets/cat2.png'
import { motion } from "framer-motion";

const Section5 = () => {
    return (
        <div>
            <div
                className="h-[60vh] bg-cover bg-center bg-gray-200 items-center flex flex-col sm:flex-row my-5"
                style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="card w-auto sm:w-96 bg-base-100 rounded-[0px] card-lg shadow-sm bg-white mx-10 py-10 mt-10">
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title text-green-400 text-4xl font-bold">Animal In Focus</h2>
                        <p className='text-gray-500 font-bold'>
                            Snow Leopard</p>
                        <button className="btn btn-secondary px-10">Find out More</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section5
