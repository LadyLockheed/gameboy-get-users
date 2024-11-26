'use client';
import styles from './gameboy.module.css';
import Screen from '../components/Screen';
import GameButtons from '../components/GameButtons';
import DirectionalPad from '../components/DirectionalPad';
import SoundOutputBars from '../components/SoundOutputBars';
import OnOffButtons from '../components/OnOffButtons';
import { useState } from 'react';
import useFetchUser from '../hooks/fetchUser';

const Gameboy = () => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const { user, isLoading, hasError, fetchUser, clearUserState } =
		useFetchUser();
	const handleTurnOff = (): void => {
		clearUserState();
		setIsOn(false);
	};

	return (
		<div className={styles.gameboyContainer}>
			<div className={styles.shell}>
				<Screen
					isLoading={isLoading}
					user={user}
					hasError={hasError}
					isOn={isOn}
				/>
				<div className={styles.buttonRow}>
					<DirectionalPad />
					<GameButtons onClick={fetchUser} isLoading={isLoading} isOn={isOn} />
				</div>
				<OnOffButtons setIsOn={setIsOn} handleTurnOff={handleTurnOff} />
				<SoundOutputBars />
			</div>
		</div>
	);
};
export default Gameboy;
