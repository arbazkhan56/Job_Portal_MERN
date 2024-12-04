
function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo / Brand Name */}
            <div className="text-2xl font-bold">
              Dream<span className="text-indigo-400">Job</span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a href="/" className="hover:text-indigo-400">
                Home
              </a>
              <a href="/about" className="hover:text-indigo-400">
                About
              </a>
              <a href="/jobs" className="hover:text-indigo-400">
                Jobs
              </a>
              <a href="/contact" className="hover:text-indigo-400">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 border-t border-gray-600 pt-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} DreamJob. All rights reserved.
            </p>
            <p className="text-xs mt-2 text-gray-400">
              Designed by <span className="text-indigo-400">Dream Team</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
