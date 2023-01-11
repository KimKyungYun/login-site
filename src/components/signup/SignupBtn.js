import { Button } from 'react-bootstrap';

export default function SignupBtn({ check }) {
	const signup = (e) => {
		if (check.values == undefined || check.values.includes('visible')) {
			e.preventDefault();
			alert('회원가입 정보를 확인해주세요.');
		}
	};
	return (
		<>
			<Button type='submit' onClick={signup}>
				Sign up
			</Button>{' '}
			<Button type='button' href='/'>
				cancel
			</Button>
		</>
	);
}
