import styles from './userDetail.module.css';

interface UserDetailProps {
	headline: string;
	info: string | number;
}
const UserDetail = (props: UserDetailProps) => {
	const { headline, info } = props;
	return (
		<p>
			<span className={styles.boldText}>{`${headline}: `} </span>
			{info}
		</p>
	);
};
export default UserDetail;
