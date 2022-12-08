import React, {useEffect, useState} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import photo from "../../images/frutas1.jpg";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const Details = (props) => {
   
    return (
        <div>
       <h1>Find All the recepies here!</h1>
       <input
                                        placeholder="Search"
                                        type="text"
                                        className="w-96 border rounded border-gray-400 h-10 focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
                                    />
            <div className="row g-3 flex flex-wrap">
                {props.data &&
                    props.data.map((recipe) => (
                        <>
                            <div className="max-w-md rounded overflow-hidden shadow-lg m-5 ">
                                <Link to={`/single/${recipe._id}`}>
                                    <img
                                        className="w-full"
                                        src={photo}
                                        alt="image test"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">
                                            {recipe.name}
                                        </div>
                                        <h4 className="text-gray-700 text-base">
                                            {recipe.region}
                                        </h4>
                                        <h4 className="text-gray-700 text-base">
                                            {recipe.type}
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
                                </Link>
                            </div>
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Details;
