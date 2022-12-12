import axios from "axios";
import React, {useEffect, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import photo from "../../images/frutas1.jpg";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/pages/CRUD/${id}`).then((response) => {
            setRecipe(response.data);
        });
    }, []);
    const Delete = () => {
        axios
            .post(`${API_URL}/pages/CRUD/${id}/delete`)
            .then(navigate("/details"));
    };

    return (
        <>
            <div className="flex justify-center mt-5 relative">
                {recipe && (
                    <div className="max-w-xl rounded overflow-hidden shadow-lg ">
                        <img
                            className="w-full"
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
                            <h4 className="text-gray-700 text-base">
                            <div>
                                                        {recipe.ingredients.length ? (
                                                            recipe.ingredients.map(
                                                                (eachStep) => {
                                                                    return <li>{eachStep}</li>;
                                                                }
                                                            )
                                                        ) : <h3></h3>}
                                                    </div>
                            </h4>
                            <h4 className="text-gray-700 text-base">
                                <strong>Instructions: </strong>{" "}
                                {recipe.instructions}
                            </h4>
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
                        <button onClick={Delete}>delete</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default SingleRecipe;

{
    /* <div>
    <div className="col-sm-4">
        <div
            className="card"
            style={{width: "20rem", height: "30rem"}}
        >
            <img
                src={recipe.image}
                className="card-img-top crdImg"
                alt="..."
            />

            <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <h5 className="card-body">
                    {recipe.ingedients}
                </h5>
                <p>Created By: {recipe.region}</p>
            </div>
        </div>
    </div> */
}
