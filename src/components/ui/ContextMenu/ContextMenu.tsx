import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useClickOutside from '../../../hooks/useClickOutside';
import './ContextMenu.scss';

const ContextMenu = ({ children, className, show, toggleShow }: any) => {
	const contextMenuRef = useRef(null);
	useClickOutside(contextMenuRef, toggleShow);
	
	if (!show) return null;
	
	return (
		<ul className={`context-menu-container ${className}`} ref={contextMenuRef}>
			{children}
		</ul>
	);
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
