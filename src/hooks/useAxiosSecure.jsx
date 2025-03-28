import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // Request interceptor - adds authorization header to every request
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor - handles unauthorized access (401, 403)
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;