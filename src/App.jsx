import "./App.css";
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Create from "./pages/CRUD/Create";
import Details from "./pages/CRUD/Details";
import SingleRecipe from "./pages/CRUD/SingleRecipe";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                            <ProfilePage />
                        </IsPrivate>
                    }
                />

                <Route
                    path="/signup"
                    element={
                        <IsAnon>
                            <SignupPage />
                        </IsAnon>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <IsAnon>
                            <LoginPage />
                        </IsAnon>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <IsPrivate>
                            <Create />
                        </IsPrivate>
                    }
                />
                <Route
                    path="/details"
                    element={
                            <Details />
                   
                    }
                />
                <Route
                    path="/single/:id"
                    element={
                        
                            <SingleRecipe />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
