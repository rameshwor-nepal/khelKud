import { MdOutlinePeople } from "react-icons/md"

const TopNavbar = () => {
    return (
        <nav className="bg-blue-1 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src="logo.png" className="h-12 cursor-pointer" alt=" Logo" />
                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <button
                        type="button"
                        className="text-green-2 bg-gray-50 flex items-center hover:bg-gray-2 hover:text-gray-50 transition-all duration-500 ease-out  font-medium rounded-lg text-sm px-4 py-3 text-center "
                    >
                        <span className="mr-1">
                            <MdOutlinePeople size={20} />
                        </span>
                        Login / Register
                    </button>
                    <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 " aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col text-[18px] font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
                        <li className="cursor-pointer">
                            <a className="block py-2 px-3 md:p-0 text-white rounded hover:text-green-1 transition-all duration-500 ease-out">
                                Home
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a className="block py-2 px-3 md:p-0 text-white rounded hover:text-green-1 transition-all duration-500 ease-out ">
                                About
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a className="block py-2 px-3 md:p-0 text-white rounded hover:text-green-1 transition-all duration-500 ease-out ">
                                Venue
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a className="block py-2 px-3 md:p-0 text-white rounded hover:text-green-1 transition-all duration-500 ease-out ">
                                Blogs
                            </a>
                        </li>
                        <li className="cursor-pointer">
                            <a className="block py-2 px-3 md:p-0 text-white rounded hover:text-green-1 transition-all duration-500 ease-out ">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default TopNavbar