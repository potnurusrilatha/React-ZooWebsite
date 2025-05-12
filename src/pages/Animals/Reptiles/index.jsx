import React, { useState } from 'react';
import styles from '../../Animals/animals.module.css'
import { animalArray } from '../../../data/animals';
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent';
import reptilesvideo  from '../../../assets/video/reptiles.mp4'
import PopUp from '../../../components/PopUp';

const Reptiles = () => {

  const [clickedAnimal, setClickedAnimal] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  // Function to handle animal click
  const chooseAnimal = (animal) => {
    setClickedAnimal(animal);
    setShowPopUp(false);
    // setShowPopUp(true)
  };

  // Function to toggle the pop-up visibility
  const togglePopUp = () => {
    setShowPopUp(prev => !prev); 
    // setClickedAnimal(null);
  };

  return (
    <div className={styles.animalContainer}>
      <div className={styles.videoWrapper}>
                      <video className={styles.backgroundMediaVideo}
                          src={reptilesvideo} 
                          autoPlay 
                          muted
                          type="video/mp4" />
        <h1 className={styles.homeTitle}>Welcome to Scales </h1>
      </div>
      {!showPopUp && <div className={styles.main}>
        

        {/* Sidebar will handle selecting an animal */}

      <SideBar
          animalArray={animalArray.filter(animal => animal.group === 'Reptiles')}
          press={chooseAnimal}
          selectedAnimal={clickedAnimal}
        />

    {/* Main content will display selected animal details or welcome message */}

        <MainContent
          clickedAnimal={clickedAnimal}
          animalPopUp={togglePopUp}
          defaultMessage={{
            title: "Welcome to the Reptiles Page!",
            description: "Step into the realm of scales and cold-blooded creatures. Reptiles like snakes, lizards, and turtles have fascinating adaptations that have stood the test of time. Click to explore more!"
          }}
        />
      </div>}
      
      {/* Conditionally render PopUp */}
      {showPopUp && <PopUp chosenAnimal={clickedAnimal} closePopUp={togglePopUp} />}
    </div>
  );
};

export default Reptiles;

