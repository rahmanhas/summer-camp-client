import React from 'react';


import banner from '../../assets/banne.webp';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.webp';
import banner4 from '../../assets/banner-4.jpg';
import { Button, Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <div className='h-[60vh]'>
            <Carousel slideInterval={5000}>
                <img
                    alt="..."
                    src={banner1}
                />
                <img
                    alt="..."
                    src={banner2}
                />
                <img
                    alt="..."
                    src={banner3}
                />
                <img
                    alt="..."
                    src={banner4}
                />
                <img
                    alt="..."
                    src={banner}
                />

            </Carousel>
            <div>
                <h1>Welcome to DanceFlow Academy</h1>
                <p>Join DanceFlow Academy this summer camp for an unforgettable experience of rhythm, movement, and artistic expression.</p>
                <Button color="purple"></Button>
            </div>
        </div>
    );
};

export default Banner;
