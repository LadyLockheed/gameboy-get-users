import { User } from '../types/user';
import Spinner from './Spinner';
import UserDetails from './UserDetails';
import styles from './screenContent.module.css';

interface ScreenContentProps {
	isLoading: boolean;
	user: User | null;
	hasError: boolean;
	isOn: boolean;
}

const ScreenContent = (props: ScreenContentProps) => {
	const { isLoading, user, hasError, isOn } = props;

	if (!isOn) {
		return (
			<h3 className={styles.header}>Click &quot;On&quot; to start Gameboy</h3>
		);
	}

	if (isLoading) {
		return <Spinner />;
	}

	if (hasError) {
		return (
			<h3 className={styles.header}>Something went wrong, please try again.</h3>
		);
	}

	if (user) {
		return (
			<div className={styles.userTextContainer}>
				<h3>Random user:</h3>
				<UserDetails user={user} />
			</div>
		);
	}

	return (
		<>
			<h1 className={styles.header}>Welcome</h1>
			<h3 className={styles.header}>Lets find you a random user</h3>
		</>
	);
};
export default ScreenContent;
