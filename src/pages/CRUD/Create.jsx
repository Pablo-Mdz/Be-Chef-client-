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
        time: "",
        service: "",
        ingredients: "",
        instructions: "",
        tips: "",
        reviews: "",
        owner: user._id,
    });
    const navigate = useNavigate();
    //   .then((img) => {
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
                resp.json();
            })
            .then((data) => {
                data && console.log(data);
                return data.url;
            })
            .then((img) => {
                const body = {formData, img};
                axios
                    .post(`${API_URL}/pages/CRUD/create`, body)
                    .then((response) => {
                        console.log(
                            "alright, updated with",
                            response,
                            formData
                        );

                        setFormData({});
                        // setImage("");
                        navigate("/profile");
                    });
            });

        setFormData("");
    };
    formData.image && console.log(formData.image);

    return (
        <>
            <h1>create a new Reipe</h1>
            <form
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

                {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
                <textarea
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Instructions..."
                    onChange={(e) =>
                        setFormData({...formData, instructions: e.target.value})
                    }
                    value={formData.instructions}
                ></textarea>

                {/* <input
                    type="text"
                    className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="instructions"
                /> */}
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

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                >
                    Create Recipe
                </button>
            </form>
        </>
    );
};

export default CreateRecipe;
