import React, { useContext } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button } from 'flowbite-react';
import { motion } from 'framer-motion';


const TopClasses = () => {
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
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext)
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classpage'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classpage`)
            console.log(res.data);
            return res.data
        }
    })
    const countMap = {};
    classes.forEach(obj => {
        const studentsIds = obj.studentsIds;
        countMap[obj.className] = studentsIds?.length;
    });
    classes.sort((a, b) => countMap[a.className] - countMap[b.className])
    const topSix = classes.slice(0, 6)
    return (
        <div>
            <h2 className='text-center text-6xl my-10 font-bold'>Top Classes</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {topSix.map((classItem) => (
                    <motion.div whileHover="hover" variants={cardVariants} key={classItem._id}>
                         <div className='relative' >
                        <img className='rounded-full h-[250px] w-[250px] mx-auto my-5' src={classItem.photoURL} alt="" />
                        <button className='absolute top-0 left-0 bottom-0  right-0 hover:text-black text-red-800 flex justify-center items-center text-3xl font-extrabold uppercase'>{classItem.className}</button>


                    </div>
                    </motion.div>
                   
                ))}
            </div>
        </div>
    );
};

export default TopClasses;