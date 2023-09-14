import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
import { NavLink  } from "react-router-dom";
export default function NavBar(props) {
    return (
       <div className={styles.redtext}>
        <NavLink to="/about">
            <button>About</button>
        </NavLink>
        <NavLink to={"/home"}>
            <button>Home</button>
        </NavLink>
           <SearchBar onSearch={props.onSearch} />
           <NavLink to="/favorites">
            <button>Favorites</button>
           </NavLink>
       </div>
    );
 }
 