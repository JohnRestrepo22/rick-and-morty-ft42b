import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }, [id]);
console.log(character)
  return (
    <div>
      <h1>Datos</h1>
      <img src={character.image} alt={character.image} />
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h3>{character.gender}</h3>
      
      

    </div>
  );
}


