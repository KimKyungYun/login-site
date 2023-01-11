import { InputGroup, Form } from 'react-bootstrap';

export default function SignupMajor({ snum, check }) {
	const majorCheck = (snum) => {
		if (check.snum == 'hidden') {
			if (snum.slice(4, 7) == 136) return '컴퓨터공학과';
			else if (snum.slice(4, 7) == 123) return '기계공학과';
			else if (snum.slice(4, 7) == 120) return '메카트로닉스학과';
			else if (snum.slice(4, 7) == 128) return '산업디자인공학과';
		} else return '';
	};
	return (
		<InputGroup className='mb-3'>
			<InputGroup.Text id='basic-addon1'>Major</InputGroup.Text>
			<Form.Control
				aria-label='Major'
				aria-describedby='basic-addon1'
				disabled
				value={majorCheck(snum)}
			/>
		</InputGroup>
	);
}
