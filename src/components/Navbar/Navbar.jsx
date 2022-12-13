// import "./Navbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/auth.context";

import React from "react";

export default function Navbar(props) {
    const {isLoggedIn, user, logOutUser} = useContext(AuthContext);
    return (
        <>
            <nav
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "relative shadow-lg bg-white shadow-lg") +
                    " flex flex-wrap items-center justify-between px-2 py-3 "
                }
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            to="/"
                            className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                        >
                            <button>Home</button>
                        </Link>

                        {isLoggedIn && (
                            <>
                                <button
                                    className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                                    onClick={logOutUser}
                                >
                                    Logout
                                </button>
                                <Link
                                    to="/profile"
                                    className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                                >
                                    <button>
                                        {" "}
                                        {user && user.name}'s Profile
                                    </button>
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

                                {/* <span className="block ml-5 mt-4 lg:inline-block lg:mt-0 text-teal-700 text-black mr-4">
                                {user && user.name}
                            </span> */}

                                <Link
                                    to="/create"
                                    className="block mt-4 ml-5 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                                >
                                    <button>Create</button>
                                </Link>
                            </>
                        )}

                        {!isLoggedIn && (
                            <>
                                <Link
                                    to="/signup"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                                >
                                    {" "}
                                    <button>Sign Up</button>{" "}
                                </Link>
                                <Link
                                    to="/login"
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                                >
                                    {" "}
                                    <button>Login</button>{" "}
                                </Link>
                            </>
                        )}
                        <Link
                            to="/details"
                            className="block ml-3 mt-4 lg:inline-block lg:mt-0 text-teal-700 hover:text-gray-300 text-black mr-4"
                        >
                            <button>All recipes</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
