import React, { useContext } from 'react';
// import { Button, Card } from 'flowbite-react';
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

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();

    // axiosSecure.get(`/classdetails/${user.email}`).then(data => setClasses(data.data)).catch(error=>console.log(error))
    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classpage'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classpage`)
            console.log(res.data);
            return res.data
        }
    })
    const handleClassSeletion = () => {

    }
    return (


        <div>
            <h2>Classes</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {classes.map((classItem) => (
                    <div key={classItem._id}>
                        <Card sx={{ maxWidth: 345 }}>
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
                                    <Typography variant="h5" color="text.primary">
                                        Instructor: {classItem.instructorName}
                                    </Typography>
                                    <Typography variant="h5" color="text.primary">
                                        {classItem.availableSeats}
                                    </Typography>
                                    <Typography variant="h5" color="text.primary">
                                        {classItem.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;

{/* <Card
    imgAlt=""
    imgSrc=""
    className=''

>
    <img
        src={classItem.photoURL}
        alt=""

        className='max-w-[400px] max-h-[400px]'
    />

    <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">

            Course Name: {classItem.className}

        </h5>
        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">

            Instructor Name: {classItem.instructorName}

        </h5>

    </a>
    <div className="mb-5 mt-2.5 flex items-center">

        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-lg font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            <h3>
                Available Seats: {classItem.availableSeats}
            </h3>
        </span>
    </div>
    <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $ {classItem.price}
        </span>
        {/* <a
                                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                    href="#"
                                >
                                    <p>
                                        Add to cart
                                    </p>
                                // </a> */}
        // <Button onClick={handleClassSeletion} color="purple">
        //     Select
        // </Button>
//     </div>
// </Card> */}