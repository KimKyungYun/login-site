import LoginIndex from './components/Log-In';
import SignupIndex from './components/signup';
import { Route, Routes } from 'react-router-dom';
function App() {
	return (
		<Routes>
			<Route path='/' element={<LoginIndex></LoginIndex>}></Route>
			<Route path='/signup' element={<SignupIndex></SignupIndex>}></Route>
		</Routes>
	);
}

export default App;
