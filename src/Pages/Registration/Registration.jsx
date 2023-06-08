import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './registration.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { user,setUser,createUser,signIn,signInWithGoogle, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';


    const onSubmit = (data, event) => {
        event.preventDefault();

       // console.log("Form submitted");
        //console.log("RESULT", data);
        //console.log(data);
       createUser(data.email,data.password).then(result=>{
        setUser(result.user);
        updateUserProfile(data.name,data.photoURL).then(()=>{
            const savedUser = {name:data.name, email: data.email}
            fetch(`${import.meta.env.VITE_SERVER_URL}/users`, { 
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        navigate(from)
       })
       .catch(error=>console.log(error))
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
                    {...register("Name", { required: true, maxLength: 80 })}
                />
                <label>Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        // pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
                    type="text"
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
                        minLength: 8
                    })}
                />

                <input type="submit" />
                <p className='pb-5'><small className='text-lg text-white'>Already have an account <Link className='text-lg text-yellow-300' to="/login">Login</Link></small></p>
            </form>
        </div>
    );
};

export default Registration;
