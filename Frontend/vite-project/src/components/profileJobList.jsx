
const ProfileJobList = () => {
    const tableData = [1, 2, 3];
    return (
        <>
            <div className=" bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Job Applications</h1>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-gray-200 text-gray-800">
                                    <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Job Role</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Company Name</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Selected</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {tableData.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">2 April</td>
                                        <td className="border border-gray-300 px-4 py-2">Frontend Developer</td>
                                        <td className="border border-gray-300 px-4 py-2">Kugelblitz</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <span
                                                className={`px-2 py-1 rounded-lg text-sm font-medium ${row.selected === 'Yes'
                                                    ? 'bg-green-100 text-green-800'
                                                    : row.selected === 'No'
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                selected
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileJobList
