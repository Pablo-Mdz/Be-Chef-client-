import React from "react";

const Footer = () => {
  
    return (
        <div>
            <footer
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

export default Footer;
