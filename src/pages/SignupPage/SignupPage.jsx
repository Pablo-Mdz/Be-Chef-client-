import "./SignupPage.css";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import authService from "../../services/auth.service";
import service from "../../services/cloudinary.config";
import {Alert} from "@material-tailwind/react";
//try
function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        service
            .uploadImage(uploadData)
            .then((response) => {
                console.log(response);
                // console.log("response is: ", response);
                // response carries "secure_url" which we can use to update the state
                setImageUrl(response.secure_url);
            })
            .catch((err) =>
                console.log("Error while uploading the file: ", err)
            );
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = {email, password, name, imageUrl};

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
        <div className=" flex  justify-center items-center  bg-[url('https://images.unsplash.com/photo-1556910101-a533e487de15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover ">
            <div className=" mt-5 mb-10 ">
                <h1 className="mb-8 text-slate-900 underline text-bold text-3xl">
                    Sign Up
                </h1>

                <div className="block p-6 rounded-lg shadow-lg bg-slate-100 max-w-md">
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

                        {/* image upload  */}
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold text-gray-500 tracking-wide">
                                Add your photo here
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center ">
                                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-blue-400 group-hover:text-blue-600 "
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>
                                        <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img
                                                className="has-mask h-36 object-center"
                                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                                alt="freepik image"
                                            />
                                        </div>
                                        <p className="pointer-none text-gray-500 ">
                                            <span className="text-sm">
                                                Upload
                                            </span>{" "}
                                            an image here <br />
                                        </p>
                                    </div>
                                    <input
                                        name="imageUrl"
                                        type="file"
                                        onChange={(e) => handleFileUpload(e)}
                                    />
                                </label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300">
                            <span>File type: jpg,jpeg,png,avif </span>
                        </p>
                        <div></div>
                        <div className="form-group form-check text-center mb-6">
                            {errorMessage && (
                                <Alert className="error-message ">
                                    {errorMessage}
                                </Alert>
                            )}
                        </div>
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
                <div className="mt-5 text-slate-300 justify-center items-center content-center ">
                    <p>Already have account?</p>
                    <Link className="hover:text-gray-300" to={"/login"}>
                        {" "}
                        Login
                    </Link>
                </div>
            </div>
            <hr className="my-2 border-black" />
        </div>
    );
}

export default SignupPage;
