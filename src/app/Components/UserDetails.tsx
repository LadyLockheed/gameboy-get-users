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
				<span className={styles.boldText}>Title: </span>
				{name.title}
			</p>
			<p>
				<span className={styles.boldText}>Firstname: </span>
				{name.first}
			</p>
			<p>
				<span className={styles.boldText}>Lastname: </span>
				{name.last}
			</p>
			<p>
				<span className={styles.boldText}>Gender: </span>
				{gender}
			</p>
			<p>
				<span className={styles.boldText}>Street: </span>
				{location.street.name}
			</p>
			<p>
				<span className={styles.boldText}>City: </span>
				{location.city}
			</p>
			<p>
				<span className={styles.boldText}>Country: </span>
				{location.country}
			</p>
			<p>
				<span className={styles.boldText}>Phone: </span>
				{phone}
			</p>
			<p>
				<span className={styles.boldText}>Email: </span>
				{email}
			</p>
			<p>
				<span className={styles.boldText}>Cell: </span>
				{cell}
			</p>
			<p>
				<span className={styles.boldText}>Nationality: </span>
				{nat}
			</p>
		</div>
	);
};
export default UserDetails;
