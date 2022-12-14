import React from "react";

function HomePage() {
    return (
        <>
            <main>
                <div
                    className="relative pt-8 pb-64 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh",
                    }}
                >
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white italic font-semibold text-5xl text-black ">
                                        Be your own chef
                                    </h1>
                                    <p className="mt-2 italic text-lg text-black">
                                        Create and save your recipes to be able
                                        to use them in the future or to share
                                        them with whoever you want!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{height: "70px"}}
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
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap ">
                            <div className="lg:pt-16 pt- w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                    <a href="/signup">   <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                                />
                                            </svg>
                                        </div>
                                        </a>
                                        <a href="/signup">
                                            <h6 className="text-xl font-semibold">
                                                Create an account
                                            </h6>
                                        </a>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            It's totally free and fast. in your
                                            profile you can save all your
                                            recipes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                    <a href="/create">  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                />
                                            </svg>
                                        </div>
                                        </a>
                                        <a href="/create">
                                            <h6 className="text-xl font-semibold">
                                                Share your best recipes
                                            </h6>
                                        </a>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            You can create as many recipes as
                                            you want to share with everyone. You
                                            can post your recipes to save them
                                            or also share your recipes with
                                            friends and family.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                    <a href="/details">   <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                                                />
                                            </svg>
                                        </div>
                                        </a>
                                        <a href="/details">
                                            {" "}
                                            <h6 className="text-xl font-semibold">
                                                Learn new recipes from the world
                                            </h6>
                                        </a>

                                        <p className="mt-2 mb-4 text-gray-600">
                                            Here you can find a variety of
                                            delicious recipes from all over the
                                            world. We have a great selection of
                                            meals from breakfast to dinner, and
                                            from appetizers to desserts. Check
                                            out our Recipe Finder to find the
                                            perfect dish for you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-amber-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Express yourself
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Cooking is one of the greatest activities to
                                    do alone, with family or with friends. It's
                                    a way of self-expression and experimenting
                                    with different ingredients to create
                                    something new and delicious. Also enjoy the
                                    feeling of accomplishment after creating
                                    something delicious.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                    Cooking is a way to connect with friends and
                                    family and I find it very rewarding to share
                                    a meal with them. Experiment with recipes
                                    and trying new flavors. Cooking is an art
                                    form and as such, it should be enjoyed!
                                </p>
                                <a
                                    href="/details"
                                    className="font-bold text-gray-800 mt-8"
                                >
                                    Enjoy cooking new recipes here!
                                </a>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                        className="w-full align-middle rounded-t-lg h-8/12"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px",
                                            }}
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            original recipes
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Find all the recipes you would like
                                            to make and share all the ones you
                                            love!.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <i className="fas fa-rocket text-xl"></i>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        A growing company
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        The extension comes with three pre-built
                                        pages to help you get started faster.
                                        You can change the text and images and
                                        you're good to go.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fas fa-fingerprint"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Carefully crafted
                                                        components
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="fab fa-html5"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Amazing page examples
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <i className="far fa-paper-plane"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Dynamic components
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Here are our heroes
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-gray-600">
                                    According to the National Oceanic and
                                    Atmospheric Administration, Ted, Scambos,
                                    NSIDClead scentist, puts the potentially
                                    record maximum.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-1-800x800.jpg").default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{maxWidth: "120px"}}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Ryan Tompson
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-2-800x800.jpg").default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{maxWidth: "120px"}}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Romina Hadid
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-3-800x800.jpg").default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{maxWidth: "120px"}}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Alexa Smith
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            UI/UX Designer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        // src={require("assets/img/team-4-470x470.png").default}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{maxWidth: "120px"}}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Jenna Kardi
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </button>
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </button>
                                            <button
                                                className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="pb-20 relative block bg-gray-900">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
                                className="text-gray-900 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Build something
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    Put the potentially record low maximum sea
                                    ice extent tihs year down to low ice.
                                    According to the National Oceanic and
                                    Atmospheric Administration, Ted, Scambos.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-medal text-xl"></i>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Excelent Services
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-poll text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Grow your market
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Launch time
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
            {/* <Footer /> */}
        </>
    );
}

export default HomePage;
