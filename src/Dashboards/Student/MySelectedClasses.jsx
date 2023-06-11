import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Table } from 'flowbite-react';


const MySelectedClasses = () => {
    const { user, role } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [userData, setUserData] = useState([])
    const [courseData, setCourseData] = useState([])

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
        axiosSecure.get(`studentcoursedetails/${user.email}`).then(data => setCourseData(data.data)).catch(error => console.log(error))
    }, [])
    //console.log(courseData);
    const handleDeleteClass = (userEmail, classId) => {
        console.log(userEmail, classId);
        axiosSecure
            .put(`/coursesinforemove/${user.email}`, {
                courseId: classId,
            })
            .then(() => {
                
            })
            .catch((error) => {
                console.error('Error removing course ID:', error);
            });
    }
    const handleClassPayment = (userEmail, classId,) => {
        console.log(userEmail, classId);
    }

    return (
        <div>
            <h2>My selected courses</h2>
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
                                <Table.Cell><Button className='' onClick={() => handleClassPayment(user?.email, classItem)} color="warning">Payment</Button></Table.Cell>
                                {/* Add more Table.Cell components for other course data */}
                            </Table.Row>
                        );
                    })}

                    {/* {classes.map((classItem) => (
                            <Table.Row key={classItem._id}>
                                <Table.Cell>{classItem.className}</Table.Cell>
                                <Table.Cell>{classItem.totalEnrolled ? classItem.totalEnrolled : 0}</Table.Cell>
                                <Table.Cell>{classItem.availableSeats}</Table.Cell>
                                <Table.Cell>{classItem.price}</Table.Cell>
                                <Table.Cell>{classItem.status}</Table.Cell>
                                <Table.Cell><Button className='' onClick={() => handleUpdateClass(classItem)} color="warning">Update</Button></Table.Cell>
                                <Table.Cell>{classItem?.feedback?classItem?.feedback:"No Feedback"}</Table.Cell>
                            </Table.Row>
                        ))} */}

                </Table.Body>
            </Table>
        </div>
    );
};

export default MySelectedClasses;