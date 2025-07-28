import React from 'react'
import bg from '../assets/bg3.svg'
import bg1 from '../assets/bg.svg'
import Slider from "react-slick";
import { motion } from "framer-motion";


const Section4 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div
                className="bg-cover bg-center bg-gray-200 items-center flex flex-col sm:flex-row "
                style={{ backgroundImage: `url(${bg})` }}

            >
                <div className='sm:w-[50%] px-10'>
                    <h1 className='text-4xl  font-bold mt-10'>Zoo Reviews</h1>
                    <div className="slider-container  text-2xl">
                        <Slider {...settings} className=' w-[350px] sm:w-full'>
                            <div>
                                <h3>This zoo is so lovely! I genuinely enjoyed walking around, seeing all the wonderful animals. I don’t think I’ve ever been so close to a giraffe!</h3>
                                <h1 className='text-2xl font-bold'>~Linda</h1>
                            </div>
                            <div>
                                <h3>Small but very special collection of mostly endangered and rare species of animals (snow leopard, lowland gorilla) and all of them in specious settings. The whole zoo is like a garden as well, lots of plants and flowers and almost a botanical garden. Great time!</h3>
                                <h1 className='text-2xl font-bold'>~Harry</h1>
                            </div>
                            <div>
                                <h3>The TV programme The Zoo made me interested in Dublin Zoo again. Well it didn’t disappoint. You can spend the whole day there. It compares very well with London or Berlin. It is so well kept. Staff excellent. And the animals…Well isn’t that why we go?</h3>
                                <h1 className='text-2xl font-bold'>~Jhon</h1>
                            </div>

                        </Slider>
                    </div>
                </div>

                <div className='flex justify-between items-center flex-col w-full px-10 cursor-pointer'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.65 }}
                    >
                        <div
                            className="h-60 bg-cover bg-center bg-green-500 items-center flex mt-10"
                            style={{ backgroundImage: `url(${bg1})` }}

                        >
                            <div className="card-body w-80 ">
                                <h2 className="card-title text-white text-2xl font-bold">Conservation In Action</h2>
                                <p className='text-md text-white'>See what's on the discovery</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.65 }}
                    >
                        <div
                            className="h-60 bg-cover bg-center bg-red-500 items-center flex my-10 cursor-pointer"
                            style={{ backgroundImage: `url(${bg1})` }}

                        >
                            <div className="card-body w-80 ">
                                <h2 className="card-title text-white text-2xl font-bold">Conservation In Action</h2>
                                <p className='text-md text-white'>See what's on the discovery</p>
                            </div>
                        </div>
                    </motion.div>




                </div>

            </div>
        </div>
    )
}

export default Section4
