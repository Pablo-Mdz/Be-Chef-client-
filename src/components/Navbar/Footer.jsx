import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="static bg-gradient-to-r from-gray-50 to-gray-700 pt-4 pb-3 ">
                <div
                    className="bottom-auto top-0  left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{height: "80px"}}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container  mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">
                                Ironhack final project
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">
                                This page was created for educational purposes
                                as a final project of the Ironhack berlin
                                bootcamp. It does not have any commercial or
                                lucrative purpose.
                            </h5>
                            
                        </div>
                        {/* <div>
                            <img
                                className="w-32  px-4 opacity-50 rounded-full"
                                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
                                alt=""
                            />
                        </div> */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase texthover:text-white text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a target="_blank"
                                                className="text-slate-300 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https://github.com/Pablo-Mdz"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank"
                                                className="text-slate-300 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https://www.linkedin.com/in/pablo-cigoy/"
                                            >
                                                Linkedin
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank"
                                                className="text-slate-300 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-2 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-800 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}
                                {""} Final Project Ironhack Berlin 2022 by {""}
                                <a className="hover:text-slate-300" target="_blank" href="https://github.com/Pablo-Mdz/Be-Chef-client-">
                                    Pablo Cigoy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

// import React from "react";

// const Footer = () => {

//     return (
//         <div>
{
    /* <footer
                class="text-center text-white"
                style="background-color: #caced1;"
            >
                <div class="container p-6">
                    <div class="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                        <div class="lg:mb-0 mb-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                                class="w-full rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <div
                    class="text-center p-4"
                    style="background-color: rgba(0, 0, 0, 0.2);"
                >
                    © 2021 Copyright:
                    <a class="text-white" href="https://tailwind-elements.com/">
                        Tailwind Elements
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer; */
}
