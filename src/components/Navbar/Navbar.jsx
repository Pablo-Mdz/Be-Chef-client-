import "./Navbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/auth.context";

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider's `value` prop
    const {isLoggedIn, user, logOutUser} = useContext(AuthContext);

    return (
        <nav className="bg-[#0284c7] flex items-center justify-between flex-wrap bg-sky-600 p-4 ">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
                
                <div className="text-sm lg:flex-grow ">
                    <Link
                        to="/"
                        className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4"
                    >
                        <button>Home</button>
                    </Link>
                    

                    {isLoggedIn && (
                        <>
                            <button  className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4" onClick={logOutUser}>Logout</button>

                            <Link
                                to="/profile"
                                className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4"
                            >
                                <button>Profile</button>
                                {/* <img
                                    src="../public/2.png"
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                    }}
                                    alt="profile"
                                /> */}
                            </Link>

                            <span  className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 text-black mr-4">{user && user.name}</span>

                            <Link 
                            to="/create"
                                className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4"
                            >
                                <button>Create</button>
                            
                            </Link>
                            
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link
                                to="/signup"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4"
                            >
                                {" "}
                                <button>Sign Up</button>{" "}
                            </Link>
                            <Link
                                to="/login"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-white text-black mr-4"
                            >
                                {" "}
                                <button>Login</button>{" "}
                            </Link>
                        </>
                    )}
                    
                </div>
                <input
                                        placeholder="Search"
                                        type="text"
                                        className="w-80 border rounded border-gray-400 h-10 focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
                                    />
            </div>
        </nav>
    );
}

export default Navbar;
