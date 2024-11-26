import { User } from '../types/user';
import UserDetail from './UserDetail';

interface UserDetailsProps {
	user: User;
}
const UserDetails = (props: UserDetailsProps) => {
	const { user } = props;

	const { name, gender, location, phone, email, cell, nat } = user;

	return (
		<div>
			<UserDetail headline="Title" info={name.title} />
			<UserDetail headline="Firstname" info={name.first} />
			<UserDetail headline="LastName" info={name.last} />
			<UserDetail headline="Gender" info={gender} />
			<UserDetail headline="Street" info={location.street.name} />
			<UserDetail headline="City" info={location.city} />
			<UserDetail headline="Country" info={location.country} />
			<UserDetail headline="Phone" info={phone} />
			<UserDetail headline="Email" info={email} />
			<UserDetail headline="Cell" info={cell} />
			<UserDetail headline="Nationality" info={nat} />
		</div>
	);
};
export default UserDetails;
