import SearchBar from "./SearchBar";
export default function NavBar(props) {
    return (
       <div>
           <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }
 