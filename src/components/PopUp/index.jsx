import styles from './popup.module.css';

const PopUp = ({ chosenAnimal, closePopUp }) => {
  if (!chosenAnimal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popupCard}>
        <button className={styles.closeButton} onClick={closePopUp}>✖ Close</button>
        <h2>{chosenAnimal.title || chosenAnimal.name}</h2>
        <img src={chosenAnimal.image} alt={chosenAnimal.name} className={styles.image} />
        <p className={styles.description}>{chosenAnimal.description}</p>
      </div>
    </div>
  );
};

export default PopUp;
