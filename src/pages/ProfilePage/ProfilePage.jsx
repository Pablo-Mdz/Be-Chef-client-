import "./ProfilePage.css";
import {useContext} from "react";
import React, {useState} from "react";
import {AuthContext} from "../../context/auth.context";
import {Link} from "react-router-dom";
import axios from "axios";
// react-router-dom => Navigate, NavLink, useNavigate ||  React => useEffect

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

    const likeBtn = (recipe) => {
        const id = recipe._id;
        const likes = recipe.likes;
        if (likes.includes(user._id)) {
            let index = likes.indexOf(id);
            let newLikes = likes.slice(index, index + 1);

            axios
                .put(`${API_URL}/pages/CRUD/${id}/likes`, newLikes)
                .then(() => props.refresh());
        }
    };

    return (
        <div className="bg-gray-300 flex  justify-center items-center">
            <div className="  container mx-auto  py-10 px-10 relative mt- mb-20 ">
                <div className=" w-full rounded-lg h-full lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl ">
                    <div className=" bg-white text-gray-800 flex flex-col">
                        <div className=" p-8 shadow-md relative bg-gray-100 ">
                            <div className=" items-center">
                                <div>
                                    <img
                                        alt="img"
                                        className="shadow-md justify-left rounded-2xl w-40 mr-40 position-static"
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
                                </div>

                                <h2 className="font-medium text-lg mt-6 text-2xl">
                                    {!savedRecipe
                                        ? "This are your recipes on Be Chef"
                                        : "Saved recipes from other Chefs"}
                                </h2>

                                <p className="text-gray-600 text-sm text-xl">
                                    {!savedRecipe
                                        ? ""
                                        : "Enjoy your favourites recipes"}
                                </p>
                                <div className="mt-6 flex">
                                    <Link
                                        to="/create"
                                        className="bg-indigo-500 text-white py-2 hover:bg-blue-800 text-sm px-3 rounded focus:outline-none"
                                    >
                                        <button>Create a new RECIPE</button>
                                    </Link>
                                    <Link to="/details">
                                        <button className="ml-4 bg-indigo-500 text-white hover:bg-blue-800 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">
                                            Discover other recepies!
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
                                {/* //saved  */}

                                {savedRecipe ? (
                                    <div className=" container w-screen px-2 md:px-12 my-6 mx-auto  ">
                                        <div className=" flex items-stretch flex-wrap-reverse -mx-1 lg:-mx-4">
                                            {filtered
                                                .filter((oneData) =>
                                                    oneData.likes.includes(
                                                        user._id
                                                    )
                                                )
                                                .map((recipe) => (
                                                    <div>
                                                        <div className="my-1 px-1 lg:my-2 lg:px-4 w-72 ">
                                                            <article className="transform  duration-500 hover:shadow-2xl rounded-lg shadow-md ">
                                                                <a
                                                                    href={`/single/${recipe._id}`}
                                                                >
                                                                    {!recipe.image && (
                                                                        <img
                                                                            alt="recipe image"
                                                                            className="block h-40 w-auto rounded-t-2xl  "
                                                                            src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                                        />
                                                                    )}
                                                                    {recipe.image && (
                                                                        <img
                                                                            alt="recipe image"
                                                                            className="block h-40 w-full object-cover rounded-t-2xl"
                                                                            src={
                                                                                recipe.image
                                                                            }
                                                                        />
                                                                    )}
                                                                </a>
                                                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                                    <h1 className="text-lg">
                                                                        <a
                                                                            className="no-underline hover:text-blue-800 text-black text-xl "
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
                                                                            className="block object-cover rounded-full h-14 w-14"
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
                                                                    ) && (
                                                                        <img
                                                                            onClick={() =>
                                                                                likeBtn(
                                                                                    recipe
                                                                                )
                                                                            }
                                                                            className="w-10 h-10 mt-6"
                                                                            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-52-103683.png"
                                                                        />
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
                                    <div className=" container  px-2 md:px-12 my-6 mx-auto   ">
                                        <div className=" flex items-stretch flex-wrap-reverse -mx-1 lg:-mx-4">
                                            {filtered
                                                .filter(
                                                    (myrecepie) =>
                                                        myrecepie.owner.id ===
                                                        user._id
                                                )

                                                .map((recipe) => (
                                                    <div>
                                                        <div className="my-1 mx-1 px-1  py-5 lg:my-2 lg:px-4 w-72 ">
                                                            <article className="transform  duration-500 hover:shadow-2xl rounded-lg shadow-md  ">
                                                                <a
                                                                    href={`/single/${recipe._id}`}
                                                                >
                                                                    {!recipe.image && (
                                                                        <img
                                                                            alt="user image"
                                                                            className="block h-40 w-auto rounded-t-2xl  "
                                                                            src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                                        />
                                                                    )}
                                                                    {recipe.image && (
                                                                        <img
                                                                            alt="recipe image"
                                                                            className="block h-40 w-full object-cover rounded-t-2xl"
                                                                            src={
                                                                                recipe.image
                                                                            }
                                                                        />
                                                                    )}
                                                                </a>

                                                                <header className="flex items-center justify-between leading-tight p-2 md:p-4  ">
                                                                    <h1 className="text-lg">
                                                                        <a
                                                                            className="no-underline hover:text-blue-800 text-black text-xl "
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

                                                                <footer className="flex justify-between leading-none p- md:p-4">
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
