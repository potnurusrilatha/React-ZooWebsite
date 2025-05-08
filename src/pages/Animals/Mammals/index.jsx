import React, { useState } from 'react';
import styles from '../../Animals/animals.module.css';
import { animalArray } from '../../../data/animals'; 
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent'; 
import mammalsvideo from '../../../assets/video/mammals.mp4';

const Mammals = () => {
  const [clickedAnimal, setClickedAnimal] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const chooseAnimal = (animal) => {
    // Clicking again toggles back to welcome view
    setClickedAnimal((prev) => (prev?.name === animal.name ? null : animal));
    setShowPopUp(false); // Always close popup when selecting
  };

  const togglePopUp = () => {
    console.log('Read More clicked');
    setShowPopUp(prev => !prev);
  };

  return (
    <div className={styles.animalContainer}>
      <div className={styles.videoWrapper}>
        <video className={styles.backgroundMediaVideo}
          src={mammalsvideo} 
          autoPlay 
          muted
          type="video/mp4" />
        <h1 className={styles.homeTitle}>Welcome to Fur</h1>
      </div>

      <div className={styles.main}>
        <SideBar 
          animalArray={animalArray.filter(animal => animal.group === 'Mammals')} 
          press={chooseAnimal} 
        />

        <MainContent 
          clickedAnimal={clickedAnimal} 
          animalPopUp={togglePopUp} // ✅ Now Read More button works
          defaultMessage={{
            title: "Welcome to the Mammals page!",
            description: "Enjoy browsing all our mammals."
          }} 
        />
      </div>

      {/* ✅ Fullscreen Pop-Up for Animal Details */}
      {showPopUp && clickedAnimal && (
        <div className={styles.fullscreenPopUp}>
          <button className={styles.closeButton} onClick={togglePopUp}>Close</button>
          <h1>{clickedAnimal.name}</h1>
          <img src={clickedAnimal.image} alt={clickedAnimal.name} />
          <p>{clickedAnimal.description}</p>
          <ul>
            <li><strong>Group:</strong> {clickedAnimal.group}</li>
            <li><strong>Food:</strong> {clickedAnimal.food}</li>
            <li><strong>Lifespan:</strong> {clickedAnimal.lifespan}</li>
            <li><strong>Length:</strong> {clickedAnimal.length}</li>
            <li><strong>Weight:</strong> {clickedAnimal.weight}</li>
            <li><strong>Habitat:</strong> {clickedAnimal.habitat}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mammals;
