import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/auth.context";
import axios from "axios";
import {useContext} from "react";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

const CreateRecipe = (props) => {
    const [image, setImage] = useState("");
    const {user} = useContext(AuthContext);

    const [ingredient, setIngredient] = useState([]);
    const [NewIngredient, setNewIngredient] = useState({
        quantity: "",
        measure: "",
        singleIngredient: "",
    });

    const [instruction, setInstruction] = useState([]);
    const [NewInstruction, setNewInstruction] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        region: "",
        type: "",
        image: "",
        time: "",
        service: "",
        ingredients: [],
        instructions: [],
        tips: "",
        reviews: [],
        owner:{ id : user._id,
            imageUser: user.imageUrl
        }
    });
    const navigate = useNavigate();

    //new ingredients
    const handleNewIngredient = (e) => {
        const {name, value} = e.target;
        setNewIngredient({
            ...NewIngredient,
            [name]: value,
        });
    };

    const addIngredient = (e) => {
        e.preventDefault();
        setIngredient([...ingredient, NewIngredient]);
        setNewIngredient({quantity: "", measure: "", singleIngredient: ""});
    }

    // delete ingredient
    function deleteIngredient(item) {
        let array = [...ingredient]; 
        let index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1);
            setIngredient(array);
        }
      }
  
      
      //new instructions
      const handleNewInstruction = (e) => {
          const {value} = e.target;
          console.log(value);
          setNewInstruction(value);
        };
        const addInstruction = (e) => {
            e.preventDefault();
            setInstruction([...instruction, NewInstruction]);
            setNewInstruction("");
        };
        

        // delete instruction
        function deleteInstruction(item) {
            let array = [...instruction]; 
            let index = array.indexOf(item)
            if (index !== -1) {
                array.splice(index, 1);
                setInstruction(array);
            }
          }



    const handleSubmit = (e) => {
        e.preventDefault();

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
                data && console.log(data.url);
                return data.url;
            })
            .then((image) => {
                const body = {
                    ...formData,
                    image,
                    ingredients: ingredient,
                    instructions: instruction,
                };
                console.log(" body before axios", body);
                axios
                    .post(`${API_URL}/pages/CRUD/create`, body)

                    .then((response) => {
                        console.log(
                            "alright, updated with",
                            response,
                            formData,
                            body
                        );

                      
                        setImage("");
                        props.refresh();
                        navigate("/profile");
                    });
            });

        setFormData("");
    };
    formData.image && console.log(formData.image);

    return (
        <>
            

            <div className="mt-10 xl:mt-0">
                <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded-lg shadow-md">
                    <div className=" mt-5 md:mt-0 md:col-span-2">
                        <form
                            className=" px-8 pt-6 pb-8 mb-4 bg-slate-100 rounded-lg shadow-md "
                            onSubmit={handleSubmit}
                        >
                            <div className="shadow overflow-hidden xl:rounded-xl ">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-7">
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Recepie name "
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                value={formData.name}
                                           
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        type: e.target.value,
                                                    })
                                                }
                                                value={formData.type}
                                      
                                            >
                                                <option>
                                                    Select a type of food
                                                </option>
                                                <option>Sweet</option>
                                                <option>Salty</option>
                                                <option>Healthy</option>
                                                <option>Meat</option>
                                                <option>Chiken</option>
                                                <option>Fish</option>
                                                <option>Vegetarian</option>
                                                <option>Vegan</option>
                                                <option>Bakery</option>
                                                <option>Desserts</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="region"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        region: e.target.value,
                                                    })
                                                }
                                                value={formData.region}
                                            >
                                                <option>Select Region</option>
                                                <option>European</option>
                                                <option>Sud America</option>
                                                <option>
                                                    Central America{" "}
                                                </option>
                                                <option>Nord America</option>
                                                <option>Asia</option>
                                                <option>Africa</option>
                                                <option>Oceania</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="service"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        service: e.target.value,
                                                    })
                                                }
                                                value={formData.service}
                                            >
                                                <option>
                                                    Quantiy of portions
                                                </option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>8</option>
                                                <option>10</option>
                                                <option>15</option>
                                                <option>20</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="time"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        time: e.target.value,
                                                    })
                                                }
                                                value={formData.time}
                                            >
                                                <option>
                                                    Select the Time to
                                                    ingredient
                                                </option>
                                                <option>10 min.</option>
                                                <option>15 min.</option>
                                                <option>20 min.</option>
                                                <option>25 min.</option>
                                                <option>30 min.</option>
                                                <option>35 min.</option>
                                                <option>40 min.</option>
                                                <option>45 min.</option>
                                                <option>50 min.</option>
                                                <option>1 Hour</option>
                                                <option>1:15 Hour</option>
                                                <option>1:30 hour</option>
                                                <option>1:45 hour</option>
                                                <option>2 ~ 5 hors</option>
                                                <option>5 ~10 hors</option>
                                                <option>10 ~ 24 hors</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="file"
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                name="image"
                                                onChange={(e) =>
                                                    setImage(e.target.files[0])
                                                }
                                            />
                                        </div>

                                        {/* add quantity  */}
                                        <div className="col-span-2 sm:col-span-1">
                                            <input
                                                type="Number"
                                                name="quantity"
                                                placeholder="quantity  "
                                                className="px-2 block w-32 h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={handleNewIngredient}
                                                value={NewIngredient.quantity}
                                            />
                                        </div>
                                        {/* // add measure  */}

                                        <div className="col-span-1 sm:col-span-1">
                                            <select
                                                name="measure"
                                                className="px-2 block w-40 h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={handleNewIngredient}
                                                value={NewIngredient.measure}
                                            >
                                                <option>Select measure</option>
                                                <option>g</option>
                                                <option>cc</option>
                                                <option>ml</option>
                                                <option>L</option>
                                                <option>Kg</option>
                                                <option>unity</option>
                                            </select>
                                        </div>

                                        {/* // add ingredient  */}
                                        <div className="col-span-3 sm:col-span-4">
                                            <div className="flex ">
                                                <input
                                                    type="text"
                                                    name="singleIngredient"
                                                    className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                    placeholder=" add ingredients"
                                                    onChange={
                                                        handleNewIngredient
                                                    }
                                                    value={
                                                        NewIngredient.singleIngredient
                                                    }
                                                />
                                                <button
                                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                                    onClick={addIngredient}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-span-3 sm:col-span-6">
                                            <div>
                                                <ol className="list-decimal pl-6 text-left font-bold">
                                                    <div>
                                                        {ingredient.length ? (
                                                            ingredient.map(
                                                                (eachStep) => {
                                                                    return (
                                                                        <div className="flex justify-between">
                                                                            <div>
                                                                                <ul>
                                                                                    {`${eachStep.quantity} ${eachStep.measure} ${eachStep.singleIngredient}`}
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <span
                                                                                    onClick={() =>
                                                                                        deleteIngredient(eachStep)
                                                                                    }
                                                                                    className="inline-block bg-gray-200 hover:bg-red-500 rounded-full px-3 py-1 hover:text-white text-sm font-semibold text-red-700 mr-2 my-1 hover:border-transparent"
                                                                                >
                                                                                    Delete
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            )
                                                        ) : (
                                                            <h3></h3>
                                                        )}
                                                    </div>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <div className="flex ">
                                                <input
                                                    type="text"
                                                    className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                    placeholder="Instructions"
                                                    onChange={
                                                        handleNewInstruction
                                                    }
                                                    value={NewInstruction}
                                                />
                                                <button
                                                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                                    onClick={addInstruction}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div>
                                                <ol className="list-decimal pl-6 text-left font-bold">
                                                    <div>
                                                        {instruction.length ? (
                                                            instruction.map(
                                                                (
                                                                    eachInstruction
                                                                ) => {
                                                                    return (
                                                                        <div className="flex justify-between">
                                                                            <div>
                                                                                <ul>
                                                                                    {
                                                                                        eachInstruction
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                            <span
                                                                                    onClick={() =>
                                                                                        deleteInstruction(eachInstruction)
                                                                                    }
                                                                                    className="inline-block bg-gray-200 hover:bg-red-500 rounded-full px-3 py-1 hover:text-white text-sm font-semibold text-red-700 mr-2 my-1 hover:border-transparent"
                                                                                >
                                                                                    Delete
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            )
                                                        ) : (
                                                            <h3></h3>
                                                        )}
                                                    </div>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="tips"
                                                placeholder="Some secret left?... "
                                                className="px-2 block w-full h-10 font-medium  border border-gray-300 bg-white rounded-md shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 md:text-md"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        tips: e.target.value,
                                                    })
                                                }
                                                value={formData.tips}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Save Recepie
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRecipe;
