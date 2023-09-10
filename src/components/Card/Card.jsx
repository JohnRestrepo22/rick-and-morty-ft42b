import styles from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <img className={styles.image} src={props.image} alt="" />
      <div className={styles.cardInfo}>
        <h2>{props.name}</h2>
        <h3>{props.status}</h3>
        <h3>{props.species}</h3>
        <h3>{props.gender}</h3>
        <h3>{props.origin.name}</h3>
      </div>
    </div>
  );
}