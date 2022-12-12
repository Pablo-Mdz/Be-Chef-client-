//clg

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

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_URL}/pages/CRUD/details`)
            //   ${id}
            .then((response) => setData(response.data), console.log(data));
    }, []);
    console.log(data)
    return (
        <div className="App">
            <Navbar />
           

            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/profile"
                    element={
                        <IsPrivate>
                            <ProfilePage data={data} />
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
                <Route path="/details" element={<Details data={data} />} />
                <Route path="/single/:id" element={<SingleRecipe />} />
            </Routes>
              
            {/* <Footer /> */}


        </div>
    );
}

export default App;
