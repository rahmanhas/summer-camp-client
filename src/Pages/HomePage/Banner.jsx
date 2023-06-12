// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// import banner1 from '../../assets/banner-1.webp';
// import banner2 from '../../assets/banner-2.jpg';
// import banner3 from '../../assets/banner-3.jpg';
// import banner4 from '../../assets/banner-4.jpg';
// import banner5 from '../../assets/banner-5.jpg';

// const Banner = () => {
//   const handleSlideChange = (e) => {
//     // handle slide change event
//     console.log('Slide changed:', e.item);
//   };

//   return (
//     <div className="h-screen w-1/2 relative">
//       <AliceCarousel
//         autoPlay
//         autoPlayInterval={5000}
//         buttonsDisabled={true} // disable built-in buttons
//         dotsDisabled={true} // disable pagination dots
//         onSlideChanged={handleSlideChange} // handle slide change event
//       >
//         <div>
//           <img alt="..." src={banner1} className="slide-image" />
//         </div>
//         <div>
//           <img alt="..." src={banner2} className="slide-image" />
//         </div>
//         <div>
//           <img alt="..." src={banner3} className="slide-image" />
//         </div>
//         <div>
//           <img alt="..." src={banner4} className="slide-image" />
//         </div>
//         <div>
//           <img alt="..." src={banner5} className="slide-image" />
//         </div>
//       </AliceCarousel>
//       <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-6">
//         <h2 className="text-3xl text-blue-300 font-bold py-3">Welcome to DanceFlow Academy</h2>
//         <h3 className="text-2xl text-blue-400 py-3">Experience Rhythm</h3>
//         <button className="bg-blue-100 hover:bg-blue-800 p-2 md:p-4 rounded-lg text-sm md:text-lg">Get Started</button>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import banner1 from '../../assets/banner-1.webp';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import banner4 from '../../assets/banner-4.jpg';
import banner5 from '../../assets/banner-5.jpg';


const responsive = {
    0: { items: 1 },
    // 568: { items: 2 },
    // 1024: { items: 3 },
};
const items = [
    <div className="item" data-value="1"><img alt="..." src={banner1} className="slide-image md:h-screen md:w-screen" /></div>,
    <div className="item" data-value="2"><img alt="..." src={banner2} className="slide-image md:h-screen md:w-screen" /></div>,
    <div className="item" data-value="2"><img alt="..." src={banner3} className="slide-image md:h-screen md:w-screen" /></div>,
    <div className="item" data-value="2"><img alt="..." src={banner4} className="slide-image md:h-screen md:w-screen" /></div>,
    <div className="item" data-value="2"><img alt="..." src={banner5} className="slide-image md:h-screen md:w-screen" /></div>,
];
const Banner = () => {
    return (
        <div className=''>

            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
            />

            <div className="absolute top-13 left-0 right-0 bottom-0 flex justify-center items-end">
                <div className="text-center ">
                    <h2 className="text-3xl font-extrabold py-3 text-white">
                        Welcome to DanceFlow Academy
                    </h2>
                    <h3 className="text-2xl py-3 font-bold text-white">Experience Rhythm</h3>
                    <button className="bg-blue-500 hover:bg-blue-800 hover:text-white p-2 md:p-4 rounded-lg text-sm md:text-lg">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Banner;