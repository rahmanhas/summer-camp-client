import React from 'react';
import { Button, Carousel } from 'flowbite-react';


import banner1 from '../../assets/banner-1.webp';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import banner4 from '../../assets/banner-4.jpg';
import banner5 from '../../assets/banner-5.jpg';


const Banner = () => {
    return (
        <div className='h-[70vh] relative'>
            <Carousel slideInterval={5000}>
                <img alt="..." src={banner1}/>
                <img alt="..." src={banner2}/>
                <img alt="..." src={banner3}/>
                <img alt="..." src={banner4}/>
                <img alt="..." src={banner5}/>



                {/* flex-col text-center mx-auto justify-center items-center */}
            </Carousel>
            <div className='absolute top-0 flex flex-col right-0 mx-auto text-right justify-end items-end p-6 '>
                <h2 className='text-3xl text-pink-300 font-bold py-3'>Welcome to DanceFlow Academy</h2>
                <h3 className='text-2xl text-pink-400 py-3'>Experience Rythm</h3>
                <button className='bg-pink-100 hover:bg-pink-800 p-2 md:p-4 rounded-lg text-sm md:text-lg'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;
