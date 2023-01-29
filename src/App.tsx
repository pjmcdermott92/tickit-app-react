import { Routes, Route } from 'react-router-dom';
import RootLayout from './pages/layouts/RootLayout/RootLayout';

const App = () => {
	return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<p>Hi!</p>} />
      </Route>
    </Routes>
  );
};

export default App;
