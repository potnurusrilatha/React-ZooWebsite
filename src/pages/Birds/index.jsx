import styles from './birds.module.css'
import SideBar from "../../components/SideBar"
import { birdArray } from "../../data/animals"
import birdsVideo from "../../assets/video/Birds.mp4"

const Birds = () => {
  const birds = birdArray.filter(a => a.group === 'Birds')
  return (
    <>
    <div className={styles.animalHomeContainer}>
      <div className={styles.videoWrapper}>
                <video className={styles.backgroundMediaVideo}
                    src={birdsVideo} 
                    autoPlay 
                    muted
                    type="video/mp4" />
            <h1 className={styles.homeTitle}>Welcome to Feathers </h1>
      </div>
    
      <div className={styles.mainContent}>
        <SideBar animalArray={birds} groupPage="Birds"/>
        <div className={styles.pageContent}>
          <h1>birds page</h1>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Birds

