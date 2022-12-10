import "./HomePage.css";
import {Link, NavLink} from "react-router-dom";
import SingleRecipe from "../CRUD/SingleRecipe";
import photo from "../../images/quesos.jpg";
function HomePage() {
    return (
        <>
            <div className=" bg-sky-300">
                <NavLink to="/details">
                    <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card">
                        <div className="card-body">
                            <button
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="submit"
                            >
                                See all recepies
                            </button>
                        </div>
                    </div>
                    <SingleRecipe />
                </NavLink>
            </div> 
            {/* <!-- component --> */}
            {/* <!-- This is an example component --> */}
                     {/* <img className="opacity-30"  src={photo} alt="chees" /> */}
                       
        </>
    );
}

export default HomePage;
