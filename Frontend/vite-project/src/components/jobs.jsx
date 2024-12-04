import FilterCard from "./filterCard"
import FilterCardJobs from "./filterCardJobs"
import Navbar from "./share/navbar"

const Jobs = () => {
  const arrayJob = [1, 2, 3,4,5,6]
  return (
    <>
  <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-20%'>
            <FilterCard />
          </div>
          {
            arrayJob.length <= 0 ? <span>Job not found</span> : (
              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    arrayJob.map((job, index) => (

                      <FilterCardJobs key={index} />
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>

    </>
  )
}

export default Jobs
