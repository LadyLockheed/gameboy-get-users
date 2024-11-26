import { useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';

interface UseFetchUserResult {
	user: User | null;
	isLoading: boolean;
	hasError: boolean;
	fetchUser: () => Promise<void>;
	clearUserState: () => void;
}

const useFetchUser = (): UseFetchUserResult => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);

	const fetchUser = async () => {
		setIsLoading(true);

		if (hasError) {
			setHasError(false); // Clear previous errors
		}

		try {
			const response = await axios.get('https://randomuser.me/api/');
			setUser(response.data.results[0]);
		} catch (error) {
			setHasError(true);
			console.error('Failed to fetch user:', error); // Optional: remove for production
		} finally {
			setIsLoading(false);
		}
	};

	const clearUserState = (): void => {
		setUser(null);
		if (hasError) {
			setHasError(false);
		}
	};

	return { user, isLoading, hasError, fetchUser, clearUserState };
};

export default useFetchUser;
