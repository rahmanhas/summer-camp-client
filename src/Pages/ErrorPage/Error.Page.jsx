import { Button } from 'flowbite-react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const { error, status } = useRouteError()

    return (
        <div className='flex items-center h-full w-full mt-5'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
                <div className=' text-center'>
                    <div className=' flex justify-center items-center'>
                        <img src="https://img.freepik.com/free-vector/slipping-with-banana-concept-illustration_114360-6137.jpg?w=826&t=st=1686334699~exp=1686335299~hmac=9718cedf2c85f52182703cde1312291f1d2f0497cac3919b363c3a0886de0654" className="lg:h-[500px]" alt="" />
                    </div>
                    <div>
                        <h2 className="my-5 font-extrabold md:text-6xl text-red-500">ERROR: {status || 404}</h2>
                        <p className='font-semibold md:text-3xl text-red-700 mb-8'>
                            {error?.message}
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link to='/'>
                            <Button className=''>
                                GO BACK TO HOMEPAGE
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage