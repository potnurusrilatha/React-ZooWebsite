import styles from './backgroundSlider.module.css';
import { getImageUrl } from '../../utils/function';
import { animalArray } from '../../data/animals';
import { useState,useEffect } from 'react';


const BackgroundSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === animalArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

    return (
        <>
        <div className={styles.backgroundSlideWrapper}>
          
            <img 
            key={index}
            src={getImageUrl(animalArray[index].image)}
            alt={animalArray[index].name}
            className={styles.sliderImages}
            />
           
        </div>
        </>
    )
}
export default BackgroundSlider