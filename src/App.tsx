import { Routes, Route } from 'react-router-dom';
import LayoutProvider from './contexts/LayoutContext';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<LayoutProvider />}>
				<Route index element={<p>Hi!</p>} />
			</Route>
		</Routes>
	);
};

export default App;
