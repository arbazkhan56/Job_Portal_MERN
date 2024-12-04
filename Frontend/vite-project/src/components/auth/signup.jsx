import { REGISTER_API } from "@/utils/All_Api";
import Navbar from "../share/navbar"
import { useState } from "react";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/authSlice";

function Signup() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        file: null,
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector(store => store.auth)

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // toast.success("Signup Form Data:", formData);

        // Upload the file to a server
        const newFormData = new FormData();
        newFormData.append("fullName", formData.fullName);
        newFormData.append("email", formData.email);
        newFormData.append("phoneNumber", formData.phone);
        newFormData.append("password", formData.password);
        newFormData.append("role", formData.role);

        if (formData.file) {
            newFormData.append("file", formData.file);
        }

        dispatch(setLoading(true));

        fetch(`${REGISTER_API}/user/register`, {
            method: "POST",
            body: newFormData,
            withCredentials: true
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Signup response:", data);
                if (data.success == true) {
                    toast.success(data.msg);
                    navigate("/login");
                }
                // Handle success or error
            })
            .catch((data) => {
                console.error("Error in signup:", data);
                if (data.success == false) {
                    toast.error(data.msg);
                }
                // Handle error
            })
            .finally(() => {
                dispatch(setLoading(false));
            });

    };


    return (
        <div>
            <Navbar />

            <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
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
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">File Upload</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {
                        loading ? (
                            <button
                                
                                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Please wait...
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Signup
                            </button>
                        )
                    }

                </form>
            </div>

        </div>
    )
}

export default Signup
