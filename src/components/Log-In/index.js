import { useState } from 'react';
import LoginID from './LoginID';
import LoginPW from './LoginPW';
import LoginBtn from './LoginBtn';
import styled from 'styled-components';
import TopBanner from '../Topbanner';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginDiv = styled.div`
	width: 60%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 5%;
	border: 1px solid lightgray;
`;
export default function LoginIndex() {
	const [id, setID] = useState('');
	const [pw, setPW] = useState('');
	const inputID = (identify) => {
		setID(identify);
	};
	const inputPW = (password) => {
		setPW(password);
	};
	const check = (e) => {
		const id_check = new RegExp(
			'^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'
		);
		const pass_check = new RegExp(
			'^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,20}$'
		);

		if (id == '') {
			alert('아이디를 입력해주세요.');
			e.preventDefault();
		} else if (pw == '') {
			alert('비밀번호를 입력해주세요.');
			e.preventDefault();
		} else if (!id_check.test(id)) {
			e.preventDefault();
			alert('아이디 형식을 확인해주세요.');
		} else if (!pass_check.test(pw)) {
			e.preventDefault();
			alert('비밀번호를 확인해주세요.');
		} else return true;
	};
	return (
		<>
			<TopBanner login='active'></TopBanner>
			<LoginDiv>
				<form action='/' onSubmit={check}>
					<LoginID setID={inputID}></LoginID>
					<LoginPW setPW={inputPW}></LoginPW>
					<br></br>
					<LoginBtn id={id} pw={pw}></LoginBtn>
				</form>
			</LoginDiv>
		</>
	);
}
