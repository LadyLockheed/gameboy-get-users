import styles from './gameButtons.module.css'

interface GameButtonsProps {
  onClick: () => void;
  isLoading: boolean;
  isOn: boolean;
}

//On a gameboy classic this is two buttons, therefore the name of the component implies more than one button
//Also I intend to make it into two buttons in the future
const GameButtons = (props: GameButtonsProps) => {

  const {onClick, isLoading, isOn} = props;
  return (
    <>

      <div className={styles.gameButtonsContainer}>
        <button
          className={styles.gameButtons}
          onClick={() => onClick()}
          disabled={isLoading || !isOn}
        />
        <h5 className={styles.getUserText}>GET USER</h5>
    </div>

  </>
  )
}
export default GameButtons