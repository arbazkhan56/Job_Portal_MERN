import axios from "axios"
import { useDispatch } from "react-redux"
import { setallJobs } from "../redux/jobSlice"
import { REGISTER_API } from "@/utils/All_Api"

function UseAllJobs() {
    const dispatch = useDispatch()

    const fetAllJobs = async () => {
        try {
            const response = await axios.get(`${REGISTER_API}/job/getAllJobs`, {withCredentials: true})
            if(response.data.success){
                dispatch(setallJobs(response.data.jobs))
            }
        } catch (error) {
            console.error(error)
        }
    }

    fetAllJobs()

}

export default UseAllJobs
