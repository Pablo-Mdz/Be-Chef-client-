import "./ProfilePage.css";
import { useContext} from "react";
import {AuthContext} from "../../context/auth.context";

function ProfilePage(props) {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            

            <div className="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
                <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
                <div className="w-64 h-64 -mx-32 bg-sky-600 opacity-50 rounded-full"></div>
                <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-sky-300 rounded-full"></div>
                <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full"></div>
            </div>

            <div className="container mx-auto h-screen py-16 px-8 relative">
                <div className="flex w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
                    <div className="lg:w-1/2 bg-white text-gray-800 flex flex-col">
                        <div className="p-8 shadow-md relative bg-white">
                            <div className="flex items-center">
                                
                                <div className="text-indigo-600 ml-3">
                                   <h2>Wellcome {user.name}</h2>
                                </div>
                                <button className="bg-indigo-100 text-indigo-400 ml-auto w-8 h-8 flex items-center justify-center rounded">
                                    <svg
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2.2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                                    </svg>
                                </button>
                            </div>
                            <h1 className="font-medium text-lg mt-6">
                                Your recepies
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Fingerstache godard blog, cornhole meh hoodie
                            </p>
                            <div className="mt-6 flex">
                                <button className="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none">
                                    New Contact
                                </button>
                                <button className="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                                    New Task
                                </button>
                                <div className="relative ml-auto flex-1 pl-8 sm:block hidden">
                                    <input
                                        placeholder="Search"
                                        type="text"
                                        className="w-full border rounded border-gray-400 h-full focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
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
                        </div>
                    </div>
                    <div className="row g-3 flex flex-wrap">
                    {props.data
                .filter((myrecepie) => myrecepie.owner === user._id)
                .map((recipe) => (
                    <div >
                        <img
                                    src={recipe.image}
                                    className="w-10 h-10 block rounded object-cover object-top"
                                    alt="image"
                                />
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 ">
                            <h1 className="font-bold text-xl mb-2">{recipe.name}</h1>
                            <h1>{recipe.type}</h1>
                            <h1>{recipe.region}</h1>
                        </div>
                    </div>
                ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
