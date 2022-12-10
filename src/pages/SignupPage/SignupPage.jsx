import "./SignupPage.css";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = {email, password, name};

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
