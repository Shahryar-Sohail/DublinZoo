import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import { motion } from "motion/react"

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,        // show next/prev arrows
        autoplay: true,      // auto slide
        autoplaySpeed: 200, // 2 seconds
    };

    return (
        <div className='mb-0'>
            <div className="relative z-1 -mt-[128px] slider-container  mx-auto border max-w-screen overflow-hidden">
                <Slider {...settings}>
                    <div> <img className='h-[600px] object-cover w-full' src={img1} /> </div>
                    <div> <img className='h-[600px] object-cover w-full' src={img2} /></div>
                    <div> <img className='h-[600px] object-cover w-full' src={img3} /></div>
                </Slider>
            </div>
            <motion.div
                whileHover={{ scale: 0.95 }}
                // whileTap={{ scale: 1.5 }}
               
            >
                <div className='-mb-8'>
                    <button className="btn btn-solid btn-warning px-10 py-8 relative z-2 -mt-[500px] ms-10 text-xl">
                     Book Wild Lights Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
