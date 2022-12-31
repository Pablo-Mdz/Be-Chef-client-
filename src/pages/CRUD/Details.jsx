import axios from "axios";
import {AuthContext} from "../../context/auth.context";
import React, {useEffect, useState, useContext} from "react";


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const Details = (props) => {
    const [search, setSearch] = useState("");
    const {user} = useContext(AuthContext);
    console.log(user);

    const refresh = () => {
        axios
            .get(`${API_URL}/pages/CRUD/details`)
            .then((response) => props.setData(response.data));
    };
    useEffect(() => {
        refresh();
    }, []);

    const filtered = props.data.filter((oneData) => {
        if (!oneData.type) {
            return false;
        } else if (!oneData.name) {
            return true;
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
                .then(() => refresh());
        } else {
            likes.push(user._id);
            axios
                .put(`${API_URL}/pages/CRUD/${id}/likes`, likes)
                .then(() => refresh());
        }
    };

    return (
        <div className="pt-10 bg-gray-300 ">
            <div className="">
            <h1 className="font-semibold text-4xl mb-5">
                Find All the recepies here
            </h1>
            </div>
            <h2 className="mb-3">Create an account for save and </h2>
            <input
                placeholder="Search"
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                className=" w-2/5 border rounded border-gray-400 h-10 focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
            />
            <div className=" container w-screen px-2 md:px-12 my-6 mx-auto ">
                <div className="flex items-stretch flex-wrap-reverse -mx-1 lg:-mx-4 ">
                    {filtered &&
                        filtered?.map((recipe) => (
                            <>
                                <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 ">
                                <article className=" rounded-2xl shadow-lg bg-gray-100 p-3 transform h-42  duration-500 hover:shadow-2xl  rounded-lg shadow-md ">  {/* hover:scale-110 hover:bg-sky-50 hover:opacity-100*/}
                                        <a href={`/single/${recipe?._id}`}>
                                            {!recipe.image && (
                                                <img
                                                    alt="user image"
                                                    className="block h-40 w-auto rounded-2xl  "
                                                    src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                />
                                            )}
                                            {recipe.image && (
                                                <img
                                                    alt="user"
                                                    className="block h-40 w-auto rounded-2xl  "
                                                    src={recipe?.image}
                                                />
                                            )}
                                        </a>

                                        <header className="flex items-center justify-around leading-tight p-2 md:p-3">
                                            <h1 className="text-2xl">
                                                <a
                                                    className="no-underline  hover:text-blue-800 text-black text-xl "
                                                    href={`/single/${recipe?._id}`}
                                                >
                                                    {recipe.name}
                                                </a>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                {recipe.type}
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
                                                        recipe.owner.imageUser
                                                            ? recipe.owner
                                                                  .imageUser
                                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                                    }
                                                />
                                            </a>
                                            <p className="ml-2 text-sm pt-10">
                                                {recipe?.region}
                                            </p>
                                            {recipe.likes.includes(
                                                user?._id
                                            ) ? (
                                                <img
                                                    onClick={() =>
                                                        likeBtn(recipe)
                                                    }
                                                    className="w-10 h-10 mt-6"
                                                    src="https://cdn.iconscout.com/icon/free/png-256/heart-suit-card-37956.png"
                                                />
                                            ) : (
                                                <a
                                                    className="w-10 h-10 mt-6"
                                                    type="button"
                                                    onClick={() =>
                                                        likeBtn(recipe)
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
                            </>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
