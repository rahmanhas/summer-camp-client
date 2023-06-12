import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Button, Table } from 'flowbite-react';

const EnrolledClasses = () => {
    const {user} = useContext(AuthContext)
    const [currentUserID, setCurrentUserID] = useState('');
    const [classes, setClasses] = useState('');
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user.email}`).then(res=>res.json()).then(data=>setCurrentUserID(data?.paidCourseIds))
    },[])
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_SERVER_URL}/classpage`).then(res=>res.json()).then(data=>setClasses(data))
    },[])
    console.log(currentUserID);
    console.log(classes);

    const classesArray = Object.values(classes);

    const filteredClasses = classesArray?.filter(obj => currentUserID?.includes(obj._id));

    console.log(filteredClasses);
//     const filteredClasses = classes?.filter(obj => currentUserID.includes(obj._id));

  
//   const newArray = filteredClasses?.map(obj => ({ _id: obj._id }));

  // Display the new array
    return (
        <div>
            <h2 className='pl-5 mt-5 text-xl '>My Enrolled Classes</h2>
            <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Class Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Price
                        </Table.HeadCell>
                        
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredClasses?.map((classItem) => (
                            <Table.Row key={classItem._id}>
                                <Table.Cell>{classItem.className}</Table.Cell>
                                <Table.Cell>{classItem.price}</Table.Cell>
                                
                                
                                
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
        </div>
    );
};

export default EnrolledClasses;