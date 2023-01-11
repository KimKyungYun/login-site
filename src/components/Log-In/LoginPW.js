export default function LoginPW({ setPW }) {
	return (
		<div>
			<label htmlFor='LoginPW'>Password</label>
			<input
				type='password'
				className='form-control pw enter'
				placeholder='Password'
				maxLength='20'
				onChange={(event) => setPW(event.target.value)}
			/>
		</div>
	);
}
