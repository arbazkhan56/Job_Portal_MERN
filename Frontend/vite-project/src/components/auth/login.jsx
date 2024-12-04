// import React from 'react'

import { REGISTER_API } from "@/utils/All_Api";
import Navbar from "../share/navbar"
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/authSlice";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "",
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading} = useSelector(store => store.auth)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        dispatch(setLoading(true)); // Show loading spinner
        // Send the formData as raw JSON
        fetch(`${REGISTER_API}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            withCredentials: true
        })
            .then((response) => response.json()) // Parse JSON response
            .then((data) => {
                if (data.success == true) {
                    dispatch(setUser(data.user))
                    navigate("/");
                    toast.success(data.msg); // Show success message
                    
                } else {
                    toast.error(data.msg); // Show error message
                }
            })
            .catch((error) => {
                console.error("Error in signup:", error);
                toast.error("Something went wrong!");
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    };
    
    


    return (
        <div>
            <Navbar />
            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div>
                    {
                        loading? (
                            <button
                        
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Please Wait...
                    </button>
                        ) : (
                            <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                        )
                    }
                    
                </form>
            </div>
        </div>
    )
}

export default Login

