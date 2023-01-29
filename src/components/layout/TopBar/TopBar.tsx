import { Link } from 'react-router-dom';
import { useLayout } from '../../../contexts/LayoutContext';
import useToggle from '../../../hooks/useToggle';
import { IoMenu, IoPersonOutline } from 'react-icons/io5';
import Logo from '../../../assets/images/logo-semi-transparent.png';
import UserMenu from '../UserMenu/UserMenu';
import './TopBar.scss';

const TopBar = () => {
	const [showUserMenu, toggleShowUserMenu] = useToggle(false);
	const { showSidebar, toggleShowSidebar } = useLayout();

	const handleToggleUserMenu = (e: any) => {
		e.stopPropagation();
		toggleShowUserMenu();
	};

	return (
		<>
			<header className='header-container'>
				<button
					className='menu-toggle-btn'
					title={`${showSidebar ? 'Hide' : 'Show'} Menu`}
					onClick={() => toggleShowSidebar()}
				>
					<IoMenu />
				</button>
				<div className='brand-logo'>
					<Link to='/'>
						<img src={Logo} alt={Logo} />
						<h1 className=''>
							<span>tick</span>It
						</h1>
					</Link>
				</div>
				<button
					className={`user-info-btn ${showUserMenu ? 'active' : ''}`}
					onClick={handleToggleUserMenu}
				>
					<span className='icon'>
						<IoPersonOutline />
					</span>
					<span className='user-info'>
						<span>John Doe</span>
						<span>Developer</span>
					</span>
				</button>
			</header>
			<UserMenu show={showUserMenu} toggleShow={toggleShowUserMenu} />
		</>
	);
};

export default TopBar;
