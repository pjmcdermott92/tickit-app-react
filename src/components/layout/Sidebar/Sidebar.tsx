import useToggle from '../../../hooks/useToggle';
import {
	IoArrowBackCircleOutline,
	IoPeopleCircleOutline,
	IoPeopleOutline,
	IoPersonAddOutline,
	IoAlbumsSharp,
	IoAlbumsOutline,
	IoAddSharp,
	IoTicketOutline,
	IoTicketSharp,
} from 'react-icons/io5';
import './Sidebar.scss';
import SidebarMenuItem from '../../SidebarMenuItem/SidebarMenuItem';

const SIDEBAR_MENUS = [
	{
		label: 'Users',
		icon: IoPeopleCircleOutline,
		items: [
			{
				label: 'All Users',
				icon: IoPeopleOutline,
				href: '/users',
			},
			{
				label: 'Invite User',
				icon: IoPersonAddOutline,
				href: '/users/new',
			},
		],
	},
	{
		label: 'Projects',
		icon: IoAlbumsOutline,
		items: [
			{
				label: 'All Projects',
				icon: IoAlbumsSharp,
				href: '/projects',
			},
			{
				label: 'My Projects',
				icon: IoAlbumsOutline,
				href: '/projects/assigned',
			},
			{
				label: 'New Project',
				icon: IoAddSharp,
				href: '/projects/create',
			},
		],
	},
	{
		label: 'Tickets',
		icon: IoTicketOutline,
		items: [
			{
				label: 'All Tickets',
				icon: IoTicketSharp,
				href: '/tickets',
			},
			{
				label: 'My Tickets',
				icon: IoTicketOutline,
				href: '/projects/assigned',
			},
			{
				label: 'New Ticket',
				icon: IoAddSharp,
				href: '/projects/create',
			},
		],
	},
];

const Sidebar = () => {
	const [smallSidebar, toggleSmallSidebar] = useToggle(false);

	return (
		<aside className={`sidebar-container ${smallSidebar ? 'small' : ''}`}>
			<div
				role='button'
				className='hide-nav-btn'
				title='Hide Navbar'
				tabIndex={0}
				onClick={() => toggleSmallSidebar()}
			>
				<IoArrowBackCircleOutline />
			</div>
			<ul className='sidebar-menu'>
				{SIDEBAR_MENUS.map((item) => (
					<SidebarMenuItem key={item.label} isSmall={smallSidebar} {...item} />
				))}
			</ul>
			<span className='sidebar-bottom-bg' />
		</aside>
	);
};

export default Sidebar;
