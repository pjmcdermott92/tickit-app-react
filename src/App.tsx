import { Routes, Route } from 'react-router-dom';
import LayoutProvider from './contexts/LayoutContext';
import Login from './pages/layouts/auth/Login';
import AuthLayout from './pages/layouts/AuthLayout/AuthLayout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutProvider />}>
				<Route index element={<p>Hi!</p>} />
			</Route>
			<Route path='/auth' element={<AuthLayout />}>
				<Route index element={<Login />} />
			</Route>
		</Routes>
	);
};

export default App;
