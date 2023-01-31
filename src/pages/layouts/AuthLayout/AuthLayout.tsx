import { Outlet } from 'react-router-dom';
import Logo from '../../../assets/images/logo-semi-transparent.png';
import './AuthLayout.scss';

const AuthLayout = () => {
	return (
		<>
			<div className='auth-wrapper'>
				<div className='brand'>
					<div className='brand-img'>
						<img src={Logo} alt='TickIt' />
					</div>
					<h1>
						tick<span>It</span>
					</h1>
					<h3>Project Tracker for Developers</h3>
				</div>
				<div className='auth-container'>
					<div className='card'>
					<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthLayout;
