import { User } from '../types/user';
import styles from './userDetails.module.css';

interface UserDetailsProps {
	user: User;
}
const UserDetails = (props: UserDetailsProps) => {
	const { user } = props;

	const details = [
		{ headline: 'Title', info: user.name.title },
		{ headline: 'Firstname', info: user.name.first },
		{ headline: 'Lastname', info: user.name.last },
		{ headline: 'Gender', info: user.gender },
		{ headline: 'Street', info: user.location.street.name },
		{ headline: 'City', info: user.location.city },
		{ headline: 'Country', info: user.location.country },
		{ headline: 'Phone', info: user.phone },
		{ headline: 'Email', info: user.email },
		{ headline: 'Cell', info: user.cell },
		{ headline: 'Nationality', info: user.nat },
	];

	return (
		<div>
			{details.map((detail, index) => (
				<p key={index}>
					<span className={styles.boldText}>{`${detail.headline}: `} </span>
					{detail.info}
				</p>
			))}
		</div>
	);
};
export default UserDetails;
