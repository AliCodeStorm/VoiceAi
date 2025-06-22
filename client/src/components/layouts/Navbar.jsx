import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="bg-white dark:bg-gray-800 shadow-sm w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0 flex items-center">
                            <svg
                                className="h-8 w-8 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                />
                            </svg>
                            <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                                VoiceAI
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                                Features
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                                Pricing
                            </a>
                            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                                Contact
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button className="text-gray-500 hover:text-blue-600 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar