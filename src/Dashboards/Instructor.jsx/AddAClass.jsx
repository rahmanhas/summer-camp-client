import { Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import swal from 'sweetalert2';

const AddAClass = () => {
    const { user } = useContext(AuthContext)
    const handleClassSubmit = event => {
        event.preventDefault()

        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
            }`


        axios.post(`${import.meta.env.VITE_SERVER_URL}/classdetail`, {
            className: event.target.className.value,
            photoURL: url,
            instructorName: event.target.instructorName.value,
            instructorEmail: event.target.instructorEmail.value,
            availableSeats: event.target.availableSeats.value,
            status: "pending"
        })
            .then(response => {
                console.log(response.data.insertedId)
                if (response.data.insertedId) {
                    alert("Class Added Successfully!!!!!")
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h2 className='text-6xl text-center my-10'>Add A Class</h2>
            <form onSubmit={handleClassSubmit} className="flex max-w-md flex-col gap-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center'>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Text"
                                value="Class Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            placeholder="Class Name"
                            name="className"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="image"
                                value="Photo"
                            />
                        </div>
                        <FileInput
                            className=''
                            id="image"
                            placeholder="PhotoURL"
                            name="image"
                            required
                            type="file"
                            accept='image/*'
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="instructorName"
                                value="Instructor Name"
                            />
                        </div>
                        <TextInput
                            id="instructorName"
                            placeholder="Instructor Name"
                            name="instructorName"
                            value={`${user.displayName}`}
                            required
                            type="text"
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Instructors Email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            placeholder="name@flowbite.com"
                            name='instructorEmail'
                            value={`${user.email}`}
                            required
                            type="email"
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Text"
                                value="Available Seats"
                            />
                        </div>
                        <TextInput
                            id="availableSeats"
                            placeholder="Available Seats"
                            name="availableSeats"
                            min='0'
                            required
                            type="number"
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="availableSeats"
                            placeholder="Price"
                            name="price"
                            min='0'
                            required
                            type="number"
                        />
                    </div>
                </div>
                <Button type="submit">
                    Add Class
                </Button>
            </form>
        </div>
    );
};

export default AddAClass;