import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import axios from "axios"
import { useContext } from "react"
// using fetch
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const CreateRecipe = (props) => {
    const [image, setImage] = useState("")
    const { user } = useContext(AuthContext)
    const { id } = useParams()

    const [edit, setEdit] = useState(false)

    // useEffect(() => {
    //     if (props.data)
    //         setEdit(props.data.find((element) => element._id === id));
    //     setInstruction([...edit.instructions]);
    //     // setNewIngredient([...edit.ingredients]);
    // }, []);

    const [ingredient, setIngredient] = useState([])
    const [NewIngredient, setNewIngredient] = useState({
        quantity: "",
        measure: "",
        singleIngredient: "",
    })
    const [instruction, setInstruction] = useState([])
    const [NewInstruction, setNewInstruction] = useState([])
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
        owner: { id: user._id, imageUser: user.imageUrl },
    })
    const navigate = useNavigate()

    const handleNewIngredient = (e) => {
        const { name, value } = e.target
        setNewIngredient({
            ...NewIngredient,
            [name]: value,
        })
    }

    const addIngredient = (e) => {
        e.preventDefault()
        setIngredient([...ingredient, NewIngredient])
        setNewIngredient({ quantity: "", measure: "", singleIngredient: "" })
    }

    function deleteIngredient(item) {
        let array = [...ingredient]
        let index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1)
            setIngredient(array)
        }
    }

    const handleNewInstruction = (e) => {
        const { value } = e.target
        console.log(value)
        setNewInstruction(value)
    }
    const addInstruction = (e) => {
        e.preventDefault()
        setInstruction([...instruction, NewInstruction])
        setNewInstruction("")
    }

    function deleteInstruction(item) {
        let array = [...instruction]
        let index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1)
            setInstruction(array)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "auh8nzbq")
        data.append("cloud_name", "be-chef")

        fetch("https://api.cloudinary.com/v1_1/be-chef/image/upload", {
            method: "post",
            body: data,
        })
            .then((resp) => {
                return resp.json()
            })
            .then((data) => {
                data && console.log(data.url)
                return data.url
            })
            .then((image) => {
                const body = {
                    ...formData,
                    image,
                    ingredients: ingredient,
                    instructions: instruction,
                }
                console.log(" body before axios", body)
                axios
                    .post(`${API_URL}/pages/CRUD/create`, body)

                    .then((response) => {
                        console.log(
                            "alright, updated with",
                            response,
                            formData,
                            body
                        )

                        setImage("")
                        props.refresh()
                        navigate("/profile")
                    })
            })

        setFormData("")
    }
    formData.image && console.log(formData.image)

    return (
        <>
            <div className="mt-10 xl:mt-0">
                <div className="mb-4 rounded-lg bg-white px-8 pt-6 pb-8 shadow-md">
                    <div className=" mt-5 md:col-span-2 md:mt-0">
                        <form
                            className=" mb-4 rounded-lg bg-slate-100 px-8 pt-6 pb-8 shadow-md "
                            onSubmit={handleSubmit}
                        >
                            <div className="overflow-hidden shadow xl:rounded-xl ">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-7">
                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Recepie name "
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                value={
                                                    // edit
                                                    //     ? edit.name
                                                    //     :
                                                    formData.name
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="type"
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                                                <option>Central America</option>
                                                <option>Nord America</option>
                                                <option>Asia</option>
                                                <option>Africa</option>
                                                <option>Oceania</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="service"
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                                                <option>+ 20</option>
                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <select
                                                name="time"
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        time: e.target.value,
                                                    })
                                                }
                                                value={formData.time}
                                            >
                                                <option>
                                                    Select the Time to prepare
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
                                                <option>+ 24 hors</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <input
                                                type="file"
                                                className="md:text-md block h-10 w-full rounded-md border  border-gray-300 bg-white px-2 py-1 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                                                placeholder="quantity"
                                                className="md:text-md block h-10 w-32 rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                onChange={handleNewIngredient}
                                                value={NewIngredient.quantity}
                                            />
                                        </div>
                                        {/* // add measure  */}

                                        <div className="col-span-1 sm:col-span-1">
                                            <select
                                                name="measure"
                                                className="md:text-md block h-10 w-40 rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                onChange={handleNewIngredient}
                                                value={NewIngredient.measure}
                                            >
                                                <option>Select measure</option>
                                                <option>g</option>
                                                <option>cc</option>
                                                <option>ml</option>
                                                <option>L</option>
                                                <option>Kg</option>
                                                <option>Cup</option>
                                                <option>Table spoon</option>
                                                <option>Cafe spoon</option>
                                                <option>unity</option>
                                                <option>.</option>
                                            </select>
                                        </div>

                                        {/* // add ingredient  */}
                                        <div className="col-span-3 sm:col-span-4">
                                            <div className="flex ">
                                                <input
                                                    type="text"
                                                    name="singleIngredient"
                                                    className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                    placeholder=" add ingredients"
                                                    onChange={
                                                        handleNewIngredient
                                                    }
                                                    value={
                                                        NewIngredient.singleIngredient
                                                    }
                                                />
                                                <button
                                                    className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
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
                                                                                        deleteIngredient(
                                                                                            eachStep
                                                                                        )
                                                                                    }
                                                                                    className="my-1 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
                                                                                >
                                                                                    Delete
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    )
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
                                                    className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                                    placeholder="Instructions"
                                                    onChange={
                                                        handleNewInstruction
                                                    }
                                                    value={NewInstruction}
                                                />
                                                <button
                                                    className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
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
                                                                                        deleteInstruction(
                                                                                            eachInstruction
                                                                                        )
                                                                                    }
                                                                                    className="my-1 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
                                                                                >
                                                                                    Delete
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    )
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
                                                className="md:text-md block h-10 w-full rounded-md  border border-gray-300 bg-white px-2 font-medium shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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
                                <div className="justify-center bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    )
}

export default CreateRecipe
