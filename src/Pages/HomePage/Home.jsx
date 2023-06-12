import React from 'react';
import Banner from './Banner';
import TopClasses from './TopClasses';
import TopInstructors from './TopInstructors';
import ExtraSection from './ExtraSection';



const Home = () => {
    return (
        <div className='mx-auto w-full'>
            {/* <div className="bg-cover bg-center bg-no-repeat h-[100vh]" style={{ backgroundImage: `url(${banner})` }}>
                <h1></h1>
            </div> */}
            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopInstructors></TopInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;