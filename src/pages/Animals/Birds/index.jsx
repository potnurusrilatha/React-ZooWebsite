import React, { useState } from 'react';
import styles from '../../Animals/animals.module.css';
import { animalArray } from '../../../data/animals';
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent';
import birdsVideo from '../../../assets/video/birds.mp4';
import PopUp from '../../../components/PopUp';

const Birds = () => {
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
          src={birdsVideo} 
          autoPlay 
          muted
          type="video/mp4" />
        <h1 className={styles.homeTitle}>Welcome to the Feathers</h1>
      </div>
      <div className={styles.main}>
        {/* Sidebar will handle selecting an animal */}
        <SideBar
          animalArray={animalArray.filter(animal => animal.group === 'Birds')}
          press={chooseAnimal}
        />

        {/* Main content will display selected animal details or welcome message */}
        <MainContent
          clickedAnimal={clickedAnimal}  
          animalPopUp={togglePopUp}       
          defaultMessage={{
            title: "Welcome to the Feathers Page!",
            description: "Explore our collection of fascinating birds."
          }}
        />
      </div>

      {/* Conditionally render PopUp */}
      {showPopUp && <PopUp chosenAnimal={clickedAnimal} closePopUp={togglePopUp} />}
    </div>
  );
};

export default Birds;
