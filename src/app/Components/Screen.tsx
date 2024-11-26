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

	// const userData = users?.map((u, index) => {
	// 	return (
	// 		<div key={index}>
	// 			<p>
	// 				<span className={styles.bold}>Title: </span>
	// 				{u.name.title}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Firstname: </span>
	// 				{u.name.first}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Lastname: </span>
	// 				{u.name.last}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Gender: </span>
	// 				{u.gender}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Street: </span>
	// 				{u.location.street.name}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>City: </span>
	// 				{u.location.city}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Country: </span>
	// 				{u.location.country}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Phone: </span>
	// 				{u.phone}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Email: </span>
	// 				{u.email}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Cell: </span>
	// 				{u.cell}
	// 			</p>
	// 			<p>
	// 				<span className={styles.bold}>Nationality: </span>
	// 				{u.nat}
	// 			</p>
	// 		</div>
	// 	);
	// });

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
