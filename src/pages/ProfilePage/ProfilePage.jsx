import "./ProfilePage.css";
import {useContext} from "react";
import React, {useEffect, useState} from "react";
import {AuthContext} from "../../context/auth.context";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";

function ProfilePage(props) {
    const {user} = useContext(AuthContext);
    const [search, setSearch] = useState("");
    const [savedRecipe, setSaved] = useState(false);

    const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

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

    const refresh = () => {
        axios
            .get(`${API_URL}/pages/CRUD/details`)
            .then((response) => props.setData(response.data));
    };
    useEffect(() => {
        refresh();
    }, []);

    const likeBtn = (recipe) => {
        const id = recipe._id;
        const likes = recipe.likes;
        if (likes.includes(user._id)) {
            let index = likes.indexOf(id);
            let newLikes = likes.slice(index, index + 1);

            axios
                .put(`${API_URL}/pages/CRUD/${id}/likes`, newLikes)
                .then(() => refresh());
        } else {
            likes.push(user._id);
            axios
                .put(`${API_URL}/pages/CRUD/${id}/likes`, likes)
                .then(() => refresh());
        }
    };

    return (
        <div className="bg-gray-300 flex  justify-center items-center">
            <div className="  container mx-auto  py-10 px-10 relative mt- mb-20 ">
                <div className=" w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl ">
                    <div className=" bg-white text-gray-800 flex flex-col">
                           
                        <div className=" p-8 shadow-md relative bg-gray-100 ">
                            <div className=" items-center">
                                <img
                                    alt="img"
                                    className="shadow-md rounded-2xl w-40"
                                    src={
                                        user.imageUrl
                                            ? user.imageUrl
                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                    }
                                />
                                <div className="text-indigo-600 ml-3 text-3xl ">
                                    <h1>
                                        Wellcome {user.name} to your Profile
                                    </h1>
                                </div>

                                <h2 className="font-medium text-lg mt-6 text-xl">
                                    Recipes you have created on Be Chef.
                                </h2>

                                <p className="text-gray-600 text-sm text-xl">
                                    Enjoy
                                </p>
                                <div className="mt-6 flex">
                                    <Link
                                        to="/create"
                                        className="bg-indigo-500 text-white py-2 hover:bg-blue-800 text-sm px-3 rounded focus:outline-none"
                                    >
                                        <button>New Recipe</button>
                                    </Link>
                                    <Link to="/details">
                                        <button className="ml-4 bg-indigo-500 text-white hover:bg-blue-800 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                                            All recepies
                                        </button>
                                    </Link>

                                    <button
                                        onClick={() => setSaved(!savedRecipe)}
                                        className="bg-indigo-500 text-white py-2 mx-4 hover:bg-blue-800 text-sm px-3 rounded focus:outline-none"
                                    >
                                        {savedRecipe
                                            ? "Your recipes"
                                            : "Saved recipes"}
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
                                {savedRecipe ? (
                                    <div className=" container  px-1 md:px-50 my-3  ">
                                        <div className=" -mx-1 md:-mx-4 flex flex-wrap-reverse py-5">
                                            {props.data
                                                .filter((oneData) =>
                                                    oneData.likes.includes(
                                                        user._id
                                                    )
                                                )
                                                .map((recipe) => (
                                                    <div>
                                                        <div className="my-1 px-1 lg:my-2 lg:px-4 w-72 ">
                                                            <article className="overflow-hidden rounded-lg shadow-lg ">
                                                                <a
                                                                    href={`/single/${recipe._id}`}
                                                                >
                                                                    {!recipe.image && (
                                                                        <img
                                                                            alt="user image"
                                                                            className="block h-40 w-auto rounded-2xl hover:opacity-60 "
                                                                            src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                                        />
                                                                    )}
                                                                    {recipe.image && (
                                                                        <img
                                                                            alt="user"
                                                                            className="block h-40 w-56 rounded-2xl hover:opacity-60 "
                                                                            src={
                                                                                recipe.image
                                                                            }
                                                                        />
                                                                    )}
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
                                                                <footer className="flex justify-between leading-none p-1 md:p-4">
                                                                    <a
                                                                        className="flex items-center no-underline hover:underline text-black "
                                                                        href="#"
                                                                    >
                                                                        <img
                                                                            alt="Placeholder"
                                                                            className="block rounded-2xl h-16 w-auto"
                                                                            src={
                                                                                recipe
                                                                                    .owner
                                                                                    .imageUser
                                                                                    ? recipe
                                                                                          .owner
                                                                                          .imageUser
                                                                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                                                            }
                                                                        />
                                                                    </a>
                                                                    <p className="ml-2 text-sm ">
                                                                        {
                                                                            recipe.region
                                                                        }
                                                                    </p>
                                                                    {recipe.likes.includes(
                                                                        user._id
                                                                    ) ? (
                                                                        <img
                                                                            onClick={() =>
                                                                                likeBtn(
                                                                                    recipe
                                                                                )
                                                                            }
                                                                            className="w-10 h-10 mt-6"
                                                                            src="https://cdn.iconscout.com/icon/free/png-256/heart-suit-card-37956.png"
                                                                        />
                                                                    ) : (
                                                                        <a
                                                                            className="w-10 h-10 mt-6"
                                                                            type="button"
                                                                            onClick={() =>
                                                                                likeBtn(
                                                                                    recipe
                                                                                )
                                                                            }
                                                                        >
                                                                            <img
                                                                                src="https://cdn.iconscout.com/icon/free/png-256/heart-1161-457786.png"
                                                                                alt="like"
                                                                            />
                                                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                                        </a>
                                                                    )}
                                                                </footer>
                                                            </article>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ) : (
                                    // created
                                    <div className=" container  px-1 md:px-50 my-3  ">
                                        <div className=" -mx-1 md:-mx-4 flex flex-wrap-reverse py-5">
                                            {filtered
                                                .filter(
                                                    (myrecepie) =>
                                                        myrecepie.owner.id ===
                                                        user._id
                                                )

                                                .map((recipe) => (
                                                    <div>
                                                        <div className="my-1 px-1  py-5 lg:my-2 lg:px-4 w-72 ">
                                                            <article className="transform h-64  duration-500 hover:scale-110 hover:bg-sky-50  rounded-lg shadow-lg  ">
                                                                <a
                                                                    href={`/single/${recipe._id}`}
                                                                >
                                                                    {!recipe.image && (
                                                                        <img
                                                                            alt="user image"
                                                                            className="block h-40 w-auto rounded-2xl hover:opacity-30 "
                                                                            src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                                        />
                                                                    )}
                                                                    {recipe.image && (
                                                                        <img
                                                                            alt="user"
                                                                            className="block h-40 w-56 rounded-2xl hover:opacity-60 "
                                                                            src={
                                                                                recipe.image
                                                                            }
                                                                        />
                                                                    )}
                                                                </a>

                                                                <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                                                                    <h1 className="text-lg">
                                                                        <a
                                                                            className="no-underline hover:text-gray-400 text-black text-xl "
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

                                                                <footer className="flex justify-between leading-none p- md:p-2">
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
                                                                </footer>
                                                            </article>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

// {recipe.likes.includes(user._id) ? (
//     <TwitterLikeButton onClick={() => likeBtn(recipe)}/>
//     ) : (
//     <TwitterLikeButton isClick={!recipe.likes.includes(user._id)} />
// )}
