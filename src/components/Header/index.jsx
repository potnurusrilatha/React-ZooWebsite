import styles from './header.module.css'
import Logo from '../Logo';
import MobileNav from '../Navigation/MobileNav';
import DesktopNav from '../Navigation/DesktopNav';

const Header = ({title}) => {
    
  return (
    <div className={styles.header}>
     
        <Logo />
        <h1 className={styles.title}>{title}</h1>
        <MobileNav />
        <DesktopNav />
      
      
      
    </div>
  )
}

export default Header;
