import styles from './popup.module.css';
import { getImageUrl } from '../../utils/function';
import { NavLink } from 'react-router-dom';

const PopUp = ({ chosenAnimal, closePopUp }) => {
  if (!chosenAnimal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popupCard}>
        <button className={styles.closeButton} onClick={closePopUp}>✖ Close</button>
        <h2>{chosenAnimal.title || chosenAnimal.name}</h2>
        <img src={getImageUrl(chosenAnimal.image)} alt={chosenAnimal.name} className={styles.image} />
        
        <div className={styles.animalDetails}>
          <div className={styles.animalDetailsContent}>
            <div className={styles.animalDetailsList}>
              <p><span>Lifespan: </span>{chosenAnimal.lifeSpan}</p>
              <p><span>Food: </span>{chosenAnimal.food}</p>
              <p><span>Length: </span>{chosenAnimal.length}</p>
              <p><span>Weight: </span>{chosenAnimal.weight}</p>
              <p><span>Place: </span>{chosenAnimal.place}</p>
              <p><span>GroupLink: </span><NavLink to = {`/${chosenAnimal.group.toLowerCase()}`} >{chosenAnimal.groupLink}</NavLink>
              </p>
              <p className={styles.description}>{chosenAnimal.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default PopUp;
