import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AuthContext } from '../../Provider/AuthProvider';

const Instructor = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    const { data: instructors = [], refetch } = useQuery({
        queryKey: ['allusers'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/allusers`)
            console.log(res.data);
            return res.data
        }
    })
    return (
        <div>
            <h2 className='text-center text-6xl font-bold my-10'>Instructor List</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-auto text-center'>
                {instructors.map((item) => (
                    <div key={item._id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 280 }}
                                image={item.photoURL}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {item.name}
                                    
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                    {item.email}
                                </Typography>
                            </CardContent>

                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructor;