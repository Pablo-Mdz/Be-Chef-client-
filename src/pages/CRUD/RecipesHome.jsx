import axios from "axios"
import React, { useEffect, useState } from "react"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const RecipesHome = (props) => {
    const [search, setSearch] = useState("")

    const refresh = () => {
        axios
            .get(`${API_URL}/pages/CRUD/recipesHome`)
            .then((response) => props.setData(response.data))
    }
    useEffect(() => {
        refresh()
    }, [])

    const filtered = props.data.filter((oneData) => {
        if (!oneData.type) {
            return false
        } else if (!oneData.name) {
            return true
        } else {
            return (
                oneData.name.toLowerCase().includes(search.toLowerCase()) ||
                oneData.type.toLowerCase().includes(search.toLowerCase())
            )
        }
    })

    return (
        <div className="bg-gray-300 pt-10 ">
            <h1 className="mb-5 text-2xl font-semibold">
                Find All the recepies here!!
            </h1>
            <input
                placeholder="Search"
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                className=" h-10 w-2/5 rounded border border-gray-400 pl-4 pr-8 text-sm text-gray-700 text-gray-500 focus:outline-none"
            />

            <div className=" container my-6 mx-auto w-screen px-2 md:px-12 ">
                <div className="-mx-1 flex flex-wrap-reverse items-stretch lg:-mx-4 ">
                    {filtered &&
                        filtered.map((recipe) => (
                            <>
                                <div className="my-1 w-full px-1 md:w-1/3 lg:my-4 lg:w-1/5 lg:px-4 ">
                                    <article className=" h-42 transform rounded-2xl rounded-lg bg-gray-100 p-3  shadow-lg shadow-md  duration-500 hover:shadow-2xl ">
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
                                                    className="block h-40 w-full rounded-2xl object-cover"
                                                    src={recipe.image}
                                                />
                                            )}
                                        </a>

                                        <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                            <h1 className="text-2xl">
                                                <a
                                                    className="text-xl  text-black no-underline hover:text-blue-800 "
                                                    href={`/single/${recipe._id}`}
                                                >
                                                    {recipe.name}
                                                </a>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                {recipe.type}
                                            </p>
                                        </header>

                                        <footer className="flex justify-between p-1 leading-none md:p-4">
                                            <a className="flex items-center text-black no-underline hover:underline ">
                                                <img
                                                    alt="Placeholder"
                                                    className="block h-14 w-14 rounded-full object-cover"
                                                    src={
                                                        recipe.owner.imageUser
                                                            ? recipe.owner
                                                                  .imageUser
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
    )
}

export default RecipesHome
