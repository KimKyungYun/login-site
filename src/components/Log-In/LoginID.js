export default function LoginID({ setID }) {
	return (
		<div>
			<label htmlFor='LoginID'>ID</label>
			<input
				type='ID'
				className='form-control pw enter'
				placeholder='ID'
				onChange={(event) => setID(event.target.value)}
			/>
		</div>
	);
}
