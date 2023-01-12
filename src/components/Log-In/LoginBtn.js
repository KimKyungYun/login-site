import { Button } from 'react-bootstrap';

export default function LoginBtn() {
	const clear = () => {
		localStorage.clear();
		sessionStorage.clear();
	};
	return (
		<>
			<Button type='submit'>Log In</Button>{' '}
			<Button type='button' onClick={clear}>
				Log Out
			</Button>
		</>
	);
}
