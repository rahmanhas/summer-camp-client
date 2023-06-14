import axios from 'axios';
import { Button, Label, Table, TextInput } from 'flowbite-react';
import { Box, Typography, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const ManageClasses = () => {
    const [classes, setClasses] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState({});
    const [axiosSecure] = useAxiosSecure()
    const getData = () => {
        axiosSecure.get(`/classinfo`).then(data => setClasses(data.data)).catch(error=>console.log(error))
    }

    useEffect(() => {
        getData()
    }, [classes])

    const handleStatusApproved = (id) => {
        axiosSecure.put(`/classdata/${id}`, {
            status: 'approved',
        }).then(() => {
            alert("class is Approved")
            getData()
        })
            .catch((error) => console.error('Error updating class:', error));
    };
    const handleStatusDenied = (id) => {
        axiosSecure.put(`/classdata/${id}`, {
            status: 'denied',
        }
        ).then(() => {
            alert("class is Denied")
            getData()
        })
            .catch((error) => console.error('Error updating class:', error));
    };
    const handleOpenFeedbackModal = individualClass => {
        setSelectedClass(individualClass);
        setShowModal(true);
    }
    useEffect(() => {
        console.log(selectedClass);
    }, [selectedClass])
    
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        const fBack = e.target.feedback.value;
        console.log(fBack);
        setShowModal(false)
        axiosSecure.put(`/classfeedback/${selectedClass._id}`, {
            feedback: `${fBack}`,
        }).then(() => {
            alert("Feedback is updated")
            getData()
        }).catch((error) => console.error('Error updating class:', error));
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedClass(null);

    };

    return (
        <div>
            <h2 className='text-6xl text-center my-10'>Manage Classes</h2>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>
                        Class Image
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Class Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Instructor Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Instructor Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Available Seats
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Buttons
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {classes.map((individualClass) => (
                        <Table.Row key={individualClass._id}>
                            <Table.Cell>{
                                <img src={individualClass.photoURL} alt="" />
                            }</Table.Cell>
                            <Table.Cell>{individualClass.className}</Table.Cell>
                            <Table.Cell>{individualClass.instructorName}</Table.Cell>
                            <Table.Cell>{individualClass.instructorEmail}</Table.Cell>
                            <Table.Cell>{individualClass.price}</Table.Cell>
                            <Table.Cell>{individualClass.status}</Table.Cell>
                            <Table.Cell>
                                <div className='flex flex-col gap-2'>
                                    <Button disabled={individualClass.status === "approved" || individualClass.status === "denied"} onClick={() => handleStatusApproved(individualClass._id)} className='w-[100px]' color="success">Approve</Button>

                                    <Button disabled={individualClass.status === "approved" || individualClass.status === "denied"} onClick={() => handleStatusDenied(individualClass._id)} className='w-[100px]' color="failure">Deny</Button>

                                    <Button onClick={() => handleOpenFeedbackModal(individualClass)} className='w-[100px]' color="warning">Send Feedback</Button>
                                </div>

                            </Table.Cell>

                        </Table.Row>
                    ))}

                </Table.Body>
            </Table>
            {/* Modal  */}
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, pt: 2, px: 4, pb: 3,
                    }}
                >
                    <Typography variant="h6" component="h2" id="modal-modal-title">
                        {`Update ${selectedClass?.className} Class Info`}
                    </Typography>

                    <form onSubmit={handleSubmitFeedback} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="feedback"
                                    value="Give Feedback"
                                />
                            </div>
                            <TextInput
                                id="feedback"
                                name="feedback"
                                required
                                type="text"
                            />
                        </div>

                        <Button type="submit">
                            Submit
                        </Button>

                    </form>
                </Box>
            </Modal>

        </div>

    );
};

export default ManageClasses;
