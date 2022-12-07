import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`${API_URL}/pages/CRUD/${id}`).then((response) => {
            setRecipe(response.data);
        });
    }, []);

    return (
        <div>
            {recipe && (
                <div>
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleRecipe;
