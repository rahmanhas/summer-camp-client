import axios from 'axios';
import { Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const MyClass = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/classinfo`).then(res => res.json()).then(data => setClasses(data))
    }, [])
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
                            <Table.Row key={classItem.id}>
                                <Table.Cell>{classItem.className}</Table.Cell>
                                <Table.Cell>{classItem.totalEnrolled ? classItem.totalEnrolled : 0}</Table.Cell>
                                <Table.Cell>{classItem.availableSeats}</Table.Cell>
                                <Table.Cell>{classItem.status}</Table.Cell>
                                <Table.Cell>{/* Update button */}</Table.Cell>
                                <Table.Cell>{/* Feedback button */}</Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default MyClass;
{/* <Table.Cell>
Apple MacBook Pro 17"
</Table.Cell> */}

{/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 whitespace-nowrap font-medium text-gray-900 dark:text-white">


</Table.Row> */}