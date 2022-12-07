import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";
import SingleRecipe

from "../CRUD/SingleRecipe";
function HomePage() {
    return (
        <div>
            <h1>Home page Test </h1>
            <NavLink to="/details">
          <div className="card" style={{ width: "20rem" }}>
            
            <div className="card-body">
              <h5 className="card-title">All recepies</h5>
            </div>
          </div>
        </NavLink>
        <SingleRecipe />
        </div>
    );
}
//gg
export default HomePage;
