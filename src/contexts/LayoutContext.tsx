import { createContext, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import useEventListener from '../hooks/useEventListener';
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
	useEventListener('resize', (e: any) => {
		toggleShowSidebar(window.innerWidth >= 1000);
	});

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
