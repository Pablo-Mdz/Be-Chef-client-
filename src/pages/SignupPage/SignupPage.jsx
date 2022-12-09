import "./SignupPage.css";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import authService from "../../services/auth.service";
import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [requestBody, setRequestBody] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.files[0]);
    image && console.log(image);
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "auh8nzbq");
        data.append("cloud_name", "be-chef");

        fetch("https://api.cloudinary.com/v1_1/be-chef/image/upload", {
            method: "post",
            body: data,
        })
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                data && console.log("url", data);
                return data.url;
            })
            .then((img) => {
                console.log("img", img);
                setRequestBody({email, password, name, img});

                const body = {email, name, password, img}; //...formData,
                console.log(requestBody);
                requestBody !== {} &&
                    axios
                        .post(`${API_URL}auth/signup`, requestBody) ///auth/signup
                        .then((response) => {
                            console.log("alright, updated with", response);
                            setImage("");
                            navigate("/login");
                        });
            });
        // Send a request to the server using axios
        /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

        // Or using a service
        authService
            .signup(requestBody)
            .then((response) => {
                // If the POST request is successful redirect to the login page
                navigate("/login");
            })
            .catch((error) => {
                // If the request resolves with an error, set the error message in the state
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>Sign Up</h1>

            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form onSubmit={handleSignupSubmit}>
                    <div className="form-group mb-6">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleName}
                            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                        />
                    </div>

                    <div className="mt-2 flex justify-center px-6 pt-2 pb-2 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-0 text-center">
                            <svg
                                className="mx-auto h-5 w-12 text-white"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    for="file-upload"
                                    classNmae="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span className="">Upload a Picture</span>
                                    <input
                                        onChange={handleImage}
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                    />
                                </label>
                                <p className="pl-1 text-white">
                                    or drag and drop
                                </p>
                            </div>
                            <p className="text-xs text-white">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                    </div>

                    <div className="form-group form-check text-center mb-6"></div>
                    <button
                        type="submit"
                        className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="mt-5">
                {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                )}

                <p>Already have account?</p>
                <Link to={"/login"}> Login</Link>
            </div>
        </div>
    );
}

export default SignupPage;
