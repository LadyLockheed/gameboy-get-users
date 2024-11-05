import styles from './selectAndStartButtons.module.css'


const SelectAndStartButtons = () => {
  return (
    <div className={styles.buttonsContainer}>
    <div className={styles.turnOffContainer}>
      <button
        className={styles.turnOffButton}
        // onClick={() => router.push("/")}
      ></button>
      <h5 className={styles.turnOffText}>TURN OFF</h5>
    </div>

    <div className={styles.aboutContainer}>
      <button
        // onClick={() => router.push("/About")}
        className={styles.aboutButton}
      ></button>
      <h5 className={styles.aboutText}>ABOUT</h5>
    </div>
  </div>
  )
}
export default SelectAndStartButtons