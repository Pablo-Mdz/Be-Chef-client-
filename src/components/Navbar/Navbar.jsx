import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/auth.context";

import React from "react";

export default function Navbar(props) {
    const {isLoggedIn, user, logOutUser} = useContext(AuthContext);
    return (
        <>
            <nav className="bg-gradient-to-r from-gray-50 to-gray-700 flex flex-wrap items-center justify-between px-2 py-4">
                <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                        >
                            <button>Home</button>
                        </Link>

                        {isLoggedIn && (
                            <>
                                <Link
                                    to="/profile"
                                    className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    <button>
                                        {" "}
                                        {user && user.name} Profile
                                    </button>
                                    {/* <img
                                    src={user.imageUrl}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                    }}
                                    alt="profile"
                                /> */}
                                </Link>

                                <Link
                                    to="/create"
                                    className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    <button>Create</button>
                                </Link>
                                <Link
                                    to="/details"
                                    className="block ml-3 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    <button>All recipes</button>
                                </Link>
                            </>
                        )}

                        {!isLoggedIn && (
                            <>
                                <Link
                                    to="/signup"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    {" "}
                                    <button>Sign Up</button>{" "}
                                </Link>
                                <Link
                                    to="/login"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    {" "}
                                    <button>Login</button>{" "}
                                </Link>
                                <Link
                                    to="/recipesHome"
                                    className="block ml-3 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-blue-800 text-black mr-4"
                                >
                                    <button>All recipes</button>
                                </Link>
                            </>
                        )}
                    </div>
                    {isLoggedIn && (
                        <>
                            <button
                                className=" block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-red-500  text-black mr-4 lg:justify-end"
                                onClick={logOutUser}
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}
