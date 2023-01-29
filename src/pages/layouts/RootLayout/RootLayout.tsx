import { Outlet } from 'react-router-dom';
import TopBar from '../../../components/layout/TopBar/TopBar';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import './RootLayout.scss';

const RootLayout = () => {
	return (
        <>
        <TopBar />
		<div className='page-wrapper'>
            <Sidebar />
            <div className='main-container'>
			    <Outlet />
            </div>
		</div>
        </>
	);
};

export default RootLayout;
