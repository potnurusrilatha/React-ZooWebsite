import styles from '../navigation.module.css'
import { NavLink } from 'react-router-dom';

const NavigationItem = ({name, handleClose}) => {
  if (!name || typeof name !== 'string') return null;
  const path = name.toLowerCase() === "home" ? "/" : `/${name.toLowerCase()}`;
  return (
    <NavLink to = {path} className={styles.menuItem} onClick={handleClose}>
        {name}  
    </NavLink>
  )
}

export default NavigationItem;
