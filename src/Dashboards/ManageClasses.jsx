import axios from 'axios';
import { Button, Label, Table, TextInput } from 'flowbite-react';
import { Box, Typography, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { becomeApproved } from '../Utility/auth';

const ManageClasses = () => {
    const [classes, setClasses] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState({});


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/classinfo`)
            .then(data => {
                console.log(data.data);
                setClasses(data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])


    const handleStatusApproved = (id) => {
        axios.put(`${import.meta.env.VITE_SERVER_URL}/classdata/${id}`, {
            status: 'approved',
        }).then(() => {
            alert("class is Approved")
            fetch(`${import.meta.env.VITE_SERVER_URL}/classinfo`)
                .then((res) => res.json())
                .then((data) => setClasses(data));
        })
            .catch((error) => console.error('Error updating class:', error));
    };
    const handleStatusDenied = (id) => {
        axios.put(`${import.meta.env.VITE_SERVER_URL}/classdata/${id}`, {
            status: 'denied',
        }).then(() => {
            alert("class is Denied")
            fetch(`${import.meta.env.VITE_SERVER_URL}/classinfo`)
                .then((res) => res.json())
                .then((data) => setClasses(data));
        })
            .catch((error) => console.error('Error updating class:', error));
    };
    const handleOpenFeedbackModal = individualClass => {
        setSelectedClass(individualClass);
        
        setShowModal(true);
    }
    useEffect(()=>{
        console.log(selectedClass);
    },[selectedClass])
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        const fBack = e.target.feedback.value;
        console.log(fBack);
        setShowModal(false)

        axios.put(`${import.meta.env.VITE_SERVER_URL}/classfeedback/${selectedClass._id}`, {
            feedback: `${fBack}`,
        }).then(() => {
            alert("Feedback is updated")
            fetch(`${import.meta.env.VITE_SERVER_URL}/classinfo`)
                .then((res) => res.json())
                .then((data) => setClasses(data));
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
                                    <Button disabled={individualClass.status === "approved" || "denied"} onClick={() => handleStatusApproved(individualClass._id)} className='w-[100px]' color="success">Approve</Button>

                                    <Button disabled={individualClass.status === "approved" || "denied"} onClick={() => handleStatusDenied(individualClass._id)} className='w-[100px]' color="failure">Deny</Button>

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
