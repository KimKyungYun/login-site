import { InputGroup, Form } from 'react-bootstrap';

export default function SignupPWchk({ pw, visPWchk }) {
	const pwchk_check = (val) => {
		pw == val
			? visPWchk((prev) => ({ ...prev, pwchk: 'hidden' }))
			: visPWchk((prev) => ({ ...prev, pwchk: 'visible' }));
	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>PW-check</InputGroup.Text>
			<Form.Control
				type='password'
				placeholder='Password-check'
				aria-label='Password-check'
				aria-describedby='basic-addon1'
				onChange={(e) => {
					pwchk_check(e.target.value);
				}}
			/>
		</InputGroup>
	);
}
