import "./Navbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/auth.context";

function Navbar() {
    // Subscribe to the AuthContext to gain access to
    // the values from AuthContext.Provider's `value` prop
    const {isLoggedIn, user, logOutUser} = useContext(AuthContext);

    return (
        <nav className="bg-[#325f9a] flex items-center justify-between flex-wrap bg-teal-500 p-6 ">
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
                            <button onClick={logOutUser}>Logout</button>

                            <Link
                                to="/profile"
                                className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white mr-4 text-yellow-600"
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

                            <span>{user && user.name}</span>

                            <Link 
                            to="/create"
                                className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-800 hover:text-white mr-4 text-black"
                            >
                                <button>Create</button>
                            
                            </Link>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                            <Link
                                to="/signup"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white mr-4 text-yellow-600"
                            >
                                {" "}
                                <button>Sign Up</button>{" "}
                            </Link>
                            <Link
                                to="/login"
                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 hover:text-white mr-4 text-yellow-600"
                            >
                                {" "}
                                <button>Login</button>{" "}
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
