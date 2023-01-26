import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="sticky top-[100vh] w-screen bg-gradient-to-r from-gray-50 to-gray-700 pt-4 pb-3 ">
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
                                as a final project of the Ironhack Berlin
                                bootcamp, It does not have any commercial or
                                lucrative purpose.
                            </h5>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase  text-white  text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                target="_blank"
                                                className="text-slate-400 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https:/pablocigoy.com/"
                                            >
                                                My Personal web page
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                target="_blank"
                                                className="text-slate-400 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https://github.com/Pablo-Mdz"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                target="_blank"
                                                className="text-slate-400 hover:text-white font-semibold block pb-2 text-sm"
                                                href="https://www.linkedin.com/in/pablo-cigoy/"
                                            >
                                                Linkedin
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                target="_blank"
                                                className="text-slate-400 hover:text-white font-semibold block pb-2 text-sm"
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
                                {""} Final Project - Ironhack Bootcamp - Berlin
                                2022 by {""}
                                <a
                                    className="hover:text-slate-300"
                                    target="_blank"
                                    href="https://github.com/Pablo-Mdz/Be-Chef-client-"
                                >
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
