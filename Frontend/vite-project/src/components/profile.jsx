import { useState } from "react"
import ProfileJobList from "./profileJobList"
import Navbar from "./share/navbar"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { useDispatch, useSelector } from "react-redux"
import { REGISTER_API } from "@/utils/All_Api"
import { setUser } from "./redux/authSlice"
import { toast } from "sonner"
// import axios from "axios"

function Profile() {

    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        fullName: user?.fullName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills.map(skills => skills),
        file: user?.profile?.resume
    })

    const editProfileData = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const fileChangehandler = (e) => {
        const file = e.target.files?.[0]
        setInput({ ...input, file })
    }

    const editChanges = async (e) => {
        e.preventDefault();
    
        console.log(input); // Log the input data for debugging
    
        const formData = new FormData();
        formData.append("fullName", input.fullName || "");
        formData.append("email", input.email || "");
        formData.append("phoneNumber", input.phoneNumber || "");
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);
        if (input.file) {
            formData.append("resume", input.file);
        }

        fetch(`${REGISTER_API}/user/profile/user`, {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("profile response:", data);
                if (data.success == true) {
                    dispatch(setUser(data.user))
                    toast.success(data.msg);
                    // navigate("/login");
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
    };
    
    
    

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                    {/* Logo */}

                    <div className="text-center mb-2">
                        {/* <Button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"> */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent className=" bg-white">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you re done.
                                    </DialogDescription>
                                </DialogHeader>

                                <form onSubmit={editChanges}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="FullName" className="text-right">
                                                FullName
                                            </Label>
                                            <input
                                                id="FullName"
                                                name="fullName"
                                                value={input.fullName}
                                                onChange={editProfileData}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="email" className="text-right">
                                                Email
                                            </Label>
                                            <input
                                                id="email"
                                                name="email"
                                                value={input.email}
                                                onChange={editProfileData}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="phoneNumber" className="text-right">
                                                phoneNumber
                                            </Label>
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={input.phoneNumber}
                                                onChange={editProfileData}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="bio" className="text-right">
                                                bio
                                            </Label>
                                            <input
                                                id="bio"
                                                name="bio"
                                                type="text"
                                                value={input.bio}
                                                onChange={editProfileData}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="skills" className="text-right">
                                                skills
                                            </Label>
                                            <input
                                                id="skills"
                                                name="skills"
                                                value={input.skills}
                                                onChange={editProfileData}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="resume" className="text-right">
                                                Resume
                                            </Label>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="file"
                                                onChange={fileChangehandler}
                                                className="col-span-3 border-b-2"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Save changes</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                        {/* </Button> */}
                    </div>
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Logo"
                            className="w-24 h-24 rounded-full border-2 border-gray-200"
                        />
                    </div>

                    {/* Full Name */}
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                        {user?.fullName}
                    </h1>

                    {/* Description */}
                    <p className="text-center text-gray-600 mb-4">
                        {user?.profile?.bio}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
                        <ul className="flex flex-wrap gap-2">

                            {
                                user?.profile?.skills.map((skill, index) => (
                                    <li key={index} className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">
                                        {skill}
                                    </li>
                                ))
                            }
                            {/* <li className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">React</li>
                            <li className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">Node.js</li>
                            <li className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">JavaScript</li>
                            <li className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">Tailwind CSS</li>
                            <li className="px-3 py-1 bg-gray-200 text-sm font-medium rounded-lg">MongoDB</li> */}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h2>
                        <p className="text-sm text-gray-600">
                            <strong>Email:</strong> {user?.email}
                        </p>
                        <p className="text-sm text-gray-600">
                            <strong>Phone:</strong> {user?.phoneNumber}
                        </p>
                    </div>

                    {/* Resume */}
                    <div className="text-center mt-6">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>


            <div>
                <ProfileJobList />
            </div>
        </>
    )
}

export default Profile
