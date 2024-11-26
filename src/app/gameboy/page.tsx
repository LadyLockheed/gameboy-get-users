'use client';
import styles from './gameboy.module.css';
import Screen from '../components/Screen';
import GameButtons from '../components/GameButtons';
import DirectionalPad from '../components/DirectionalPad';
import SoundOutputBars from '../components/SoundOutputBars';
import OnOffButtons from '../components/OnOffButtons';
import { useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';

const Gameboy = () => {
	const [users, setUsers] = useState<User[] | []>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	const [isOn, setIsOn] = useState<boolean>(false);
	const handleTurnOff = (): void => {
		setUsers([]);
		setIsOn(false);
	};

	const fetchUser = async () => {
		setIsLoading(true);

		//If error from earlier fetch, clear.
		if (hasError) {
			setHasError(false);
		}

		try {
			const response = await axios.get('https://randomuser.me/api/');
			setUsers(response.data.results);
		} catch (error) {
			if (error instanceof Error) {
			}
			setHasError(true);
			//console.log for developing process only.
			//For build, remove console.log
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.gameboyContainer}>
			<div className={styles.shell}>
				<Screen
					isLoading={isLoading}
					users={users}
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
