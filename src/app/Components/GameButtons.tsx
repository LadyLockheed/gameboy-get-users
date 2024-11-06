import styles from './gameButtons.module.css'


interface GameButtonsProps {
  onClick: () => void;
  isLoading: boolean;
  isOn: boolean;
}

const GameButtons = (props: GameButtonsProps) => {

  const {onClick, isLoading, isOn} = props;
  return (
    <>
    <div className={styles.gameButtonsContainer}>
    <button
      className={styles.gameButtons}
      onClick={() => onClick()}
      disabled={isLoading || !isOn}
    ></button>
    <h5 className={styles.getUserText}>GET USER</h5>
  </div>

  </>
  )
}
export default GameButtons