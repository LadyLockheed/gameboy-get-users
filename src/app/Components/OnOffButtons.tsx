import styles from './onOffButtons.module.css'

interface OnOffButtonsProps {
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
  handleTurnOff: ()=> void;
}

const OnOffButtons = (props: OnOffButtonsProps) => {

  const {setIsOn, handleTurnOff } = props;
  
  return (
    <div className={styles.buttonsContainer}>

      <div>
        <button
          className={styles.onButton}
          onClick={() => setIsOn(true)}
        />
        <h5 className={styles.text}>ON</h5>
      </div>

      <div>
        <button
          onClick={()=> handleTurnOff()}
          className={styles.offButton}
        />
        <h5 className={styles.text}>OFF</h5>
      </div>
  </div>
  )
}
export default OnOffButtons