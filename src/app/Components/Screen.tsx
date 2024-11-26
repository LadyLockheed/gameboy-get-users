import styles from './screen.module.css';
import { User } from '../types/user';
import ScreenContent from './ScreenContent';

interface ScreenProps {
	isLoading: boolean;
	user: User | null;
	hasError: boolean;
	isOn: boolean;
}

const Screen = (props: ScreenProps) => {
	const { isLoading, user, hasError, isOn } = props;

	const screenClassName = `${styles.screen} ${
		isOn ? styles.isOn : styles.isOff
	} ${user ? styles.scrollbar : ''}`;

	return (
		<div className={styles.outerFrame}>
			<div className={screenClassName}>
				<ScreenContent
					isLoading={isLoading}
					hasError={hasError}
					isOn={isOn}
					user={user}
				/>
			</div>
		</div>
	);
};
export default Screen;
