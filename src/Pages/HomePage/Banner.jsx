import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1 from '../../assets/banner-1.webp';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import banner4 from '../../assets/banner-4.jpg';
import banner5 from '../../assets/banner-5.jpg';

const Banner = () => {
    return (
        <div className='relative text-center'>
            <Carousel autoPlay infiniteLoop interval={5000}>
                <div>
                    <img alt="..." src={banner1}  />
                </div>
                <div>
                    <img alt="..." src={banner2} />
                </div>
                <div>
                    <img alt="..." src={banner3} />
                </div>
                <div>
                    <img alt="..." src={banner4} />
                </div>
                <div>
                    <img alt="..." src={banner5} />
                </div>
            </Carousel>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-6'>
                <h2 className='text-3xl text-pink-300 font-bold py-3'>Welcome to DanceFlow Academy</h2>
                <h3 className='text-2xl text-pink-400 py-3'>Experience Rhythm</h3>
                <button className='bg-pink-100 hover:bg-pink-800 p-2 md:p-4 rounded-lg text-sm md:text-lg'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;
