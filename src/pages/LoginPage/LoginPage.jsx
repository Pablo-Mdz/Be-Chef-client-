import "./LoginPage.css";
import {useState, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const {storeToken, authenticateUser} = useContext(AuthContext);

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = {email, password};

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
                storeToken(response.data.authToken);
                authenticateUser();
                navigate("/");
            })
            .catch((error) => {
                // If the request resolves with an error, set the error message in the state
                const errorDescription = error.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center">
            <div className=" mt-20 mb-20 ">
               
                <h1 className="mb-6 text-2xl"><>Login</></h1>
       
                <div className="content-center block p-6 rounded-lg shadow-lg bg-white">
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group mb-6">
                            <label
                                for="exampleInputEmail1"
                                className="form-label inline-block mb-2 text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmail}
                                className="form-control
                    block
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
                                placeholder="Enter email"
                            />
                            {/* <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                    else.</small> */}
                        </div>
                        <div className="form-group mb-6">
                            <label
                                for="exampleInputPassword1"
                                className="form-label inline-block mb-2 text-gray-700"
                            >
                                Password
                            </label>
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
                        {/* <div class="form-group form-check mb-6"> */}
                        {/* <input type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck1">
                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Check me out</label> */}
                        {/* </div> */}
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

                <p>Don't have an account yet?</p>
                <Link className="hover:text-gray-300" to={"/signup"}> Sign Up</Link>
            </div>
            </div>

        </div>
    );
}

export default LoginPage;
