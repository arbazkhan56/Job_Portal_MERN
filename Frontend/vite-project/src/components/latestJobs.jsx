import { useSelector } from "react-redux"
import Card from "./card"

function LatestJobs() {
    // const jobCount = [1,2,3,4,5,6,7,8]
    const {allJobs} = useSelector(store=>store.job);
    return (
        <div>
            {
                allJobs?.slice(0,6).map((job) => <Card key={job._id} job={job}/>)
            }

        </div>
    )
}

export default LatestJobs
