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
            return false;
        } else if (!oneData.name) {
            return false;
        } else {
            return (
                oneData.name.toLowerCase().includes(search.toLowerCase()) ||
                oneData.type.toLowerCase().includes(search.toLowerCase())
            );
        }
    });

    return (
        <div>
            <div className="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
                <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
                <div className="w-64 h-64 -mx-32 bg-sky-600 opacity-50 rounded-full"></div>
                <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-sky-300 rounded-full"></div>
                <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
            </div>
            <div className=" container mx-auto  py-16 px-20 relative ">
                <div className=" w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl ">
                    {/* TARJETA  */}
                    <div className=" bg-white text-gray-800 flex flex-col">
                        <div className=" p-8 shadow-md relative bg-sky-100">
                            <div className=" items-center">
                                <div className="text-indigo-600 ml-3">
                                    <h1>
                                        Wellcome {user.name} to your Profile
                                    </h1>
                                </div>

                                <h2 className="font-medium text-lg mt-6">
                                    Recipes you have created on Be Chef.
                                </h2>
                                {/* <img
                                    src={user.image}
                                    alt="image"
                                    className="w-10 h-10 block rounded object-cover object-top"
                                /> */}
                                <p className="text-gray-600 text-sm">Enjoy</p>
                                <div className="mt-6 flex">
                                    <Link
                                        to="/create"
                                        className="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
                                    >
                                        <button>New Recipe</button>
                                    </Link>

                                    <button className="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                                        New Task
                                    </button>
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
                           

                        <div className=" container  px-2 md:px-12 my-6 ">
                                <div className=" -mx-1 lg:-mx-4 flex flex-wrap-reverse">
                                    {filtered
                                        .filter(
                                            (myrecepie) =>
                                                myrecepie.owner === user._id
                                        )
                                        .map((recipe) => (
                                            <div>
                                                <div className="my-1 px-1 w-full lg:my-4 lg:px-4 w-64">
                                                    {/* <!-- Article --> */}
                                                    <article className="overflow-hidden rounded-lg shadow-lg">
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
                                                                {recipe.type}
                                                            </p>
                                                        </header>

                                                        <footer className="flex justify-between leading-none p-2 md:p-4">
                                                            {/* <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                    </a> */}
                                                            <p className="ml-2 text-sm">
                                                                {recipe.time}
                                                            </p>
                                                            <p className="ml-2 text-sm ">
                                                                {recipe.region}
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
