import React, {useEffect, useState} from "react";
import axios from "axios";
// import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const Details = (props, user) => {
    const [search, setSearch] = useState("");
    const filtered = props.data.filter((oneData) => {
        if (!oneData.type) {
            return false;
        } else if (!oneData.name) {
            return false;
        } else {
            return (
                oneData.name.toLowerCase().includes(search.toLowerCase()) ||
                oneData.type.toLowerCase().includes(search.toLowerCase())
            );
        }
    });

    return (
        <div className=" bg-sky-50">
            <h1>Find All the recepies here!</h1>
            <input
                placeholder="Search"
                type="text"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                className="w-96 border rounded border-gray-400 h-10 focus:outline-none pl-4 pr-8 text-gray-700 text-sm text-gray-500"
            />

            <div className=" container w-3/4 px-2 md:px-12 my-6 ">
                {/* mx-auto */}
                <div className="flex flex-wrap-reverse -mx-1 lg:-mx-4">
                    {filtered &&
                        filtered.map((recipe) => (
                            <>
                                {/*  */}
                                {/* <!-- Column --> */}
                                <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    {/* <!-- Article --> */}
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <a href={`/single/${recipe._id}`}>
                                            <img
                                                alt="Placeholder"
                                                className="block h-auto w-full"
                                                src={recipe.image}
                                            />
                                        </a>

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <a
                                                    className="no-underline hover:underline text-black text-xl "
                                                    href={`/single/${recipe._id}`}
                                                >
                                                    {recipe.name}
                                                </a>
                                            </h1>
                                            <p className="text-grey-darker text-sm">
                                                {recipe.type}
                                            </p>
                                        </header>

                                        <footer className="flex justify-between leading-none p-2 md:p-4">
                                            {/* <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                    </a> */}
                                            <p className="ml-2 text-sm">
                                                {recipe.time}
                                            </p>
                                            <p className="ml-2 text-sm ">
                                                {recipe.region}
                                            </p>
                                            {/* <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a> */}
                                        </footer>
                                    </article>
                                    {/* <!-- END Article --> */}
                                </div>
                                {/* <!-- END Column --> */}
                            </>
                        ))}
                </div>
            </div>
        </div>
    );
};

// <div className="max-w-md rounded overflow-hidden shadow-lg m-5 ">
{
    /* <Link to={`/single/${recipe._id}`}>
    <img
    className="w-full"
    src={recipe.image}
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
</Link> */
}
{
    /* </div> */
}
export default Details;
