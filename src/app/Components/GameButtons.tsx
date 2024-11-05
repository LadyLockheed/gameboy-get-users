import styles from './gameButtons.module.css'

const GameButtons = () => {
  return (
    <>
    <div className={styles.gameButtonsContainer}>
    <button
      className={styles.gameButtons}
      // onClick={() => onClick()}
      // disabled={isLoading}
    ></button>
    <h5 className={styles.getUserText}>GET USER</h5>
  </div>

  </>
  )
}
export default GameButtons