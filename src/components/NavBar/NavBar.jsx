import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
export default function NavBar(props) {
    return (
       <div className={styles.redtext}>
           <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }
 