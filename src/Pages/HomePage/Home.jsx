import React, { useState } from 'react';
import Banner from './Banner';
import TopClasses from './TopClasses';
import TopInstructors from './TopInstructors';
import ExtraSection from './ExtraSection';

const Home = () => {

    return (
        <div className='mx-auto w-full'>

            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopInstructors></TopInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;