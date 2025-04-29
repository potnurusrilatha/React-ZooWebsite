import styles from '../navigation.module.css'
import{ pages } from '../../../data/animals.js'
import NavigationItem from '../NavigationItem';


const DesktopNav = () => {
  return (
    <div className={styles.desktopNav}>
       {pages.map((item, index) => (<NavigationItem key={index} name={item} />
))}
      
    </div>
  )
}

export default DesktopNav
