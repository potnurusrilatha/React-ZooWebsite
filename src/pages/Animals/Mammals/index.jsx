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

  const chooseAnimal = (animal) => {
    setClickedAnimal(animal);
  
  };

  const togglePopUp = () => {
    setShowPopUp(prev => !prev);
  };

  return (
    <div className={styles.animalContainer}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.backgroundMediaVideo}
          src={mammalsvideo}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>
        <h1 className={styles.homeTitle}>Welcome to Fur & Warmth</h1>
      </div>

      {!showPopUp && (
        <div className={styles.main}>
          <SideBar
            animalArray={animalArray.filter(animal => animal.group === 'Mammals')}
            press={chooseAnimal}
            selectedAnimal={clickedAnimal}
          />

          <MainContent
            clickedAnimal={clickedAnimal}
            animalPopUp={togglePopUp}
            defaultMessage={{
              title: "Welcome to the Mammals Page!",
              description:"Explore our fascinating furry friends—from mighty lions to tiny echidnas. Mammals are warm-blooded creatures with hair or fur, and they often care for their young. Click on any animal to learn more!"
            }}
          />
        </div>
      )}

      {showPopUp && (
        <PopUp
          chosenAnimal={clickedAnimal}
          closePopUp={togglePopUp}
        />
      )}
    </div>
  );
};

export default Mammals;
