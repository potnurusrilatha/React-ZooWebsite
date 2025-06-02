import styles from '../Animals/animals.module.css'
import { animalArray } from '../../data/animals';
import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';
import homeVideo from '../../assets/video/Home.mp4';
import { useState } from 'react';
import BackgroundSlider from '../../components/BackgroundSlider';


const Home = ({ chosenAnimal, click, getPopUp }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

   const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <>
    <div className={styles.homeWrapper}>
      <div className={styles.overlay}>
      <div className={styles.videoWrapper}>
         <video
          className={styles.backgroundMediaVideo}
          src={homeVideo}
          autoPlay
          muted
          loop
        /> 
        <h1 className={styles.homeTitle}>Welcome to the Zoo</h1>
      </div>
      </div>

      <div className={styles.main}>
        <div className={`${styles.sidebarWrapper} ${isSidebarOpen ? '' : styles.collapsed}`}>
      
        <SideBar
          animalArray={animalArray}
          press={click}
          selectedAnimal={chosenAnimal}
        />
        </div>

      <div className={styles.sliderContainer}></div>
        <MainContent
          clickedAnimal={chosenAnimal}
          animalPopUp={getPopUp}
          defaultMessage={{
            title: "Welcome to our FurFeathers & Scales!",
            description: "Step right in and start your adventure through our zoo!  From majestic lions to playful penguins, there's so much to discover!.Click on any animal to learn more about their habitat, behaviors, and fun facts. Let the exploration begin! Step right in and start your adventure through our zoo!  From majestic lions to playful penguins, there's so much to discover!.Click on any animal to learn more about their habitat, behaviors, and fun facts. Let the exploration begin!",
          }}
    
        />
         <BackgroundSlider />
          </div>
     
    </div>
    {/* </div> */}
    </>
  );
};

export default Home;
