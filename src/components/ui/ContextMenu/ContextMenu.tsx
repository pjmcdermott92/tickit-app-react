import { Link } from 'react-router-dom';
import './ContextMenu.scss';

const ContextMenu = ({ children, className, show }: any) => {
	if (!show) return null;
	return <ul className={`context-menu-container ${className}`}>{children}</ul>;
};

ContextMenu.Item = ({ icon: Icon, label, href, onClick, className }: any) => {
	const handleClick = () => {
		onClick();
	};

	return (
		<li className={`context-menu-item ${className}`}>
			{href ? (
				<Link to={href}>
					<span className='icon'>
						<Icon />
					</span>
					<span>{label}</span>
				</Link>
			) : (
				<button onClick={handleClick}>
					<span className='icon'>
						<Icon />
					</span>
					<span>{label}</span>
				</button>
			)}
		</li>
	);
};

export default ContextMenu;
