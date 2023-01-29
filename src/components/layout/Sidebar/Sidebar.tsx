import {
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

type SidebarMenuProps = {
	showSidebar: boolean
	toggleShowSidebar: any
}

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

const Sidebar = ({ showSidebar, toggleShowSidebar }: SidebarMenuProps) => {
	return (
		<aside className={`sidebar-container ${!showSidebar ? 'hidden' : ''}`}>
			<ul className='sidebar-menu'>
				{SIDEBAR_MENUS.map((item) => (
					<SidebarMenuItem key={item.label} {...item} />
				))}
			</ul>
			<span className='sidebar-bottom-bg' />
		</aside>
	);
};

export default Sidebar;
