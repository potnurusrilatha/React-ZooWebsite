import styles from '../navigation.module.css'
  import { pages } from '../../../data/animals.js'
  import { XCircle, List} from "@phosphor-icons/react";
  import NavigationItem from '../NavigationItem';
  import { useState } from 'react';
  
  const MobileNav = () => {
        const [isOpen, setIsOpen] = useState(false);
  
      return (
          <div className={styles.mobileNav}>
            <div className={styles.navBar}>
              {!isOpen ? (
                <List size={32} onClick = {() => setIsOpen(true)} />
              ) : (
                <XCircle size={32}  onClick = {() => setIsOpen(false)}/>
            )}
            </div>
            {isOpen && (
              <div  className={`{styles.mobileMenuContent} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
                {pages.map((item, index) => (<NavigationItem key={index} name={item}  handleClose= {() => setIsOpen(false)}/>))} 
              </div>
            )}

          </div>
      )
  }
  
  


export default MobileNav
