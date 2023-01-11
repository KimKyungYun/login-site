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

	return (
		<>
			<TopBanner signup='active'></TopBanner>
			<MainDiv>
				<SubDiv>
					<h3>Sign Up</h3>
					<SignupID changeID={setID} visID={setCheck}></SignupID>
					{console.log(id, pw, phone)}
					<AlertSpan visibility={check.id}>id를 잘못 입력하셨습니다.</AlertSpan>
					<SignupPW changePW={setPW} visPW={setCheck}></SignupPW>
					<AlertSpan visibility={check.pw}>pw를 잘못 입력하셨습니다.</AlertSpan>
					<SignupPWchk pw={pw} visPWchk={setCheck}></SignupPWchk>
					<AlertSpan visibility={check.pwchk}>
						비밀번호가 일치하지 않습니다.
					</AlertSpan>
					<SignupSnum changeSnum={setSnum} visSnum={setCheck}></SignupSnum>
					<AlertSpan visibility={check.snum}>
						학번을 잘못입력하셨습니다.
					</AlertSpan>
					<SignupMajor snum={snum}></SignupMajor>
					<br></br>
					<SignupPhone changePhone={setPhone} visPhone={setCheck}></SignupPhone>
					<AlertSpan visibility={check.phone}>
						번호를 잘못입력하셨습니다.
					</AlertSpan>
					<br></br>
					<SignupBtn check={check}></SignupBtn>
				</SubDiv>
			</MainDiv>
		</>
	);
}
