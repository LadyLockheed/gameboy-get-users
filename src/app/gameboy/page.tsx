import styles from './gameboy.module.css'
import OffScreen  from '../Components/OffScreen'
import GameButtons from '../Components/GameButtons'
import SelectAndStartButtons from '../Components/SelectAndStartButtons'
import DirectionalPad from '../Components/DirectionalPad'
import SoundOutputBars from '../Components/SoundOutputBars'

const Gameboy = () => {
  return (
    <div className={styles.gameboyContainer}>
      <div className={styles.shell}>
        <OffScreen/>
        <div className={styles.buttonRow}>
          <DirectionalPad/>
          <GameButtons/>
        </div>
          <SelectAndStartButtons/>
          <SoundOutputBars/>
      </div>
    
    </div>
  )
}
export default Gameboy