import styles from './mainContent.module.css';
import { getImageUrl } from '../../utils/function';
import { NavLink } from 'react-router-dom';


const MainContent = ({ clickedAnimal, animalPopUp, defaultMessage }) => {
  const showReadMore = true; 

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
    <>
   <div className={styles.mainContent}>
    <div className={styles.card}>
      <p>{clickedAnimal.shortDescription}</p>
      <div className={styles.animalDetails}>
        <h1>{clickedAnimal.name}</h1>
        <div className={styles.animalDetailsContent}>
          <img src={getImageUrl(clickedAnimal.image)} alt={clickedAnimal.name} />
          <div className={styles.animalDetailsList}>
            <p><span>Lifespan: </span>{clickedAnimal.lifeSpan}</p>
            <p><span>Food: </span>{clickedAnimal.food}</p>
            <p><span>Length: </span>{clickedAnimal.length}</p>
            <p><span>Weight: </span>{clickedAnimal.weight}</p>
            <p><span>Place: </span>{clickedAnimal.place}</p>
            <p><span>GroupLink: </span><NavLink to = {`/${clickedAnimal.group.toLowerCase()}`} >{clickedAnimal.group}</NavLink>
              </p>
          </div>
        
        </div>
       
        {showReadMore && (
        <button
          className={styles.readMore}
          onClick={animalPopUp} 
        >
          Read More
        </button>
      )}
       </div> 
        
      </div>
      
      </div>
   
  </>
  );
};

export default MainContent;
