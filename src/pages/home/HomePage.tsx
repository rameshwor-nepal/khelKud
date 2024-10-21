import { FaCashRegister, FaMapLocationDot } from "react-icons/fa6"
import { MdArrowForward, MdCalendarMonth, MdGroups2, MdMyLocation, MdSearch } from "react-icons/md"

const HomePage = () => {
    return (
        <>
            {/* main face section */}
            <section className="relative h-[calc(100vh-80px)] bg-cover bg-center " style={{ backgroundImage: `url("bg-green.jpg")` }}>
                <div className="absolute inset-0 bg-green-2 opacity-10 z-0"></div>
                <main className="z-10 h-full relative flex items-center justify-between mx-24 ">

                    {/* text and filtering */}
                    <div className="flex flex-col gap-12 ml-24">

                        {/* for text and headline */}
                        <div className="flex flex-col gap-2">
                            <h6 className="text-md text-green-1 font-normal ">
                                World class venue provider
                            </h6>
                            <h1 className="text-6xl font-bold w-[38rem] text-white ">
                                Choose Your <span className="text-green-1"> Venue</span> And Start Your Game
                            </h1>
                            <h6 className="text-md text-white font-normal ">
                                Unlease your athletic potential in your suitable venue and start your game
                            </h6>
                        </div>

                        {/* for filtering and searching */}
                        <div className="h-20 w-[38rem] bg-white rounded-md flex items-center justify-between">
                            <div className="w-full mx-2">
                                <label htmlFor="sport" className="block mb-1 text-sm font-medium text-gray-900">Sports</label>
                                <select id="sport" className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm outline-none rounded-md w-full">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>

                            <div className="w-full mr-3">
                                <label htmlFor="venue" className="block mb-1 text-sm font-medium text-gray-900">Location</label>
                                <select id="venue" className="bg-gray-50 border p-2 border-gray-300 text-gray-900 text-sm outline-none rounded-md w-full">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div className="p-5 bg-gradient-to-tl from-[#6b9415] to-green-2 text-white rounded-md mr-2 transition-all duration-500 ease-in-out cursor-pointer hover:bg-gradient-to-br">
                                <MdSearch size={25} />
                            </div>
                        </div>
                    </div>

                    {/* headling image */}
                    <div>
                    </div>

                </main>

            </section>

            {/* how it works section */}
            <section className="bg-gray-50 text-gray-2">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

                        <p className="mt-4 text-gray-500 font-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className=" rounded-xl border flex flex-col justify-between items-center text-center border-gray-200 p-8 shadow-xl transition hover:border-green-1/50 hover:shadow-green-1/40"
                        >
                            <div className="p-5 bg-gray-200 rounded-md">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="mt-4 text-xl font-bold text-gray-2">Join Us</h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <div
                                className="text-green-2 cursor-pointer mt-4 flex items-center justify-center w-full border-green-2/50 border-[1px] hover:bg-green-2 hover:text-gray-50 transition-all duration-700 ease-out  font-medium rounded-lg text-sm px-4 py-3 text-center "
                            >
                                Register Now
                                <span className="ml-1">
                                    <MdArrowForward size={15} />
                                </span>
                            </div>
                        </a>

                        <a
                            className=" rounded-xl border flex flex-col items-center text-center border-gray-200 p-8 shadow-xl transition hover:border-green-1/50 hover:shadow-green-1/40"
                        >
                            <div className="p-5 bg-gray-200 rounded-md">

                                <FaMapLocationDot size={40} />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-gray-2">Select Venue</h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <div
                                className="text-green-2 mt-4 cursor-pointer flex items-center justify-center w-full border-green-2/50 border-[1px] hover:bg-green-2 hover:text-gray-50 transition-all duration-700 ease-out  font-medium rounded-lg text-sm px-4 py-3 text-center "
                            >
                                Go To Venues
                                <span className="ml-1">
                                    <MdArrowForward size={15} />
                                </span>
                            </div>
                        </a>

                        <a
                            className=" rounded-xl border flex flex-col justify-between items-center text-center border-gray-200 p-8 shadow-xl transition hover:border-green-1/50 hover:shadow-green-1/40"
                        >
                            <div className="p-5 bg-gray-200 rounded-md">

                                <FaCashRegister size={40} />
                            </div>

                            <h2 className="mt-4 text-xl font-bold text-gray-2">Start Booking</h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <div
                                className="text-green-2 mt-4 flex items-center cursor-pointer justify-center w-full border-green-2/50 border-[1px] hover:bg-green-2 hover:text-gray-50 transition-all duration-700 ease-in-out  font-medium rounded-lg text-sm px-4 py-3 text-center "
                            >
                                Book Now
                                <span className="ml-1">
                                    <MdArrowForward size={15} />
                                </span>
                            </div>
                        </a>

                    </div>
                </div>
            </section>

            {/* featured venue */}
            <section className="bg-gray-100 text-gray-2">
                <div className="mx-auto flex flex-col items-center max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Featured Venue</h2>

                        <p className="mt-4 text-gray-500 font-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 shadow-lg bg-white rounded-md">

                            <div className="h-56 w-full bg-cover bg-no-repeat relative hover:scale-[1.03] transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(ai-bg.jpg)` }}>
                                <button className="absolute top-3 left-3 bg-blue-2 text-white py-1 px-2 text-sm"> Featured </button>
                                <button className="absolute top-3 right-3 bg-green-2 text-white py-1 px-2 text-sm">Rs.200/hrs </button>
                            </div>

                            <h4 className="mt-4 text-xl text-gray-2 font-medium"> Sarash Sports Club</h4>
                            <p className="mt-1 text-gray-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt omnis minus et rem obcaecati voluptate accusamus asperiores
                            </p>

                            <div className="mt-4 flex flex-col gap-2 text-gray-1 text-sm">
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdMyLocation />
                                    </span>
                                    <span className="font-medium"> Kapan, Kathmandu</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="text-green-2 font-medium"> Next Availability : 14th Jan 2024 </span>
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between cursor-pointer text-gray-1">
                                <div className="flex items-center gap-2">
                                    <img src='man1.png' className="h-8 w-8 object-cover rounded-full" alt="" />
                                    <p>John Kingler</p>
                                </div>

                                <p className="flex items-center gap-2 cursor-pointer text-gray-2 hover:text-green-2 ">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="font-medium">Book Now </span>
                                </p>
                            </div>

                        </div>

                        <div className="p-6 shadow-lg bg-white rounded-md">

                            <div className="h-56 w-full bg-cover bg-no-repeat relative hover:scale-[1.03] transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(ai-bg.jpg)` }}>
                                <button className="absolute top-3 left-3 bg-blue-2 text-white py-1 px-2 text-sm"> Featured </button>
                                <button className="absolute top-3 right-3 bg-green-2 text-white py-1 px-2 text-sm">Rs.200/hrs </button>
                            </div>

                            <h4 className="mt-4 text-xl text-gray-2 font-medium"> Sarash Sports Club</h4>
                            <p className="mt-1 text-gray-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt omnis minus et rem obcaecati voluptate accusamus asperiores
                            </p>

                            <div className="mt-4 flex flex-col gap-2 text-gray-1 text-sm">
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdMyLocation />
                                    </span>
                                    <span className="font-medium"> Kapan, Kathmandu</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="text-green-2 font-medium"> Next Availability : 14th Jan 2024 </span>
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between cursor-pointer text-gray-1">
                                <div className="flex items-center gap-2">
                                    <img src='man1.png' className="h-8 w-8 object-cover rounded-full" alt="" />
                                    <p>John Kingler</p>
                                </div>

                                <p className="flex items-center gap-2 cursor-pointer text-gray-2 hover:text-green-2 ">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="font-medium">Book Now </span>
                                </p>
                            </div>

                        </div>

                        <div className="p-6 shadow-lg bg-white rounded-md">

                            <div className="h-56 w-full bg-cover bg-no-repeat relative hover:scale-[1.03] transition-all duration-500 ease-in-out" style={{ backgroundImage: `url(ai-bg.jpg)` }}>
                                <button className="absolute top-3 left-3 bg-blue-2 text-white py-1 px-2 text-sm"> Featured </button>
                                <button className="absolute top-3 right-3 bg-green-2 text-white py-1 px-2 text-sm">Rs.200/hrs </button>
                            </div>

                            <h4 className="mt-4 text-xl text-gray-2 font-medium"> Sarash Sports Club</h4>
                            <p className="mt-1 text-gray-1 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt omnis minus et rem obcaecati voluptate accusamus asperiores
                            </p>

                            <div className="mt-4 flex flex-col gap-2 text-gray-1 text-sm">
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdMyLocation />
                                    </span>
                                    <span className="font-medium"> Kapan, Kathmandu</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="text-green-2 font-medium"> Next Availability : 14th Jan 2024 </span>
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between cursor-pointer text-gray-1">
                                <div className="flex items-center gap-2">
                                    <img src='man1.png' className="h-8 w-8 object-cover rounded-full" alt="" />
                                    <p>John Kingler</p>
                                </div>

                                <p className="flex items-center gap-2 cursor-pointer text-gray-2 hover:text-green-2 ">
                                    <span>
                                        <MdCalendarMonth />
                                    </span>
                                    <span className="font-medium">Book Now </span>
                                </p>
                            </div>

                        </div>

                    </div>

                    <div
                        className=" text-white w-fit mt-10 flex items-center cursor-pointer justify-center transition-all duration-500 ease-in-out bg-gray-2 hover:bg-green-2 rounded-lg font-medium text-xs px-5 py-2.5 text-center"
                    >
                        View All Featured
                        <span className="ml-1">
                            <MdArrowForward size={15} />
                        </span>
                    </div>

                </div>
            </section>

            {/* banner */}
            <section className="relative h-72 bg-cover bg-center text-white text-center flex flex-col items-center justify-center"
                style={{ backgroundImage: `url("banner1.jpg")` }}
            >

                <div className="absolute inset-0 bg-green-2 opacity-10 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">

                    <h1 className="text-3xl font-bold">
                        Convinent and Flexible Scheduling
                    </h1>
                    <h6 className="text-[17px] py-5 tracking-wide">
                        Find and book venue conveniently with our online system that matches <br /> your schedule and location.
                    </h6>

                    <div className="flex items-center gap-5">
                        <div
                            className=" text-white w-fit flex items-center cursor-pointer justify-center transition-all duration-500 ease-in-out bg-green-2 hover:bg-gray-2 rounded-lg font-medium text-xs px-5 py-2.5 text-center"
                        >
                            Book a Venue
                            <span className="ml-1">
                                <MdArrowForward size={15} />
                            </span>
                        </div>

                        <div
                            className=" text-white w-fit flex items-center cursor-pointer justify-center transition-all duration-500 ease-in-out bg-gray-2 hover:bg-green-2 rounded-lg font-medium text-xs px-5 py-2.5 text-center"
                        >
                            Find Price list
                            <span className="ml-1">
                                <MdArrowForward size={15} />
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            {/* our features */}
            <section className="bg-gray-100 text-gray-2">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Our Feature</h2>

                        <p className="mt-4 text-gray-500 font-normal">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className=" rounded-xl border flex flex-col justify-between  border-green-1/50 p-8 shadow-sm transition hover:border-green-1"
                        >
                            <div className="p-5 bg-gray-200 rounded-md flex items-center justify-center">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="my-3 text-xl font-bold text-gray-2">World Class Venue</h2>

                            <p className=" text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <p className="w-fit mt-3 cursor-pointer text-green-2 hover:text-gray-2 ">
                                <span className="font-medium">Learn More </span>
                            </p>
                        </a>

                        <a
                            className=" rounded-xl border flex flex-col justify-between  border-green-1/50 p-8 shadow-sm transition hover:border-green-1"
                        >
                            <div className="p-5 bg-gray-200 rounded-md flex items-center justify-center">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="my-3 text-xl font-bold text-gray-2">World Class Venue</h2>

                            <p className=" text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <p className="w-fit mt-3 cursor-pointer text-green-2 hover:text-gray-2 ">
                                <span className="font-medium">Learn More </span>
                            </p>
                        </a>

                        <a
                            className=" rounded-xl border flex flex-col justify-between  border-green-1/50 p-8 shadow-sm transition hover:border-green-1"
                        >
                            <div className="p-5 bg-gray-200 rounded-md flex items-center justify-center">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="my-3 text-xl font-bold text-gray-2">World Class Venue</h2>

                            <p className=" text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <p className="w-fit mt-3 cursor-pointer text-green-2 hover:text-gray-2 ">
                                <span className="font-medium">Learn More </span>
                            </p>
                        </a>

                        <a
                            className=" rounded-xl border flex flex-col justify-between  border-green-1/50 p-8 shadow-sm transition hover:border-green-1"
                        >
                            <div className="p-5 bg-gray-200 rounded-md flex items-center justify-center">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="my-3 text-xl font-bold text-gray-2">World Class Venue</h2>

                            <p className=" text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <p className="w-fit mt-3 cursor-pointer text-green-2 hover:text-gray-2 ">
                                <span className="font-medium">Learn More </span>
                            </p>
                        </a>
                        <a
                            className=" rounded-xl border flex flex-col justify-between  border-green-1/50 p-8 shadow-sm transition hover:border-green-1"
                        >
                            <div className="p-5 bg-gray-200 rounded-md flex items-center justify-center">
                                <MdGroups2 size={40} />
                            </div>


                            <h2 className="my-3 text-xl font-bold text-gray-2">World Class Venue</h2>

                            <p className=" text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>

                            <p className="w-fit mt-3 cursor-pointer text-green-2 hover:text-gray-2 ">
                                <span className="font-medium">Learn More </span>
                            </p>
                        </a>

                    </div>
                </div>
            </section>
        </>

    )
}

export default HomePage