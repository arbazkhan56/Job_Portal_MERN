
function Card(job) {
    console.log(job)
    return (
        <>
            <div className=" flex justify-center items-center bg-sky-200 shadow-lg rounded-lg overflow-hidden border border-gray-200 my-2" >
                {/* Job Title */}
                <div className="px-6 py-4 bg-indigo-600 text-white">
                    {/* <h2 className="text-xl font-bold">{job?.title}</h2> */}
                    {/* <p className="text-sm">{job?.company?.companyName}</p> */}
                </div>

                {/* Job Details */}
                <div className="p-6">
                    <p className="text-gray-800 mb-4">
                        <span className="font-semibold">Description: </span>
                        Develop and maintain user-friendly web applications using modern frontend technologies.
                    </p>

                    <p className="text-gray-800 mb-4">
                        <span className="font-semibold">Package: </span>
                        $80,000 - $120,000 / year
                    </p>

                    <p className="text-gray-800 mb-4">
                        <span className="font-semibold">Technologies: </span>
                        React, Tailwind CSS, TypeScript, Redux
                    </p>
                </div>

                {/* Apply Button */}
                <div className="px-6 py-4 bg-gray-100 text-right">
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card
