import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { motion } from 'framer-motion';

const TopInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const [instructors,setInstructors] = useState([])

    useEffect(() => {
        axiosSecure.get(`instructors`).then(data => setInstructors(data.data)).catch(error => console.log(error))
    }, [])
   
    const cardVariants = {
        hover: {
          scale: 1.1,
          rotate: [0, 0, 20, -20, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
      };
    
    return (
        <div>
            <h2 className='text-center text-6xl my-10 font-bold'>Top Instructors</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {instructors.map((classItem) => (
                                        <motion.div whileHover="hover" variants={cardVariants} key={classItem._id}>
                     <div className='rounded-lg' key={classItem._id}>
                        <img className='h-[300px] w-[300] rounded-lg' src={classItem.photoURL} alt=""/>
                        <h2 className='shadow-lg right-0 text-blue-300 hover:text-black flex justify-center items-center text-5xl font-extrabold uppercase p-5'>{classItem.name}</h2>
                        {/* Render other class details as needed */}
                    </div>
                                   </motion.div>

                ))}
            </div>
        </div>
    );
};

export default TopInstructors;