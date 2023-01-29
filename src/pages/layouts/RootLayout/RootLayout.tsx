import { useLayout } from '../../../contexts/LayoutContext';
import TopBar from '../../../components/layout/TopBar/TopBar';
import Sidebar from '../../../components/layout/Sidebar/Sidebar';
import './RootLayout.scss';

const RootLayout = ({ children }: any) => {
	const { showSidebar } = useLayout();

	return (
		<>
			<TopBar />
			<Sidebar />
			<div className={`main-container ${showSidebar ? 'fixed' : ''}`}>
				{children}
			</div>
		</>
	);
};

export default RootLayout;
