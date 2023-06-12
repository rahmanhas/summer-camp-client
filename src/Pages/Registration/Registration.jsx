import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './registration.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import { saveUser } from '../../Hooks/auth';


const Registration = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { user, setUser, createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';
    const [error, setError] = useState('');
    useEffect(() => {
        setError("")
    }, [])

    const onSubmit = async (data, event) => {
        
        event.preventDefault();
        console.log(data);
        const image = data.photoURL[0];
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
          
          createUser(data.email, data.password)
            .then((result) => {
              setUser(result.user);
              updateUserProfile(data.name, imageUrl)
                .then(() => {
                    const userInfo = {name: data.name, email: data.email, photoURL: imageUrl }
                    saveUser(userInfo);
                  alert('Welcome Onboard');
                })
                .catch((error) => setError(error.message));
              navigate(from);
            })
            .catch((error) => setError(error.message));
        } catch (error) {
          // Handle error
        }
      };
    
      const password = React.useRef({});
      password.current = watch('password', '');
    
    return (
        <div className='bg-black text-black'>
            <h2 className='text-6xl text-center font-bold text-white py-5'>Register Please</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                    type="text"
                    {...register("name", { required: true, maxLength: 80 })}
                />
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        
                    })}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                />
                {errors.password?.type === 'required' && <p className="text-yellow-300">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-yellow-300">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-yellow-300">Password must have one Uppercase and one lower case letter, one number digit and one special character.</p>}
                <label>Confirm Password</label>
                <input
                    type="password"
                    {...register('confirmPassword', {
                        validate: (value) =>
                            value === password.current || 'The passwords do not match',
                    })}
                />
                {errors.confirmPassword && <p className='text-yellow-300'>{errors.confirmPassword.message}</p>}
                <label>PhotoURL</label>
                <input
                    type="file"
                    {...register("photoURL", { required: true })}
                />
                <label>Gender</label>
                <select name="title" {...register("title", { required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <label>Mobile number</label>
                <input
                    type="tel"
                    {...register("mobileNumber", {
                        required: true,
                        maxLength: 11,
                    })}
                />
                {error && <p className='text-yellow-300'>{error}</p>}
                <input type="submit" />
                <p className='pb-5'><small className='text-lg text-white'>Already have an account <Link className='text-lg text-yellow-300' to="/login">Login</Link></small></p>
            </form>
        </div>
    );
};

export default Registration;
