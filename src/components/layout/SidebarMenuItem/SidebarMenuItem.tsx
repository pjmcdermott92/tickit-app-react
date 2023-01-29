import { Link } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import './SidebarMenuItem.scss';

type SidebarMenuProps = {
	label: string;
	icon: React.Component | any;
	items?: any[];
	href?: any;
};

const SidebarMenuItem = ({
	label,
	icon: Icon,
	items,
	href,
}: SidebarMenuProps) => {
	const [active, toggleActive] = useToggle(false);
	return (
		<li className={`sidebar-menu-item`}>
			{items?.length ? (
				<>
					<button
						className={`menu-item ${active ? 'active' : ''} ${
							items?.length ? 'submenu' : ''
						}`}
						onClick={() => toggleActive()}
					>
						<span className='icon'>
							<Icon />
						</span>
						<span className='label'>{label}</span>
					</button>
					{active && (
						<ul className='submenu'>
							{items.map(({ label, icon: Icon, href, action }) => (
								<li key={label}>
									{href ? (
										<Link to={href}>
											<span className='icon'>
												<Icon />
											</span>
											<span className='label'>{label}</span>
										</Link>
									) : (
										<button onClick={action}>
											<span className='icon'>
												<Icon />
											</span>
											<span className='label'>{label}</span>
										</button>
									)}
								</li>
							))}
						</ul>
					)}
				</>
			) : (
				<Link to={href} className='menu-item'>
					<div className='icon'>
						<Icon />
					</div>
					<div className='label'>{label}</div>
				</Link>
			)}
		</li>
	);
};

export default SidebarMenuItem;
