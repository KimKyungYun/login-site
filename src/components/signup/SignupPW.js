import { InputGroup, Form } from 'react-bootstrap';

export default function SignupPW({ changePW, visPW }) {
	const pass_check = (val) => {
		const reg = new RegExp(
			'^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&()])[A-Za-z\\d$@$!%*#?&()]{8,20}$'
		);
		reg.test(val)
			? visPW((prev) => ({ ...prev, pw: 'hidden' }))
			: visPW((prev) => ({ ...prev, pw: 'visible' }));
	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>PW</InputGroup.Text>
			<Form.Control
				type='password'
				placeholder='Password'
				aria-label='Password'
				aria-describedby='basic-addon1'
				onChange={(e) => {
					changePW(e.target.value);
					pass_check(e.target.value);
				}}
			/>
		</InputGroup>
	);
}
