import { Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const handleClassSubmit = async (event) => {
        event.preventDefault();
        const image = event.target.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        try {
            const imgbbApiKey = import.meta.env.VITE_IMGBB_KEY;
            const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
            const response = await axios.post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            const imageUrl = response.data.data.url;
            axiosSecure
                .post(`/classdetail`, {
                    className: event.target.className.value,
                    photoURL: imageUrl,
                    instructorName: event.target.instructorName.value,
                    instructorEmail: event.target.instructorEmail.value,
                    availableSeats: event.target.availableSeats.value,
                    price: event.target.price.value,
                    status: 'pending',
                })
                .then((response) => {
                    if (response.data.insertedId) {
                        event.target.reset()
                        alert('Class Added Successfully!!!!!');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h2 className='pl-5 mt-5 text-xl '>Add A Class</h2>
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
                            placeholder="Email"
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
                            id="Price"
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