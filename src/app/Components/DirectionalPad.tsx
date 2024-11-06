import styles from './directionalPad.module.css'

//This "button" is only cosmetic at this point
const DirectionalPad = () => {
  return (
    <div className={styles.container}>
      <div className={styles.horizontal}/>
      <div className={styles.vertical}/>
    </div>
  )
}
export default DirectionalPad