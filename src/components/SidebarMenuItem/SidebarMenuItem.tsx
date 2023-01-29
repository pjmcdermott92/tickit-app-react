import { Link } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import './SidebarMenuItem.scss';

type SidebarMenuProps = {
	isSmall: boolean;
	label: string;
	icon: React.Component | any;
	items?: any[];
};

const SidebarMenuItem = ({
	isSmall,
	label,
	icon: Icon,
	items,
}: SidebarMenuProps) => {
	const [active, toggleActive] = useToggle(false);

	return (
		<li className={`sidebar-menu-item`}>
			<button
				className={`menu-item ${active ? 'active' : ''} ${
					items?.length ? 'submenu' : ''
				}`}
				onClick={() => toggleActive()}
			>
				<div className='icon'>
					<Icon />
				</div>
				<div className='label'>{label}</div>
			</button>
			{items?.length && active && (
				<ul className='submenu'>
					{items.map(({ label, icon: Icon, href }) => (
						<li key={label}>
							<button>
								<span className='icon'>
									<Icon />
								</span>
								<span className='label'>{label}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

export default SidebarMenuItem;
