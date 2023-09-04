import Card from "./Card";
export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((character,index) => (
        <Card
         onClose={() => window.alert('Emulamos que se cierra la card')}
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
