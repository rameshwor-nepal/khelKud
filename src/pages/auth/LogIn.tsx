import { useNavigate } from "react-router-dom"

const LogIn = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-gray-900 bg-cover bg-center relative text-left" style={{ backgroundImage: `url("bg-green.jpg")` }}>
            {/* <div className="h-screen w-full bg-gray-900 blur-2xl absolute z-0"></div> */}
            <div className="absolute inset-0 bg-white opacity-30 z-0"></div>
            <div className=" relative z-10 flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto shadow-2xl lg:py-0">
                {/* <a
                    href="#"
                    className="flex items-center mb-6"
                > */}
                <img
                    onClick={() => navigate('/')}
                    className="w-20 h-20 my-4 cursor-pointer"
                    src="logo.png" alt="logo"
                />
                {/* </a> */}
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-2 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Your email
                                </label>
                                <input
                                    type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Password
                                </label>
                                <input
                                    type="password" name="password" id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 outline-none rounded-lg block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 ">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-blue-2 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white transition-all duration-500 ease-in-out bg-gray-2 hover:bg-green-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Sign in
                            </button>
                            <p
                                className="text-sm font-light text-gray-500">
                                Don’t have an account yet?
                                <a
                                    onClick={() => navigate('/signup')}
                                    className="font-medium cursor-pointer text-blue-2 hover:underline pl-2">
                                    Sign up
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn