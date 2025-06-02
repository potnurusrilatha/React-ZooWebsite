import React, { useState } from 'react';
import styles from '../../Animals/animals.module.css';
import { animalArray } from '../../../data/animals';
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent';
import birdsVideo from '../../../assets/video/Birds.mp4';
import PopUp from '../../../components/PopUp';

const Birds = () => {
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
          src={birdsVideo}
          autoPlay
          muted
          type="video/mp4"
        />
        <h1 className={styles.homeTitle}>Welcome to the Feathers</h1>
      </div>
      {!showPopUp ? (
        <div className={styles.main}>
          
          <SideBar
            animalArray={animalArray.filter(
              animal => animal.group === "Birds"
            )}
            press={chooseAnimal}
          />
 
          
          <MainContent
            clickedAnimal={clickedAnimal}
            animalPopUp={togglePopUp}
            defaultMessage={{
              title: "Welcome to the Feathers Page!",
              description: "Take flight into the fascinating world of birds! From soaring eagles to tiny hummingbirds, these feathered creatures are masters of the skies, known for their songs, colors, and incredible migrations."
            }}
          />
        </div>
      ) : (
        <PopUp chosenAnimal={clickedAnimal} closePopUp={togglePopUp} />
      )}
    </div>
  );
};

export default Birds;
