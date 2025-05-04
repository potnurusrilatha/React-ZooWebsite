import styles from './home.module.css';
import { animalArray } from '../../data/animals';
import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';
import homeVideo from '../../assets/video/home.mp4';

const Home = ({ chosenAnimal, click, getPopUp }) => {
  return (
    <div className={styles.animalContainer}>
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

      <div className={styles.main}>
        <SideBar
          animalArray={animalArray}
          press={click}
          selectedAnimal={chosenAnimal}
        />

        <MainContent
          clickedAnimal={chosenAnimal}
          animalPopUp={getPopUp}
          defaultMessage={{
            title: "Welcome to our Zoo!",
            description: "Click on any animal to learn more.",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
