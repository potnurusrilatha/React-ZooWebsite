import styles from './footer.module.css';
import { InstagramLogo, FacebookLogo, YoutubeLogo } from "@phosphor-icons/react"; // Importing icons from phosphor-react

const Footer = () => {
  return (
    <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <h3>FurFeathers & Scales</h3>
                    
                </div>
                <div className={styles.socialSection}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <div className={styles.socialItem}><FacebookLogo size={20} /> Facebook</div>
                        <div className={styles.socialItem}><InstagramLogo size={20} /> Instagram</div>
                        <div className={styles.socialItem}><YoutubeLogo size={20} /> YouTube</div>
                    </div>
                </div>
                <div className={styles.footerSection}>
                    <h4>Contact Us</h4>
                    <p>Email:support@zoo.com</p>
                    <p>phone: +1 234 567 890</p>
                    <p>Location: 123 Zoo Street, Zoo City</p>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; FurFeathers & Scales. All rights reserved.</p>
                </div>

            </div>

        </footer>
      
    
  )
}

export default Footer

 
