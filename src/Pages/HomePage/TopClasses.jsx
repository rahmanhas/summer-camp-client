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


const TopClasses = () => {
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
    const topSix = classes.slice(11, 17)
    return (
        <div>
            <h2 className='text-center text-6xl my-10 font-bold'>Top Classes</h2>
            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {topSix.map((classItem) => (
                    <div className='relative' key={classItem._id}>
                        <img className='rounded-full ' src={classItem.photoURL} alt="" />
                        <h2 className='absolute top-0 left-0 bottom-0 shadow-lg right-0 text-red-800 flex justify-center items-center text-5xl font-extrabold uppercase'>{classItem.className}</h2>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopClasses;