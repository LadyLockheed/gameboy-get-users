import styles from './screen.module.css';
import { User } from '../Types/user';
import Spinner from './Spinner';

interface ScreenProps {
	isLoading: boolean;
	users: User[];
	hasError: boolean;
	isOn: boolean;
}

const Screen = (props: ScreenProps) => {
	const { isLoading, users, hasError, isOn } = props;

	const screenClassName = `${styles.screen} ${
		isOn ? styles.isOn : styles.isOff
	} ${users.length !== 0 ? styles.scrollbar : ''}`;

	const hasUser = users?.length > 0;

	const userData = users?.map((u, index) => {
		return (
			<div key={index}>
				<p>
					<span className={styles.bold}>Title: </span>
					{u.name.title}
				</p>
				<p>
					<span className={styles.bold}>Firstname: </span>
					{u.name.first}
				</p>
				<p>
					<span className={styles.bold}>Lastname: </span>
					{u.name.last}
				</p>
				<p>
					<span className={styles.bold}>Gender: </span>
					{u.gender}
				</p>
				<p>
					<span className={styles.bold}>Street: </span>
					{u.location.street.name}
				</p>
				<p>
					<span className={styles.bold}>City: </span>
					{u.location.city}
				</p>
				<p>
					<span className={styles.bold}>Country: </span>
					{u.location.country}
				</p>
				<p>
					<span className={styles.bold}>Phone: </span>
					{u.phone}
				</p>
				<p>
					<span className={styles.bold}>Email: </span>
					{u.email}
				</p>
				<p>
					<span className={styles.bold}>Cell: </span>
					{u.cell}
				</p>
				<p>
					<span className={styles.bold}>Nationality: </span>
					{u.nat}
				</p>
			</div>
		);
	});

	const content = () => {
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
				<h3 className={styles.header}>
					Something went wrong, please try again.
				</h3>
			);
		}

		if (hasUser) {
			return (
				<div className={styles.userTextContainer}>
					<h3>Random user:</h3>
					{userData}
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

	return (
		<div className={styles.outerFrame}>
			<div className={screenClassName}>{content()}</div>
			<button
				className="test"
				id="test"
				onClick={() => console.log('click')}
				disabled={false}
			>
				Click
			</button>
		</div>
	);
};
export default Screen;
