import { Outlet } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import TopBar from '../../../components/layout/TopBar/TopBar';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import './RootLayout.scss';

const RootLayout = () => {
	const [showSidebar, toggleShowSidebar] = useToggle(true);

	return (
		<>
			<TopBar showSidebar={showSidebar} toggleShowSidebar={toggleShowSidebar} />
			<div className='page-wrapper'>
				<Sidebar
					showSidebar={showSidebar}
					toggleShowSidebar={toggleShowSidebar}
				/>
				<div className='main-container'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default RootLayout;
