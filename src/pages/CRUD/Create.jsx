import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import { useContext } from "react";


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const CreateRecipe = () => {

const {user } = useContext(AuthContext)


    const [formData, setFormData] = useState({
        name: null,
        region: null,
        type: null,
        image: null,
        time: null,
        service: null,
        ingredients: null,
        instructions: null,
        tips: null,
        reviews: null,
        owner: user._id,
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${API_URL}/pages/CRUD/create`, formData)
        .then((response) => {
            console.log("alright, updated with", response, formData);
            setFormData({});
        });
    };

    return (
        <>
            <h1>create a new Reipe</h1>
            <form onSubmit={handleSubmit}>
                <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
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
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="image"
                    onChange={(e) =>
                        setFormData({...formData, image: e.target.value})
                    }
                    value={formData.image}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    time
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
                    service
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
                <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="instructions"
                    onChange={(e) =>
                        setFormData({...formData, instructions: e.target.value})
                    }
                    value={formData.instructions}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
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

                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Create Recipe</button>
            </form>
        </>
    );
};

export default CreateRecipe;
