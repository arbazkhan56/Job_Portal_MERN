import Navbar from "./share/navbar";

const JobDescription = () => {
  const jobDetails = {
    title: 'Frontend Developer',
    position: 'Junior Developer',
    time: 'Full-Time',
    package: '5-8 LPA',
    role: 'Software Development',
    location: 'Remote',
    description: 'We are looking for a passionate Frontend Developer to join our dynamic team. The ideal candidate should have hands-on experience with React, Tailwind CSS, and other modern web technologies.',
    experience: '1-3 Years',
    datePosted: '2024-12-01',
    salary: '₹6,00,000 per annum',
  };
  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{jobDetails.title}</h1>

          {/* Job Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">
                <strong>Position:</strong> {jobDetails.position}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {jobDetails.time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Package:</strong> {jobDetails.package}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Role:</strong> {jobDetails.role}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {jobDetails.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Experience:</strong> {jobDetails.experience}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date Posted:</strong> {jobDetails.datePosted}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Salary:</strong> {jobDetails.salary}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
            <p className="text-sm text-gray-600">{jobDetails.description}</p>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              onClick={() => alert('Application submitted successfully!')}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDescription
