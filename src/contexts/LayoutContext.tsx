import { createContext, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import RootLayout from '../pages/layouts/RootLayout/RootLayout';

interface LayoutContext {
	showSidebar: boolean;
	toggleShowSidebar: (value?: boolean) => void;
}

const LayoutContext = createContext<LayoutContext>({
	showSidebar: true,
	toggleShowSidebar: (value?: boolean) => {},
});
export const useLayout = () => useContext(LayoutContext);

const LayoutProvider = () => {
	const [showSidebar, toggleShowSidebar] = useToggle(window.innerWidth >= 1000);

	useEffect(() => {
		const handler = () => {
			toggleShowSidebar(window.innerWidth >= 1000);
		};
		window.addEventListener('resize', handler);

		return () => window.removeEventListener('resize', handler);
	}, []);

	return (
		<LayoutContext.Provider
			value={{
				showSidebar,
				toggleShowSidebar,
			}}
		>
			<RootLayout>
				<Outlet />
			</RootLayout>
		</LayoutContext.Provider>
	);
};

export default LayoutProvider;
