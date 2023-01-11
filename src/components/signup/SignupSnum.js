import { Form, InputGroup } from 'react-bootstrap';

export default function SignupSnum({ changeSnum, visSnum }) {
	const stnum_check = (val) => {
		const reg = new RegExp('^20[0-2]{1}[0-9]{1}[0-9]{6}');
		reg.test(val)
			? visSnum((prev) => ({ ...prev, snum: 'hidden' }))
			: visSnum((prev) => ({ ...prev, snum: 'visible' }));
	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>Student Number</InputGroup.Text>
			<Form.Control
				placeholder='학번'
				aria-label='Studentnumber'
				aria-describedby='basic-addon1'
				onChange={(e) => {
					changeSnum(e.target.value);
					stnum_check(e.target.value);
				}}
			></Form.Control>
		</InputGroup>
	);
}
