import styles from "./Detail.module.css"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
export default function Detail(props) {
    const {detailId } =useParams();
    const [character,setCharacter] = useState({});
    console.log(id)
    console.log(props.id)
    console.log(detailId)

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${props.id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);
    return(
        <div>
            <h1>Datos</h1>
            <h2>{character.name}</h2>
        </div>
    )
}

