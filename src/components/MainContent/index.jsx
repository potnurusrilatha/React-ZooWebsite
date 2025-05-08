import React from 'react';
// import { useLocation } from 'react-router-dom';
import styles from './mainContent.module.css';

const MainContent = ({ clickedAnimal, animalPopUp, defaultMessage }) => {
  // const { pathname } = useLocation();
  const showReadMore = true; // Always show Read More button

  if (!clickedAnimal) {
    return (
      <div className={styles.welcomeWrapper}>
        <div className={styles.welcome}>
          <h1 className={styles.welcomeTitle}>
            {defaultMessage?.title || "Welcome to the zoo's page!"}
          </h1>
          <p>{defaultMessage?.description || "Enjoy browsing all our animals."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <p>{clickedAnimal.shortDescription}</p>
      <div className={styles.animalDetails}>
        <h1>{clickedAnimal.name}</h1>
        <div className={styles.animalDetailsContent}>
          <img src={clickedAnimal.image} alt={clickedAnimal.name} />
          <div className={styles.animalDetailsList}>
            <p><span>Lifespan: </span>{clickedAnimal.lifespan}</p>
            <p><span>Group: </span>{clickedAnimal.group}</p>
            <p><span>Food: </span>{clickedAnimal.food}</p>
            <p><span>Length: </span>{clickedAnimal.length}</p>
            <p><span>Weight: </span>{clickedAnimal.weight}</p>
            <p><span>Habitat: </span>{clickedAnimal.habitat}</p>
          </div>
        </div>
        <div className={styles.description}>{clickedAnimal.description}</div>
      </div>

      {showReadMore && (
        <button
          className={styles.readMore}
          onClick={animalPopUp} // Trigger the pop-up when clicked
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default MainContent;
