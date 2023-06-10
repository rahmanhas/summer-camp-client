import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Checkbox, Label, Table, TextInput } from 'flowbite-react';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyClass = () => {
    const {user, role } = useContext(AuthContext)
    const [classes, setClasses] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentClass, setCurrentClass] = useState({});
    const [newClassName, setNewClassName] = useState('');

    const [axiosSecure] = useAxiosSecure()

  
    const getData = ()=>{
        return axiosSecure.get(`/classdetails/${user.email}`).then(data => setClasses(data.data)).catch(error=>console.log(error))
    }

    useEffect(() => {
            getData()
    }, [])

    const handleUpdateClass = (classItem) => {
        console.log(classItem)
        setCurrentClass(classItem);
        setIsModalOpen(true);
    }
    useEffect(() => {
        console.log(currentClass);
    }, [currentClass]);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentClass(null);    
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        axiosSecure.put(`/updateclass/${currentClass._id}`, {
                availableSeats: e.target.availableSeats.value,
                price: e.target.price.value
            })
            .then((response) => {
                console.log('Class updated successfully');
                getData()
                handleCloseModal();
            })
            .catch((error) => {
                console.error('Error updating class:', error);
            });
    };

    console.log(classes);
    return (
        <div>
            <h2 className='text-6xl text-center my-10'>My Classes</h2>
            <div className='mx-5'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Class Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Total Enrolled Students
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Total Seats
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Price
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Update
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Feedback
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {classes.map((classItem) => (
                            <Table.Row key={classItem._id}>
                                <Table.Cell>{classItem.className}</Table.Cell>
                                <Table.Cell>{classItem.totalEnrolled ? classItem.totalEnrolled : 0}</Table.Cell>
                                <Table.Cell>{classItem.availableSeats}</Table.Cell>
                                <Table.Cell>{classItem.price}</Table.Cell>
                                <Table.Cell>{classItem.status}</Table.Cell>
                                <Table.Cell><Button className='' onClick={() => handleUpdateClass(classItem)} color="warning">Update</Button></Table.Cell>
                                <Table.Cell>{classItem?.feedback?classItem?.feedback:"No Feedback"}</Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
            </div>
            {/* Modal  */}
            {currentClass && <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        pt: 2,
                        px: 4,
                        pb: 3,
                    }}
                >
                    <Typography variant="h6" component="h2" id="modal-modal-title">
                        Update Class Info
                    </Typography>

                    <form onSubmit={handleFormSubmit} className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Total Seats"
                                    value="Update Total Seats"
                                />
                            </div>
                            <TextInput
                                id="availableSeats"
                                defaultValue={currentClass.availableSeats}
                                name="availableSeats"
                                required
                                type="number"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="Price"
                                    value="Update Price ($)"
                                />
                            </div>
                            <TextInput
                                id="price"
                                required
                                name="price"
                                type="number"
                                defaultValue={currentClass.price}
                            />
                        </div>

                        <Button type="submit">
                            Submit
                        </Button>
                    <Button onClick={handleCloseModal}>Close Modal</Button>
                    </form>
                </Box>
            </Modal>}

        </div>
    );
};

export default MyClass;
