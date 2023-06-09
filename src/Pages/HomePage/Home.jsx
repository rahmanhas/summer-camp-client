import React from 'react';
import banner from '../../assets/banne.webp'
import Banner from './Banner';



const Home = () => {
    return (
        <div className='mx-auto w-full max-w-screen-xl'>
            {/* <div className="bg-cover bg-center bg-no-repeat h-[100vh]" style={{ backgroundImage: `url(${banner})` }}>
                <h1></h1>
            </div> */}
            <Banner></Banner>
        </div>
    );
};

export default Home;