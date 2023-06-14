import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button } from 'flowbite-react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckOutForm';
import { Box, Typography, Modal } from '@mui/material';
import { Label, Table, TextInput } from 'flowbite-react';
import { getUserId } from '../../Hooks/auth';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(`${import.meta.env.Vite_Payment_Gateway_PK}`);

const MySelectedClasses = () => {
    const { user, role } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [userData, setUserData] = useState([])
    const [courseData, setCourseData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState({});
    const [currentUserID, setCurrentUserID] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user.email}`).then(res => res.json()).then(data => setCurrentUserID(data._id))
    }, [])


    const deleteCourseId = (id) => {
        console.log(id);
        axiosSecure
            .put(`/coursesinforemove/${user.email}`, {
                courseId: id,
            })
            .then(() => {

            })
            .catch((error) => {
                console.error('Error removing course ID:', error);
            });
    }

    useEffect(() => {
        axiosSecure.get(`/users/${user.email}`).then(response => {
            const courseIds = response.data.courseIds;
            if (Array.isArray(courseIds)) {
                setUserData(courseIds);
            }
        }).catch(error => console.log(error))
    }, [userData,])
    //console.log(userData);
    useEffect(() => {
        axiosSecure.get(`classpage`).then(data => setCourseData(data.data)).catch(error => console.log(error))

    }, [])
    const handleDeleteClass = (userEmail, classId) => {
        console.log(userEmail, classId);
        deleteCourseId(classId)

    }
    const handleClassPayment = (userEmail, classId) => {
        console.log(userEmail, classId);
        setShowModal(true);
        setSelectedClass(classId);
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedClass(null);

    };
    const handleSubmitPayment = (e) => {
        e.preventDefault()
        const currentCourse = {
            courseId: selectedClass?._id,
        }
        //add to paid course in user
        fetch(`${import.meta.env.VITE_SERVER_URL}/paidcoursesinfo/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentCourse),
        }).then(res => res.json())
        //add info of student in class db

        fetch(`${import.meta.env.VITE_SERVER_URL}/paidcoursesinfoinclasses/${selectedClass.instructorEmail}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ 'studentId': currentUserID }),
        }).then(res => res.json())
        // delete from selected courseIds
        deleteCourseId(selectedClass?._id)
        setShowModal(false);

    }
    return (
        <div>
            <h2 className='m-5 text-xl'>My selected courses</h2>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>
                        Photo
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Class Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Instructor Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        available Seats
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Delete Course
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Pay
                    </Table.HeadCell>

                </Table.Head>
                <Table.Body className="divide-y">
                    {userData.map((classItem) => {
                        const selectedCourse = courseData.find((course) => course._id === classItem);
                        return (
                            <Table.Row key={classItem}>
                                <Table.Cell>
                                    <img src={selectedCourse?.photoURL} alt="" />
                                </Table.Cell>
                                <Table.Cell>{selectedCourse?.className}</Table.Cell>
                                <Table.Cell>{selectedCourse?.instructorName}</Table.Cell>
                                <Table.Cell>{selectedCourse?.availableSeats}</Table.Cell>
                                <Table.Cell>{selectedCourse?.price}</Table.Cell>
                                <Table.Cell><Button className='' onClick={() => handleDeleteClass(user?.email, classItem)} color="failure">Delete</Button></Table.Cell>
                                <Table.Cell><Button className='' onClick={() => handleClassPayment(user?.email, selectedCourse)} color="warning">Payment</Button></Table.Cell>

                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>


            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='bg-grey-400'
            >
                <Box
                    sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, pt: 2, px: 4, pb: 3,
                    }}
                >
                    <Typography variant="h6" component="h2" id="modal-modal-title">
                        {`Proceed to Payment for ${selectedClass?.className}?`}
                    </Typography>

                    <form onSubmit={handleSubmitPayment} className="flex max-w-md flex-col gap-4">
                        {/* <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements> */}
                        <Button className='my-10' type="submit">
                            Pay
                        </Button>

                    </form>
                </Box>
            </Modal>

        </div>
    );
};

export default MySelectedClasses;