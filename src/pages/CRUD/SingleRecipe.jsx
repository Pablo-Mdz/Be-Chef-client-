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
            <div className="flex justify-center  relative bg-sky-400">
                {recipe && (
                    <div className="max-w-2xl mt-5 rounded overflow-hidden shadow-lg ">
                        <img
                            className="w-full h-auto"
                            src={recipe.image}
                            alt="image test"
                        />
                        <div className="px-6 py-4 place-self-start">
                            <div className="font-bold text-xl mb-2">
                                {recipe.name}
                            </div>
                            <h4 className="text-gray-700 text-base">
                                <strong>Region / Country: </strong>{" "}
                                {recipe.region}
                            </h4>
                            <h4 className="text-gray-700 text-base">
                                <strong>food Type: </strong> {recipe.type}
                            </h4>
                            <h4 className="text-gray-700 text-base">
                                <strong>Services: </strong> {recipe.service}
                            </h4>
                            <h4 className="text-gray-700 text-base"></h4>
                            <div>
                                <h4>
                                    <strong>Ingredients:</strong>
                                </h4>
                                {recipe.ingredients.length ? (
                                    recipe.ingredients.map((eachStep) => {
                                        return <li>{eachStep}</li>;
                                    })
                                ) : (
                                    <h3></h3>
                                )}
                            </div>

                            <h4 className="text-gray-700 text-base"> </h4>
                            <div>
                                <h4>
                                    <strong>Instructions:</strong>
                                </h4>
                                {recipe.instructions.length ? (
                                    recipe.instructions.map(
                                        (eachInstruction) => {
                                            return <li>{eachInstruction}</li>;
                                        }
                                    )
                                ) : (
                                    <h3></h3>
                                )}
                            </div>

                            <h4 className="text-gray-700 text-base">
                                <strong>Tips: </strong> {recipe.tips}
                            </h4>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                text 1
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                text 2
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                #text3
                            </span>
                        </div>
                        <button
                            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={() => Delete(recipe._id)}
                        >
                            delete
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleRecipe;
