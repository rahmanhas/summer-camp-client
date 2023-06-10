import React from 'react';
import Banner from './Banner';



const Home = () => {
    return (
        <div className='mx-auto w-full'>
            {/* <div className="bg-cover bg-center bg-no-repeat h-[100vh]" style={{ backgroundImage: `url(${banner})` }}>
                <h1></h1>
            </div> */}
            <Banner></Banner>
        </div>
    );
};

export default Home;