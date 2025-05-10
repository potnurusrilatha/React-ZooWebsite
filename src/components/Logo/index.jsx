import logo from '../../assets/logo.png'
import styles from '../Logo'


const Logo = () => {
  return (
    <div className={styles.Logowrap}>
      <img src={logo} alt={logo} height={70} />
    </div>
  )
}

export default Logo
