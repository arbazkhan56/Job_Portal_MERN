// import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { REGISTER_API } from "@/utils/All_Api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { setUser } from "../redux/authSlice";
const Navbar = () => {
  // const user = false;
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () => {
    fetch(`${REGISTER_API}/user/logout`, {
      method: "GET"
  })
      .then((response) => response.json())
      .then((data) => {
          console.log("logout response:", data);
          if (data.success == true) {
              dispatch(setUser(null))
              toast.success(data.msg);
              navigate("/");
          }
          // Handle success or error
      })
      .catch((data) => {
          console.error("Error in logout:", data);
          if (data.success == false) {
              toast.error(data.msg);
          }
          // Handle error
      })
    
  }
  return (

    <nav className="flex justify-between items-center px-6 py-4">

      <div className="text-lg font-bold text-gray-800">
        Clone-Job-Board
      </div>


      <ul className="flex space-x-6">
        <li>
          <Link to={'/'} className="text-gray-700 hover:text-blue-500 font-medium">
          Home
          </Link>
        </li>
        <li>
          <Link to={'/jobs'} className="text-gray-700 hover:text-blue-500 font-medium">
          Jobs
          </Link>
        </li>
        <li>
          <Link to={'/browser'} className="text-gray-700 hover:text-blue-500 font-medium">
          Browse
          </Link>
        </li>
        <li>

          {
            !user ? (
              <div className="flex gap-2">
                <Link to={'/login'}>
                  <button>Login</button>
                </Link>
                <Link to={'/signup'}>
                  <button>Sign up</button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent>
                  <div>
                    <p className="text-sm text-gray-600">
                      {user?.fullName}
                      <span className="text-gray-500"> ({user?.role})</span>
                    </p>
                    <button className="text-sm text-blue-600 hover:text-blue-500">
                      <Link to={"/profile"}>View Profile</Link>
                    </button>
                    <button className="text-sm text-red-600 hover:text-red-500 ml-2" onClick={logoutHandler}>
                      Logout
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }


        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
