import React, { useState } from 'react';
import styles from '../../Animals/animals.module.css';
import { animalArray } from '../../../data/animals'; 
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent'; 
import mammalsvideo from '../../../assets/video/mammals.mp4';
import PopUp from '../../../components/PopUp';

const Mammals = () => {
  const [clickedAnimal, setClickedAnimal] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  // Function to handle animal click
  const chooseAnimal = (animal) => {
    setClickedAnimal(animal);
  };

  // Function to toggle the pop-up visibility
  const togglePopUp = () => {
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

        {/* Sidebar will handle selecting an animal */}
        
        <SideBar 
          animalArray={animalArray.filter(animal => animal.group === 'Mammals')} 
          press={chooseAnimal} 
        />

        {/* Main content will display selected animal details or welcome message */}
        <MainContent 
          clickedAnimal={clickedAnimal} 
          animalPopUp={togglePopUp}  
          defaultMessage={{
            title: "Welcome to the Mammals page!",
            description: "Enjoy browsing all our mammals."
          }} 
        />
      </div>

      {/* Conditionally render PopUp */}
      {showPopUp && <PopUp chosenAnimal={clickedAnimal} closePopUp={togglePopUp} />}
    </div>
  );
};

export default Mammals;
