
function HeroSelection() {

  
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-gradient-to-r text-black">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                    Welcome to Dream Job
                </h1>

                {/* Search Box */}
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search for your dream job..."
                        className="w-full px-6 py-3 rounded-lg shadow-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                        Search
                    </button>
                </div>
            </div>

           
        </>
    )
}

export default HeroSelection
