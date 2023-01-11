import { Button } from 'react-bootstrap';

export default function SignupBtn() {
	return (
		<>
			<Button type='submit'>Sign up</Button>{' '}
			<Button type='button' href='/'>
				cancel
			</Button>
		</>
	);
}
