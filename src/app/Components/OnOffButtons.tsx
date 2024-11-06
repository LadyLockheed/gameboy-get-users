import styles from './onOffButtons.module.css'

interface OnOffButtonsProps {
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
}

const OnOffButtons = (props: OnOffButtonsProps) => {

  const {setIsOn } = props;
  
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
          onClick={()=> setIsOn(false)}
          className={styles.offButton}
        />
        <h5 className={styles.text}>OFF</h5>
      </div>
  </div>
  )
}
export default OnOffButtons