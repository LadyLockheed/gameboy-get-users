import styles from './offScreen.module.css'

const OffScreen = () => {
  return (
    <div className={styles.outerFrame}>
    <div className={styles.screen}></div>
  </div>
  )
}
export default OffScreen