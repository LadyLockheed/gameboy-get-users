import { User } from '../types/user';
import styles from './userDetails.module.css';

interface UserDetailsProps {
	user: User;
}
const UserDetails = (props: UserDetailsProps) => {
	const { user } = props;

	const { name, gender, location, phone, email, cell, nat } = user;
	return (
		<div>
			<p>
				<span className={styles.bold}>Title: </span>
				{name.title}
			</p>
			<p>
				<span className={styles.bold}>Firstname: </span>
				{name.first}
			</p>
			<p>
				<span className={styles.bold}>Lastname: </span>
				{name.last}
			</p>
			<p>
				<span className={styles.bold}>Gender: </span>
				{gender}
			</p>
			<p>
				<span className={styles.bold}>Street: </span>
				{location.street.name}
			</p>
			<p>
				<span className={styles.bold}>City: </span>
				{location.city}
			</p>
			<p>
				<span className={styles.bold}>Country: </span>
				{location.country}
			</p>
			<p>
				<span className={styles.bold}>Phone: </span>
				{phone}
			</p>
			<p>
				<span className={styles.bold}>Email: </span>
				{email}
			</p>
			<p>
				<span className={styles.bold}>Cell: </span>
				{cell}
			</p>
			<p>
				<span className={styles.bold}>Nationality: </span>
				{nat}
			</p>
		</div>
	);
};
export default UserDetails;
