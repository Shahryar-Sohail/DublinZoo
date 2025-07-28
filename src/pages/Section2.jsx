import React from 'react'
import bg from '../assets/bg.svg'
import elephant from '../assets/elephant.jpg'
import "../index.css"

const Section2 = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-center flex flex-col sm:flex-row scissor-top"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className=" p-6 w-full">
        <h1 className="text-4xl md:text-6xl font-bold">Live Webcams!</h1>
        <p className="text-xl md:text-2xl mt-4">
          See what the animals are up to right now
        </p>

        <img
          src={elephant}
          className="w-full h-auto max-h-[24rem] rounded-lg mt-6 object-cover"
          alt="Elephant"
        />
      </div>

      <div className='w-full grid justify-center items-start px-6'>

        <div className="card w-auto sm:w-96 bg-base-100 rounded-[0px] card-lg shadow-sm bg-green-800 ">
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-green-400">Opening Hours</h2>
            <p className='text-white'>
              Open daily from 9.30am – 6.00pm.</p>
            <p className='text-white'>
              African Plains closes at 5.30pm. Last admission is 5.00pm. PLEASE NOTE: The Zoo will open at 10:30am on July 26th, instead of the usual 9.30am.
            </p>
            <p className='text-white'>
              Save up to 15% by pre-booking your ticket.
            </p>
            <p className='text-white'>
              Click here to book your visit
            </p>

          </div>
        </div>

        <div className="card w-auto sm:w-96 bg-base-100 card-lg shadow-sm bg-stone-500 mt-10">
          <div className="card-body items-center text-center ">
            <h2 className="card-title text-white text-2xl">What's happening at Dublin Zoo</h2>
            <p className='text-white'>
              Open daily from 9.30am – 6.00pm.</p>
            <p className='text-white'>
              African Plains closes at 5.30pm. Last admission is 5.00pm. PLEASE NOTE: The Zoo will open at 10:30am on July 26th, instead of the usual 9.30am.
            </p>
            <p className='text-white'>
              Save up to 15% by pre-booking your ticket.
            </p>
            <p className='text-white'>
              Click here to book your visit
            </p>

            <div className='w-[99%] max-h-[300px] overflow-y-auto'>
              <div>
                <div className="card w-full bg-base-100 card-md shadow-sm mt-5">
                  <div className="card-body bg-stone-300 flex justify-center   py-1">
                    <h2 className="card-title text-black mx-auto ">KEEPER TALKS</h2>
                  </div>
                  <div className="card-body bg-green-800 text-white py-1 flex flex-row">
                    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                    </svg>
                    <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                  </div>
                  <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                </div>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
                <div className="card-body bg-green-800 text-white py-1 flex flex-row mt-5">
                  <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                  <h6 className="card-title text-green-400 mx-auto text-sm ">11:15am - Keeper Talks</h6>
                </div>
                <h2 className="card-title bg-green-800 w-full text-white flex justify-center text-xl">Amur Tiger Talks</h2>
              </div>
            </div>
            <h1 className='text-white underline cursor-pointer'>Full Events Calender -&gt;</h1>
          </div>
        </div>

      </div>
    </div>


  )
}

export default Section2
