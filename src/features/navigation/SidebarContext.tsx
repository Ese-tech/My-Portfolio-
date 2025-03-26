import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextProps {
	isSidebarOpen: boolean;
	toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export function SidebarProvider({ children }: { children: ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	return (
		<SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebarContext() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebarContext must be used within a SidebarProvider");
	}
	return context;
}
