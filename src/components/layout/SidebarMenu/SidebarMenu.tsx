import './SidebarMenu.scss';

type SidebarMenuProps = {
	icon: React.Component;
	title: String;
	items: any[];
};

const SidebarMenu = ({ icon: Icon, title, items }: SidebarMenuProps) => {
	return (
		<div className='sidebar-menu-container'>
			<div>kk</div>
		</div>
	);
};

export default SidebarMenu;
