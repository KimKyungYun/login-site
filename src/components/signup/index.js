import { useState } from 'react';
import styled from 'styled-components';
import TopBanner from '../Topbanner';
import SignupID from './SignupID';
import SignupMajor from './SignupMajor';
import SignupPW from './SignupPW';
import SignupPhone from './SignupPhone';
import SignupSnum from './SignupSnum';
import SignupBtn from './SignupBtn';
import SignupPWchk from './SignupPWchk';

const MainDiv = styled.div`
	padding: 5%;
	justify-items: center;
	align-items: center;
`;
const SubDiv = styled.div`
	padding: 5%;
	border: 1px solid lightgray;
`;

const AlertSpan = styled.span`
	padding: 0;
	visibility: ${(props) => props.visibility || 'hidden'};
	color: red;
`;
export default function SignupIndex() {
	const [id, setID] = useState('');
	const [pw, setPW] = useState('');
	const [snum, setSnum] = useState('');
	const [phone, setPhone] = useState('');
	const [check, setCheck] = useState({
		id: '',
		pw: '',
		pwchk: '',
		snum: '',
		phone: '',
	});
	const signup = (e) => {
		if (Object.values(check).includes('') || check.values.includes('visible')) {
			e.preventDefault();
			alert('회원가입 정보를 확인해주세요.');
		} else {
			return true;
		}
	};
	return (
		<>
			<TopBanner signup='active'></TopBanner>
			<MainDiv>
				<SubDiv>
					<form action='/' onSubmit={signup}>
						<h3>Sign Up</h3>
						<SignupID changeID={setID} visID={setCheck}></SignupID>
						<AlertSpan visibility={check.id}>
							id를 잘못 입력하셨습니다.
						</AlertSpan>
						<SignupPW changePW={setPW} visPW={setCheck}></SignupPW>
						<AlertSpan visibility={check.pw}>
							pw를 잘못 입력하셨습니다.
						</AlertSpan>
						<SignupPWchk pw={pw} visPWchk={setCheck}></SignupPWchk>
						<AlertSpan visibility={check.pwchk}>
							비밀번호가 일치하지 않습니다.
						</AlertSpan>
						<SignupSnum changeSnum={setSnum} visSnum={setCheck}></SignupSnum>
						<AlertSpan visibility={check.snum}>
							학번을 잘못입력하셨습니다.
						</AlertSpan>
						<SignupMajor snum={snum} check={check}></SignupMajor>
						<br></br>
						<SignupPhone
							changePhone={setPhone}
							visPhone={setCheck}
						></SignupPhone>
						<AlertSpan visibility={check.phone}>
							번호를 잘못입력하셨습니다.
						</AlertSpan>
						<br></br>
						<SignupBtn check={check}></SignupBtn>
					</form>
				</SubDiv>
			</MainDiv>
		</>
	);
}
