import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";
const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) => {
  const [isfav, setIsFav] = useState(false);
  const handleFavorite = () => {
    isfav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isfav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={styles.cardcontainer}>
      <div className={styles.buttonContainer}>
        <button onClick={onClose}>X</button>
      
      {isfav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      </div>
      
      <Link className={styles.link} to={`/detail/${id}`}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.cardInfo}>
          <h2>{name}</h2>
          <h3>{status}</h3>
          <h3>{species}</h3>
          <h3>{gender}</h3>
          <h3>{origin.name}</h3>
        </div>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps= (state) =>{
  return{
    myFavorites: state.myFavorites

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
