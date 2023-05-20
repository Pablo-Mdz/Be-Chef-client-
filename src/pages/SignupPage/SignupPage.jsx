import "./SignupPage.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"
import service from "../../services/cloudinary.config"
import { Alert } from "@material-tailwind/react"

function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)
    const [imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate()
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const handleName = (e) => setName(e.target.value)

    const handleFileUpload = (e) => {
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])

        service
            .uploadImage(uploadData)
            .then((response) => {
                console.log(response)
                setImageUrl(response.secure_url)
            })
            .catch((err) =>
                console.log("Error while uploading the file: ", err)
            )
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault()
        const requestBody = { email, password, name, imageUrl }

        authService
            .signup(requestBody)
            .then((response) => {
                navigate("/login")
            })
            .catch((error) => {
                const errorDescription = error.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <div className=" flex  items-center justify-center  bg-[url('https://images.unsplash.com/photo-1556910101-a533e487de15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover ">
            <div className=" mt-5 mb-10 ">
                <h1 className="text-bold mb-8 text-3xl text-slate-900 underline">
                    Sign Up
                </h1>

                <div className="block max-w-md rounded-lg bg-slate-100 p-6 shadow-lg">
                    <form onSubmit={handleSignupSubmit}>
                        <div className="form-group mb-6">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleName}
                                className="form-control m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
                                className="form-control m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
                                className="form-control m-0
                        block
                        w-full
                        rounded
                        border
                        border-solid
                        border-gray-300
                        bg-white bg-clip-padding
                        px-3 py-1.5 text-base
                        font-normal
                        text-gray-700
                        transition
                        ease-in-out
                        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                                placeholder="Password"
                            />
                        </div>

                        {/* image upload  */}
                        <div className="grid grid-cols-1 space-y-2">
                            <label className="text-sm font-bold tracking-wide text-gray-500">
                                Add your photo here
                            </label>
                            <div className="flex w-full items-center justify-center">
                                <label className="group flex h-60 w-full flex-col rounded-lg border-4 border-dashed p-10 text-center ">
                                    <div className="flex h-full w-full flex-col items-center items-center justify-center text-center  ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 text-blue-400 group-hover:text-blue-600 "
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
                                        <div className="mx-auto -mt-10 flex max-h-48 w-2/5 flex-auto">
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
                        <div className="form-group form-check mb-6 text-center">
                            {errorMessage && (
                                <Alert className="error-message ">
                                    {errorMessage}
                                </Alert>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="
      rounded
      bg-blue-600
      px-6
      py-2.5
      text-xs
      font-medium
      uppercase
      leading-tight
      text-white
      shadow-md
      transition duration-150
      ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
      focus:shadow-lg focus:outline-none
      focus:ring-0
      active:bg-blue-800
      active:shadow-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="mt-5 content-center items-center justify-center text-slate-300 ">
                    <p>Already have account?</p>
                    <Link className="hover:text-gray-300" to={"/login"}>
                        {" "}
                        Login
                    </Link>
                </div>
            </div>
            <hr className="my-2 border-black" />
        </div>
    )
}

export default SignupPage
