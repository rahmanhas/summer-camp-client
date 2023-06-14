import React, { useContext, useState } from 'react';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Classes = () => {

    const { user, loading, role } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [selectedClass, setSelectedClass]= useState(null)

    
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classpage'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classpage`)
            console.log(res.data);
            return res.data
        }
    })
    const updateUserCourseData = (id)=>{
        const currentCourse = {
            courseId: id,
        }
        return fetch(`${import.meta.env.VITE_SERVER_URL}/coursesinfo/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentCourse),
        }).then(res => res.json())

    }
    const handleClassSelection = (classItem) => {
        console.log(classItem._id);
        if(!user){
            alert("Please Log In")
        }else{
            
            updateUserCourseData(classItem._id)
            alert("Check Dashboard")
        }
    }
    console.log(role);
    return (


        <div>
            <h2>Classes</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {classes.map((classItem) => (
                    <div className='' key={classItem._id}>
                        { classItem.status === "approved" && <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 400 }}
                                    component="img"
                                    height="400"
                                    image={classItem.photoURL}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {classItem.className}
                                    </Typography>
                                    <Typography variant="h4" color="text.primary">
                                        Instructor: {classItem.instructorName}
                                    </Typography>
                                    <Typography variant="h6" color="text.primary">
                                        Remaining Seats: {classItem.availableSeats}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        $ {classItem.price}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {classItem.status}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={()=>handleClassSelection(classItem) } size="large" color="primary" disabled={role === "admin" || role === "instructor" || classItem.availableSeats == 0}>
                                    Select
                                </Button>
                            </CardActions>
                        </Card>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;