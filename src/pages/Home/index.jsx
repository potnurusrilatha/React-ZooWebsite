import styles from './home.module.css'
import homeVideo from "../../assets/video/Home.mp4"
import SideBar from '../../components/SideBar'
import { MainContent } from '../../components/MainContent'
import { animalArray } from '../../data/animals'

const Home = ({chooseAnimal, click, getPopUp}) => {
  
  return (
    <div className={styles.homeContainer}>
        <div className={styles.videoWrapper}>
            <video className={styles.backgroundMediaVideo}
                src={homeVideo} 
                autoPlay 
                muted
                type="video/mp4" />
            
            <h1 className={styles.homeTitle}>Welcome to FurFeathers & Scales</h1>
        </div>
        <div className={styles.main}>
          <SideBar animalArray={animalArray} press={click} />
          <MainContent clicked={chooseAnimal} animalPopUp={getPopUp} />
        </div>
    </div>
  )
}

export default Home

