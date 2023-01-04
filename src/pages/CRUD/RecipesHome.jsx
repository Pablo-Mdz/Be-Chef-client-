import axios from "axios";
import React, {useEffect, useState} from "react";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const RecipesHome = (props) => {
    const [search, setSearch] = useState("");

    const refresh = () => {
        axios
            .get(`${API_URL}/pages/CRUD/recipesHome`)
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

    return (
        <div className="pt-10 bg-gray-300 ">
            <h1 className="font-semibold text-2xl mb-5">
                Find All the recepies here!!
            </h1>
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
                        filtered.map((recipe) => (
                            <>
                                <div className="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/5 ">
                                    <article className=" rounded-2xl shadow-lg bg-gray-100 p-3 transform h-42  duration-500 hover:shadow-2xl  rounded-lg shadow-md ">
                                        <a href={`/single/${recipe._id}`}>
                                            {!recipe.image && (
                                                <img
                                                    alt="user image"
                                                    className="block h-40 w-auto rounded-2xl  "
                                                    src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                                                />
                                            )}
                                            {recipe.image && (
                                                <img
                                                    alt="recipe image"
                                                    className="block h-40 w-full object-cover rounded-2xl"
                                                    src={recipe.image}
                                                />
                                            )}
                                        </a>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-2xl">
                                                <a
                                                    className="no-underline  hover:text-blue-800 text-black text-xl "
                                                    href={`/single/${recipe._id}`}
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
                                            >
                                                <img
                                                    alt="Placeholder"
                                                    className="block object-cover rounded-full h-14 w-14"
                                                    src={
                                                        recipe.owner.imageUser
                                                            ? recipe.owner.imageUser
                                                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                                    }
                                                />
                                            </a>
                                            <p className="ml-2 text-sm">
                                                {recipe.time}
                                            </p>
                                            <p className="ml-2 text-sm ">
                                                {recipe.region}
                                            </p>
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

export default RecipesHome;
