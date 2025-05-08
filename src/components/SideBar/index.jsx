import { useState } from 'react';
import styles from './sidebar.module.css';
import { getIconUrl } from '../../utils/function';

const SideBar = ({ animalArray, press, groupPage, selectedAnimal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  // Filter animals based on the current group page
  const filteredAnimals = groupPage
    ? animalArray.filter(animal => animal.group === groupPage)
    : animalArray;

  return (
    <>
      {/* Toggle Button */}
      <div className={`${styles.toggleButtonWrapper} ${!isOpen ? styles.closed : ''}`}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <div className={`${styles.arrow} ${isOpen ? styles.left : styles.right}`}></div>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <ul className={styles.sidebarListMenu}>
          {filteredAnimals.map((animal, index) => (
             <li
             key={index}
             className={`${styles.sidebarListItem} 
               ${hoveredIndex === index ? styles.active : ''}
               ${selectedAnimal?.name === animal.name ? styles.selected : ''}`} 
             onMouseEnter={() => setHoveredIndex(index)}
             onMouseLeave={() => setHoveredIndex(null)}
           >
              <span className={styles.icon}>
                {animal.icon && <img src={getIconUrl(animal.icon)} alt={animal.name} />}
              </span>
              <span
                className={styles.name}
                onClick={() => press(animal)} 
              >
                {animal.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
