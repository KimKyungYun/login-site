import { InputGroup, Form } from 'react-bootstrap';
export default function SignupID({ changeID, visID }) {
	const id_check = (val) => {
		const reg = new RegExp(
			'^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'
		);
		reg.test(val)
			? visID((prev) => ({ ...prev, id: 'hidden' }))
			: visID((prev) => ({ ...prev, id: 'visible' }));
	};

	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>ID</InputGroup.Text>
			<Form.Control
				placeholder='id'
				aria-label='id'
				aria-describedby='basic-addon1'
				onChange={(e) => {
					changeID(e.target.value);
					id_check(e.target.value);
				}}
			/>
		</InputGroup>
	);
}
