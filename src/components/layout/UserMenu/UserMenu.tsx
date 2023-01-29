import { IoPersonCircleOutline, IoPower } from 'react-icons/io5';
import ContextMenu from '../../ui/ContextMenu/ContextMenu';
import './UserMenu.scss';

const MENU_ITEMS = [
	{ label: 'My Profile', icon: IoPersonCircleOutline, href: '/users/me' },
	{ label: 'Log Out', icon: IoPower, onClick: () => {} },
];

const UserMenu = ({ show, toggleShow }: any) => {
	return (
		<ContextMenu
			className='user-context-menu'
			show={show}
			toggleShow={toggleShow}
		>
			{MENU_ITEMS.map((item) => (
				<ContextMenu.Item key={item.label} {...item} />
			))}
		</ContextMenu>
	);
};

export default UserMenu;
