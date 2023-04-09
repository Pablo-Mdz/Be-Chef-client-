import "./LoginPage.css"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import authService from "../../services/auth.service"

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) =>
        setEmail(e.target.value)
    const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) =>
        setPassword(e.target.value)

    const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const requestBody = { email, password }

        //this is using axios
        // Send a request to the server using axios
        /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

        // Or using a service
        authService
            .login(requestBody)
            .then((response) => {
                // If the POST request is successful store the authentication token,
                // after the token is stored authenticate the user
                // and at last navigate to the home page
                storeToken(response.data.authToken)
                authenticateUser()
                navigate("/")
            })
            .catch((error) => {
                // If the request resolves with an error, set the error message in the state
                const errorDescription = error.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <div className="flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1635321350281-e2a91ecffd00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2846&q=80')]  bg-cover bg-center">
            <div className=" mt-20 mb-20 ">
                <h1 className="text-bold mb-6 text-2xl text-slate-200 underline">
                    <>Login</>
                </h1>

                <div className="block content-center rounded-lg bg-slate-100 p-6 shadow-lg">
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group mb-6">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label mb-2 inline-block text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                                className="form-control m-0 block
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
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mb-6">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label mb-2 inline-block text-gray-700"
                            >
                                Password
                            </label>
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
                <div className="mt-5 text-white">
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}

                    <p>Don't have an account yet?</p>
                    <Link
                        className=" text-white hover:text-gray-300"
                        to={"/signup"}
                    >
                        {" "}
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
