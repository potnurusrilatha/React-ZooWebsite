import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./slideShow.module.css";
import { slideshowImages } from "../../data/animals";
import { getslideshowImages } from '../../utils/function'


const Slideshow = ({ category }) => {
  const images = slideshowImages[category] || [];
  const duplicatedImages = [...images, ...images];
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        },
      });
    }
  }, [isHovered, controls]);

  if (images.length === 0) return null;

  return (
    <div
      className={styles.sliderContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={styles.sliderTrack}
        style={{ display: "flex", width: `${duplicatedImages.length * 200}px` }}
        animate={controls}
      >
        {duplicatedImages.map((img, index) => (
          <div key={index} className={styles.slide}>
            <img src={getslideshowImages(img.src)} alt={img.label} />
            <p className={styles.caption}>{img.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slideshow;
