import React, {useEffect, useState} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const Details = () => {
    const [data, setData] = useState([]);
    console.log(data)
    // const {id} = useParams();
    useEffect(() => {
        axios
            .get(`${API_URL}/pages/CRUD/details`)
            //   ${id}
            .then((response) => setData(response.data),console.log(data))
    }, []);

    return (
        <div>
            <h1>details</h1>
            <div className="row g-3">
                {data &&
                    data.map((recipe) => (
                        <>
                            <div className="col-sm-4">
                                <Link to={`/single/${recipe._id}`}>
                                <div
                                    className="card"
                                    style={{width: "20rem", height: "30rem"}}
                                >
                                    <img
                                        src={recipe.name}
                                        className="card-img-top crdImg"
                                        alt="..."
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {recipe.name}
                                        </h5>
                                        <h5 className="card-body">
                                            {recipe.region}
                                        </h5>
                                        <p>Created By: {recipe.type}</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Details;
