import LoginIndex from './components/Log-In';
import SignupIndex from './components/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginIndex></LoginIndex>}></Route>
				<Route path='/signup' element={<SignupIndex></SignupIndex>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
