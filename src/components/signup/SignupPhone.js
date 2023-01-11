import { InputGroup, Form } from 'react-bootstrap';

export default function SignupPhone({ changePhone, visPhone }) {
	const changeFormat = (e) =>
		e
			.replace(/[^0-9]/g, '')
			.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
			.replace(/(\-{1,2})$/g, '');

	const phone_check = (val) => {
		const reg = new RegExp('^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})');
		reg.test(val)
			? visPhone((prev) => ({ ...prev, phone: 'hidden' }))
			: visPhone((prev) => ({ ...prev, phone: 'visible' }));
		return val;
	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>PhoneNumber</InputGroup.Text>
			<Form.Control
				placeholder='ex)010-1234-5678'
				aria-label='Phonenumber'
				aria-describedby='basic-addon1'
				onChange={(e) => {
					e.target.value = changeFormat(e.target.value);
					phone_check(e.target.value);
					changePhone(e.target.value);
				}}
			/>
		</InputGroup>
	);
}
