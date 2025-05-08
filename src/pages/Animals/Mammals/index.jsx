import  { useState } from 'react';
import styles from '../../Animals/animals.module.css';
import { animalArray } from '../../../data/animals'; 
import SideBar from '../../../components/SideBar';
import MainContent from '../../../components/MainContent'; 
import mammalsvideo from '../../../assets/video/mammals.mp4';
import PopUp from '../../../components/PopUp';
// import BackgroundSlider from '../../../components/BackgroundSlider';


const Mammals = () => {
  const [clickedAnimal, setClickedAnimal] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const chooseAnimal = (animal) => {
    // Clicking again toggles back to welcome view
    setClickedAnimal((prev) => (prev?.name === animal.name ? null : animal));
    setShowPopUp(false); 
  };

  const togglePopUp = () => {
    console.log('Read More clicked');
    setShowPopUp(prev => !prev);
  };

  return (
    <>
    
    <div className={styles.animalContainer}>
      <div className={styles.videoWrapper}>
        <video className={styles.backgroundMediaVideo}
          src={mammalsvideo} 
          autoPlay 
          loop
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
          animalPopUp={togglePopUp}
          defaultMessage={{
            title: "Welcome to the Fur page!",
            description:  "Explore our fascinating furry friends—from mighty lions to tiny echidnas. Mammals are warm-blooded creatures with hair or fur, and they often care for their young. Click on any animal to learn more!"
          }} 
        />
      </div>

    
      {/* Conditionally render PopUp */}
      {showPopUp && <PopUp chosenAnimal={clickedAnimal} closePopUp={togglePopUp} />}
    </div>
    </>
  );
};

export default Mammals;
