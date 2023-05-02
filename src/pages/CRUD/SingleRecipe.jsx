import axios from "axios"
import React, { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useReactToPrint } from "react-to-print"
import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"
//e
const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

const SingleRecipe = (props) => {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn, user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`${API_URL}/pages/CRUD/${id}`).then((response) => {
            setRecipe(response.data)
        })
    }, [])

    const Delete = (id) => {
        axios
            .post(`${API_URL}/pages/CRUD/${id}/delete`)
            .then(props.refresh())
            .then(navigate("/profile"))
    }

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "BE CHEF",
        pageStyle: "print",
        onafterprint: () => alert("print success"),
    })

    return (
        <>
            <div
                ref={componentRef}
                className="relative flex items-center justify-center bg-gray-300 pt-5 pb-10"
            >
                {recipe && (
                    <div className="mt-5 max-w-2xl overflow-hidden rounded-2xl bg-gray-50 shadow-lg ">
                        {!recipe.image && (
                            <img
                                alt="user image"
                                className="h-auto w-full  rounded-t-2xl"
                                src="https://cdn-icons-png.flaticon.com/512/1134/1134760.png"
                            />
                        )}
                        {recipe.image && (
                            <img
                                alt="user"
                                className="h-auto w-full  rounded-t-2xl "
                                src={recipe?.image}
                            />
                        )}
                        <div className="place-self-start px-6 py-4">
                            <div className="mb-2 text-4xl font-bold ">
                                {recipe.name}
                            </div>
                            <h4 className="text-xl  text-gray-700">
                                <strong>Region / Country: </strong>{" "}
                                {recipe.region}
                            </h4>
                            <h4 className="text-xl text-gray-700">
                                <strong>food Type: </strong> {recipe.type}
                            </h4>
                            <h4 className="text-xl text-gray-700">
                                <strong>Services: </strong> {recipe.service}
                            </h4>
                            <div className="p-6  text-start">
                                <div className="grid list-inside justify-items-start text-base">
                                    <h4>
                                        <strong>Ingredients:</strong>
                                    </h4>
                                    {recipe.ingredients.length ? (
                                        recipe.ingredients.map((eachStep) => {
                                            return (
                                                <li>
                                                    {`${eachStep.quantity} ${eachStep.measure} ${eachStep.singleIngredient}`}
                                                </li>
                                            )
                                        })
                                    ) : (
                                        <h3></h3>
                                    )}
                                </div>

                                <h4 className="text-base text-gray-700"> </h4>
                                <div className="grid list-inside content-start justify-items-start pt-6">
                                    <h4>
                                        <strong>Instructions:</strong>
                                    </h4>
                                    {recipe.instructions.length ? (
                                        recipe.instructions.map(
                                            (eachInstruction) => {
                                                return (
                                                    <li>{eachInstruction}</li>
                                                )
                                            }
                                        )
                                    ) : (
                                        <h3></h3>
                                    )}
                                </div>
                            </div>
                            <h4 className="text-base text-gray-700">
                                <strong>Tips: </strong> {recipe.tips}
                            </h4>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {!isLoggedIn ? (
                                <>
                                    <a href="/recipesHome">
                                        <span className="mr-2 mb-2  inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700  hover:text-white">
                                            explore more recipes
                                        </span>
                                    </a>
                                </>
                            ) : (
                                <a href="/details">
                                    <span className="mr-2 mb-2  inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700  hover:text-white">
                                        explore more recipes
                                    </span>
                                </a>
                            )}
                            <span
                                onClick={handlePrint}
                                className="mr-2 mb-2  inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
                            >
                                Print
                            </span>
                            {/* <Link  to={`/edit/${id}`}> Edit</Link> */}
                            {/* <Link  to={`/edit/${id}`}> Edit</Link> */}
                            {isLoggedIn && recipe.owner.id === user._id && (
                                <>
                                    <a href="/details"></a>
                                    <span
                                        onClick={() => Delete(recipe._id)}
                                        className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
                                    >
                                        Delete
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SingleRecipe
