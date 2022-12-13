import "./ProfilePage.css";
import {useContext} from "react";
import React, {useEffect, useState} from "react";
import {AuthContext} from "../../context/auth.context";
import {Link, NavLink} from "react-router-dom";

function ProfilePage(props) {
    const {user} = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const filtered = props.data.filter((oneData) => {
        if (!oneData.type) {
            return false }
        else if (!oneData.name) {
            return false;
        } else {
            return oneData.name.toLowerCase().includes(search.toLowerCase()) ||
            oneData.type.toLowerCase().includes(search.toLowerCase())
        }
    });

    return (
        <div className="bg-gray-300 flex  justify-center items-center">
            <div className="  container mx-auto  py-10 px-10 relative mt- mb-20 ">
                <div className=" w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl ">
                    {/* TARJETA  */}
                    <div className=" bg-white text-gray-800 flex flex-col">
                        <div className=" p-8 shadow-md relative bg-gray-100">
                            <div className=" items-center">
                                <div className="text-indigo-600 ml-3 text-3xl">
                                    <h1>
                                        Wellcome {user.name} to your Profile
                                    </h1>
                                </div>

                                <h2 className="font-medium text-lg mt-6 text-xl">
                                    Recipes you have created on Be Chef.
                                </h2>
                                {/* <img
                                    src={user.image}
                                    alt="image"
                                    className="w-10 h-10 block rounded object-cover object-top"
                                /> */}
                                <p className="text-gray-600 text-sm text-xl">Enjoy</p>
                                <div className="mt-6 flex">
                                    <Link
                                        to="/create"
                                        className="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
                                    >
                                        <button>New Recipe</button>
                                    </Link>
                                    <Link to="/details">
                                        <button className="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                                            All recepies
                                        </button>
                                    </Link>
                                    <div className="relative ml-auto flex-1 pl-8 sm:block hidden">
                                        <input
                                            placeholder="Search"
                                            type="text"
                                            value={search}
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }}
                                            className="w-full border rounded
                                            border-gray-400 h-full
                                            focus:outline-none pl-4 pr-8
                                            text-gray-700 text-sm text-gray-500"
                                        />

                                        <svg
                                            stroke="currentColor"
                                            className="w-4 h-4 absolute right-0 top-0 mt-3 mr-2 text-gray-500"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.35-4.35" />
                                        </svg>
                                    </div>
                                </div>

                                <div className=" container  px-1 md:px-12 my-3  ">
                                    <div className=" -mx-1 lg:-mx-4 flex flex-wrap-reverse">
                                        {filtered
                                            .filter(
                                                (myrecepie) =>
                                                    myrecepie.owner === user._id
                                            )
                                            .map((recipe) => (
                                                <div>
                                                    <div className="my-1 px-1 lg:my-2 lg:px-4 w-72 ">
                                                        {/* <!-- Article --> */}
                                                        <article className="overflow-hidden rounded-lg shadow-lg ">
                                                            <a
                                                                href={`/single/${recipe._id}`}
                                                            >
                                                                <img
                                                                    alt="Placeholder"
                                                                    className="block h-auto w-full"
                                                                    src={
                                                                        recipe.image
                                                                    }
                                                                />
                                                            </a>

                                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                                <h1 className="text-lg">
                                                                    <a
                                                                        className="no-underline hover:underline text-black text-xl "
                                                                        href={`/single/${recipe._id}`}
                                                                    >
                                                                        {
                                                                            recipe.name
                                                                        }
                                                                    </a>
                                                                </h1>
                                                                <p className="text-grey-darker text-sm">
                                                                    {
                                                                        recipe.type
                                                                    }
                                                                </p>
                                                            </header>

                                                            <footer className="flex justify-between leading-none p-2 md:p-4">
                                                                {/* <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                    </a> */}
                                                                <p className="ml-2 text-sm">
                                                                    {
                                                                        recipe.time
                                                                    }
                                                                </p>
                                                                <p className="ml-2 text-sm ">
                                                                    {
                                                                        recipe.region
                                                                    }
                                                                </p>
                                                                {/* <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a> */}
                                                            </footer>
                                                        </article>
                                                        {/* <!-- END Article --> */}
                                                    </div>
                                                    {/* <!-- END Column --> */}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
