import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import {useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} =useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();
    // const {user}=useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return (
        <div className='p-8'>
            <div className='divider'></div>
            <button className='btn' onClick={handleGoogleSignIn}>
                <FaGoogle className='mr-4'></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;