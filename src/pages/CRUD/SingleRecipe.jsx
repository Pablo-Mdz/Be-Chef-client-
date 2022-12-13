import axios from "axios";
import React, {useEffect, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import photo from "../../images/frutas1.jpg";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const SingleRecipe = (props) => {
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/pages/CRUD/${id}`).then((response) => {
            setRecipe(response.data);
        });
    }, []);

    const Delete = (id) => {
        axios
            .post(`${API_URL}/pages/CRUD/${id}/delete`)
            .then(props.refresh())
            .then(navigate("/profile"));
    };

    return (
        <>
            <div className="flex justify-center items-center relative bg-gray-300">
                {recipe && (
                    <div className="max-w-2xl mt-5 rounded-2xl overflow-hidden shadow-lg ">
                        <img
                            className="w-full h-auto rounded-3xl"
                            src={recipe.image}
                            alt="image test"
                        />
                        <div className="px-6 py-4 place-self-start">
                            <div className="font-bold text-4xl mb-2 ">
                                {recipe.name}
                            </div>
                            <h4 className="text-gray-700  text-xl">
                                <strong>Region / Country: </strong>{" "}
                                {recipe.region}
                            </h4>
                            <h4 className="text-gray-700 text-xl">
                                <strong>food Type: </strong> {recipe.type}
                            </h4>
                            <h4 className="text-gray-700 text-xl">
                                <strong>Services: </strong> {recipe.service}
                            </h4>
                            <div className="text-start  p-6">
                                <div className="grid  justify-items-start text-base">
                                    <h4>
                                        <strong>Ingredients:</strong>
                                    </h4>
                                    {recipe.ingredients.length ? (
                                        recipe.ingredients.map((eachStep) => {
                                            return (
                                                <li>
                                                    {`${eachStep.quantity} ${eachStep.measure} ${eachStep.singleIngredient}`}
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <h3></h3>
                                    )}
                                </div>

                                <h4 className="text-gray-700 text-base"> </h4>
                                <div className="grid content-start justify-items-start pt-6">
                                    <h4>
                                        <strong>Instructions:</strong>
                                    </h4>
                                    {recipe.instructions.length ? (
                                        recipe.instructions.map(
                                            (eachInstruction) => {
                                                return (
                                                    <li>{eachInstruction}</li>
                                                );
                                            }
                                        )
                                    ) : (
                                        <h3></h3>
                                    )}
                                </div>
                            </div>
                            <h4 className="text-gray-700 text-base">
                                <strong>Tips: </strong> {recipe.tips}
                            </h4>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href="/">
                                <span className="inline-block bg-gray-200  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2  hover:text-gray-400">
                                    Return Home
                                </span>
                            </a>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                text 2
                            </span>
                            <span
                                onClick={() => Delete(recipe._id)}
                                className="inline-block bg-gray-200 hover:bg-red-500 rounded-full px-3 py-1 hover:text-white text-sm font-semibold text-red-700 mr-2 mb-2 hover:border-transparent"
                            >
                                Delete
                            </span>
                        </div>
                        {/* <button
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={() => Delete(recipe._id) }
                        >
                            delete
                        </button> */}
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleRecipe;
