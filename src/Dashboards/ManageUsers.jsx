import { Button, Table } from 'flowbite-react';
import React, { useState } from 'react';
import axios from 'axios';
import { becomeAdmin } from '../Utility/auth';

const ManageUsers = () => {
    const [allEmail,setAllEmail] = useState([])




    // Make a request for a user with a given ID
    axios.get(`${import.meta.env.VITE_SERVER_URL}/allusers`)
        .then(data=>setAllEmail(data.data))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


    const handleMakeAdmin = email =>{
        console.log(email);
        //becomeAdmin(email)
    }
    const handleMakeInstructor = email =>{
        console.log(email);
        //becomeAdmin(email)
    }
    return (
        <div>
            <h2 className='text-6xl text-center my-10'>Manage Users</h2>
            <div className='mx-5'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Make Admin
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Make Instructor
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {allEmail.map((email) => (
                            <Table.Row key={email._id}>
                                <Table.Cell>{email.email}</Table.Cell>
                                <Table.Cell><Button onClick={()=>handleMakeAdmin(email.email)} color="failure">make admin</Button> </Table.Cell>
                                <Table.Cell><Button  onClick={()=>handleMakeInstructor(email.email) }color="purple">make instructor</Button> </Table.Cell>
                                
                                {/* <Table.Cell>{classItem.price}</Table.Cell>
                                <Table.Cell>{classItem.status}</Table.Cell>
                                <Table.Cell><Button className='' onClick={() => handleUpdateClass(classItem)} color="warning">Update</Button></Table.Cell>
                                <Table.Cell>Add Feedback</Table.Cell> */}
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageUsers;