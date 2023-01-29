import { Link } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import { IoPersonOutline } from 'react-icons/io5';
import Logo from '../../../assets/images/logo-semi-transparent.png';
import UserMenu from '../../UserMenu/UserMenu';
import './TopBar.scss';

const TopBar = () => {
	const [showUserMenu, toggleShowUserMenu] = useToggle(false);

	return (
		<>
			<header className='header-container'>
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
					onClick={() => toggleShowUserMenu()}
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
			<UserMenu show={showUserMenu} />
		</>
	);
};

export default TopBar;
