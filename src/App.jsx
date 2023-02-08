import "./App.css";
import {Routes, Route} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Footer from "./components/Navbar/Footer";
import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import Create from "./pages/CRUD/Create";
import Details from "./pages/CRUD/Details";
import SingleRecipe from "./pages/CRUD/SingleRecipe";
import RecipesHome from "./pages/CRUD/RecipesHome";
//dsv
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function App() {
    const [data, setData] = useState([]);

    const refresh = () => {
        axios
            .get(`${API_URL}/pages/CRUD/details`)
            .then((response) => setData(response.data), console.log(data));
    };
    useEffect(() => {
        refresh();
    }, []);
    console.log(data);

    return (
        <div className="App ">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/recipesHome"
                    element={<RecipesHome data={data} refresh={refresh} />}
                />

                <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                            <ProfilePage data={data} refresh={refresh} />
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
                            <Create refresh={refresh} />
                        </IsPrivate>
                    }
                />

                <Route
                    path="/details"
                    element={<Details data={data} setData={setData} />}
                />

                <Route
                    path="/single/:id"
                    element={<SingleRecipe refresh={refresh} />}
                />
                <Route
                    path="/edit/:id"
                    element={<Create refresh={refresh} data={data} />}
                />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
