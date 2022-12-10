import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {useContext} from "react";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const CreateRecipe = () => {
    const [image, setImage] = useState("");
    const {user} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        region: "",
        type: "",
        image: "",
        time: "",
        service: "",
        ingredients: "",
        instructions: "",
        tips: "",
        reviews: "",
        owner: user._id,
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "auh8nzbq");
        data.append("cloud_name", "be-chef");

        fetch("https://api.cloudinary.com/v1_1/be-chef/image/upload", {
            method: "post",
            body: data,
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                data && console.log(data.url);
                return data.url;
            })
            .then((image) => {
                const body = {...formData, image};
                console.log(" body before axios", body);
                axios
                    .post(`${API_URL}/pages/CRUD/create`, body)

                    .then((response) => {
                        console.log(
                            "alright, updated with",
                            response,
                            formData
                            // body
                        );

                        setFormData({});
                        setImage("");
                        navigate("/profile");
                    });
            });

        setFormData("");
    };
    formData.image && console.log(formData.image);

    return (
        <>
            {/* <h1>create a new Reipe</h1> */}

            <div className="mt-10 xl:mt-0">
                <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md">
                    <div className=" mt-5 md:mt-0 md:col-span-2">
                        <form
                            className=" px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md "
                            onSubmit={handleSubmit}
                        >
                            <div className="shadow overflow-hidden xl:rounded-xl ">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Recepie name "
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                value={formData.name}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        type: e.target.value,
                                                    })
                                                }
                                                value={formData.type}
                                            >
                                                <option>
                                                    Select a type of food
                                                </option>
                                                <option>Sweet</option>
                                                <option>Salty</option>
                                                <option>Healthy</option>
                                                <option>Meat</option>
                                                <option>Chiken</option>
                                                <option>Fish</option>
                                                <option>Vegan</option>
                                                <option>Vegetarian</option>
                                                <option>Bakery</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        region: e.target.value,
                                                    })
                                                }
                                                value={formData.region}
                                            >
                                                <option>Select Region</option>
                                                <option>European</option>
                                                <option>Sud America</option>
                                                <option>
                                                    Central America{" "}
                                                </option>
                                                <option>Nord America</option>
                                                <option>Asia</option>
                                                <option>Africa</option>
                                                <option>Oceania</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        service: e.target.value,
                                                    })
                                                }
                                                value={formData.service}
                                            >
                                                <option>
                                                    Quantiy of portions
                                                </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>8</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        time: e.target.value,
                                                    })
                                                }
                                                value={formData.time}
                                            >
                                                <option>
                                                    Select the Time to prepare
                                                </option>
                                                <option>10 min.</option>
                                                <option>15 min.</option>
                                                <option>20 min.</option>
                                                <option>25 min.</option>
                                                <option>30 min.</option>
                                                <option>35 min.</option>
                                                <option>40 min.</option>
                                                <option>45 min.</option>
                                                <option>50 min.</option>
                                                <option>1 Hour</option>
                                                <option>1:15 Hour</option>
                                                <option>1:30 hour</option>
                                                <option>1:45 hour</option>
                                                <option>2 hours or more</option>
                                            </select>
                                        </div>
{/* test  */}
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="file"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                name="image"
                                                onChange={(e) =>
                                                    setImage(e.target.files[0])
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <textarea
                                                name="ingredients"
                                                rows="4"
                                                type="text"
                                                className="mt-1 block w-full h-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                placeholder="Ingredients..."
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        ingredients:
                                                            e.target.value,
                                                    })
                                                }
                                                value={formData.ingredients}
                                            ></textarea>
                                            <div className="col-span-6 sm:col-span-3">
                                                <textarea
                                                    name="instructions"
                                                    rows="4"
                                                    type="text"
                                                    className=" mt-1 block w-full h-40 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                    placeholder="Instructions..."
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            instructions:
                                                                e.target.value,
                                                        })
                                                    }
                                                    value={
                                                        formData.instructions
                                                    }
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="tips"
                                                placeholder="Some secret left?... "
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        tips: e.target.value,
                                                    })
                                                }
                                                value={formData.tips}
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                placeholder="Review "
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                name="reviews"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        reviews: e.target.value,
                                                    })
                                                }
                                                value={formData.reviews}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Save Recepie
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRecipe;

{
    /* <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md"
            >
                <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-black"
                >
                    Recipe Name{" "}
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="name"
                    onChange={(e) =>
                        setFormData({...formData, name: e.target.value})
                    }
                    value={formData.name}
                />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    region
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="region"
                    onChange={(e) =>
                        setFormData({...formData, region: e.target.value})
                    }
                    value={formData.region}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    type
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="type"
                    onChange={(e) =>
                        setFormData({...formData, type: e.target.value})
                    }
                    value={formData.type}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    image
                </label>

                <input
                    type="file"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    time (only numbers)
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="time"
                    onChange={(e) =>
                        setFormData({...formData, time: e.target.value})
                    }
                    value={formData.time}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    service (only numbers)
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="service"
                    onChange={(e) =>
                        setFormData({...formData, service: e.target.value})
                    }
                    value={formData.service}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    ingredients
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="ingredients"
                    onChange={(e) =>
                        setFormData({...formData, ingredients: e.target.value})
                    }
                    value={formData.ingredients}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    instructions
                </label>

                {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */
}
{
    /* <textarea
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Instructions..."
                    onChange={(e) =>
                        setFormData({...formData, instructions: e.target.value})
                    }
                    value={formData.instructions}
                ></textarea> */
}

{
    /* <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="instructions"
                /> */
}
{
    /* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    tips
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="tips"
                    onChange={(e) =>
                        setFormData({...formData, tips: e.target.value})
                    }
                    value={formData.tips}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    reviews
                </label>
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="reviews"
                    onChange={(e) =>
                        setFormData({...formData, reviews: e.target.value})
                    }
                    value={formData.reviews}
                />

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >
                    Create Recipe
                </button>
            </form> */
}
