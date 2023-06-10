import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import '../Registration/registration.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'flowbite-react';
import { GoogleAuthProvider } from 'firebase/auth';
import { saveUser } from '../../Hooks/auth';
// import { saveUser } from '../../Hooks/auth';

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/'
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile, } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setError("")
    }, [])
    const onSubmit = (data, event) => {
        event.preventDefault();
        signIn(data.email, data.password).then(result => {
            setUser(result.user);
            navigate(from);
            console.log(user)

        }).catch(error => setError(error.message))

    };
    const handleGoogleLogin = (event) => {
        signInWithGoogle(googleProvider).then(result=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            setUser(result.user);
            navigate(from)
            setError("")
            console.log(result.user);
            const name = result.user.displayName;
            const email = result.user.email;
            const photoURL = result.user.photoURL;

            const googleUser = {name,email,photoURL}
            saveUser(googleUser)
            
        }).catch(error=>setError(error.message))
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='bg-black text-black'>
            <h2 className='text-6xl text-center font-bold text-white py-5'>Log In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    type='email'
                    {...register('email', {
                        required: true,
                    })}
                />
                <label>Password:</label>
                <div className='relative'>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        {...register('password', {
                            required: true,
                        })}
                        className='pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                    <span
                        className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEyeSlash className='text-gray-400' /> : <FaEye className='text-gray-400' />}
                    </span>
                </div>
                {errors.password && <p className='text-yellow-300'>Password is required</p>}
                {error && <p className='text-yellow-300'>{error}</p>}
                <input type='submit' />
                <p className='pb-5'>
                    <small className='text-lg text-white'>
                        New to DanceFlow Academy? Please{' '}
                        <Link className='text-lg text-yellow-300' to='/register'>
                            Register
                        </Link>
                    </small>
                </p>
            </form>
            <div className='flex justify-center items-center pb-5' >

                <Button onClick={handleGoogleLogin} color="light"><FaGoogle></FaGoogle> {" Login with Google"}</Button>
            </div>
        </div>
    );
};

export default Login;
