import useToggle from '../../../hooks/useToggle';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import './Sidebar.scss';

const Sidebar = () => {
    const [showSidebar, toggleShowSidebar] = useToggle(true);

	return (
		<aside className={`sidebar-container ${!showSidebar ? 'small': ''}`}>
			<div
				role='button'
				className='hide-nav-btn'
				title='Hide Navbar'
				tabIndex={0}
                onClick={() => toggleShowSidebar()}
			>
				<IoArrowBackCircleOutline />
			</div>
			mf
			<span className='sidebar-bottom-bg' />
		</aside>
	);
};

export default Sidebar;
