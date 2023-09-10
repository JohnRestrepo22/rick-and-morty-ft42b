import Card from "../Card/Card";
import styles from "./Cards.module.css"
export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.container}>
      {characters.map((character,index) => (
        <Card
         onClose={() => props.onClose(character.id)}
         key={index}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
        />
      ))}
    </div>
  );
}
