import styles from './gameboy.module.css'
import OffScreen  from '../Components/OffScreen'

const Gameboy = () => {
  return (
    <div className={styles.gameboyContainer}>
      <div className={styles.shell}>
      <OffScreen/>
      </div>
    </div>
  )
}
export default Gameboy