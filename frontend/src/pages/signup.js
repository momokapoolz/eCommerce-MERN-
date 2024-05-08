import React, { useContext, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

import loginIcon from '../assets/loginIcon.png';

//import { VscAccount } from "react-icons/vsc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify'

import imageToBase64 from '../helpers/imageToBase64'

import summaryAPI from '../common/api';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirm_password: "",
        profilePic: ""
    })

    const navigate = useNavigate()


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    console.log(data)

    //commnunicate with backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.confirm_password == data.password) {
            const dataRespone = await fetch(summaryAPI.signUp.url, {
                method: summaryAPI.signUp.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataApi = await dataRespone.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate("/login")
            }

            if (dataApi.error) {
                toast.error(dataApi.message)
            }

            console.log(dataApi)
        } else {
            toast.error("Invalid confirm password")
            console.log("Invalid confirm password")
        }

    }



    const handleUploadPic = async (e) => {
        const file = e.target.files[0];

        const imagePic = await imageToBase64(file);

        console.log(imagePic)

        setData((preve) => {
            return {
                ...preve,
                profilePic: imagePic
            }
        })


    }





    return (
        <div>
            <section id='signup'>
                <div className='mx-auto container p-4'>
                    <div className='bg-white p-5 w-full max-w-sm mx-auto'>

                        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                            <div>
                                <img src={data.profilePic || loginIcon} alt='login icons' />
                            </div>
                            <form>
                                <label>
                                    <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                        Upload  Photo
                                    </div>
                                    <input type='file' className='hidden' onChange={handleUploadPic} />
                                </label>
                            </form>
                        </div>



                        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                            <div className='grid'>
                                <label>Name : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input
                                        type='text'
                                        placeholder='enter your name'
                                        name='name'
                                        value={data.name}
                                        onChange={handleOnChange}
                                        className='w-full h-full outline-none bg-transparent' />
                                </div>
                            </div>




                            <div className='grid'>
                                <label>Email : </label>
                                <div className='bg-slate-100 p-2'>
                                    <input
                                        type='email'
                                        placeholder='enter email'
                                        name='email'
                                        value={data.email}
                                        onChange={handleOnChange}
                                        className='w-full h-full outline-none bg-transparent' />
                                </div>
                            </div>




                            <div>
                                <label>Password : </label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='enter password'
                                        name='password'
                                        value={data.password}
                                        onChange={handleOnChange}
                                        className='w-full h-full outline-none bg-transparent' />
                                    <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                        <span>
                                            {
                                                showPassword ? (
                                                    <FaEyeSlash />
                                                )
                                                    :
                                                    (
                                                        <FaEye />
                                                    )
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label>Confirm Password : </label>
                                <div className='bg-slate-100 p-2 flex'>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder='confirm your password'
                                        name='confirm_password'
                                        value={data.confirm_password}
                                        onChange={handleOnChange}
                                        className='w-full h-full outline-none bg-transparent' />
                                    <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                                        <span>
                                            {
                                                showPassword ? (
                                                    <FaEyeSlash />
                                                )
                                                    :
                                                    (
                                                        <FaEye />
                                                    )
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>






                            <div>
                                <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign up</button>

                            </div>

                        </form>

                        <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-blue-600 hover:text-blue-700 hover:underline'>Login</Link></p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup