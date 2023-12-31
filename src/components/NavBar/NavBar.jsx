import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div className={styles.nab}>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <NavLink to={"/home"}>
        <button>Home</button>
      </NavLink>

      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
