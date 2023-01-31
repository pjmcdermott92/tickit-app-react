import { Routes, Route } from 'react-router-dom';
import LayoutProvider from './contexts/LayoutContext';
import AuthLayout from './pages/layouts/AuthLayout/AuthLayout';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutProvider />}>
				<Route index element={<p>Hi!</p>} />
			</Route>
      <Route path='/auth' element={<AuthLayout />}>
        <Route index element={<p>LOGIN</p>} />
      </Route>
		</Routes>
	);
};

export default App;
