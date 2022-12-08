import "./HomePage.css";
import {Link, NavLink} from "react-router-dom";
import SingleRecipe from "../CRUD/SingleRecipe";
import photo from "../../images/quesos.jpg";
function HomePage() {
    return (
        <div >
            <h1>Be Chef </h1>
            <NavLink to="/details">
                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card" style={{width: "20rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">All recepies</h5>
                    </div>
                </div>
            </NavLink>
            <SingleRecipe />
            <img className="opacity-30"  src={photo} alt="chees" />
        </div>
    );
}

export default HomePage;
