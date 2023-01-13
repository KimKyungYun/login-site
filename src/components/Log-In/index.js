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
		if (id == '') {
			alert('아이디를 입력해주세요.');
			e.preventDefault();
		} else if (pw == '') {
			alert('비밀번호를 입력해주세요.');
			e.preventDefault();
		} else if (localStorage.getItem(id) == null) {
			e.preventDefault();
			alert('아이디가 존재하지 않습니다.');
		} else if (localStorage.getItem(id) != pw) {
			e.preventDefault();
			if (sessionStorage.getItem(id) == null) sessionStorage.setItem(id, 0);
			sessionStorage.setItem(id, parseInt(sessionStorage.getItem(id)) + 1);
			alert('비밀번호가 ' + sessionStorage.getItem(id) + '/5 번 틀렸습니다.');
		} else {
			alert('로그인성공');
			return true;
		}
	};
	return (
		<>
			<TopBanner login='active'></TopBanner>
			<LoginDiv>
				<form action='/' onSubmit={check}>
					<LoginID setID={inputID}></LoginID>
					<LoginPW setPW={inputPW}></LoginPW>
					<br></br>
					<LoginBtn></LoginBtn>
				</form>
			</LoginDiv>
		</>
	);
}
