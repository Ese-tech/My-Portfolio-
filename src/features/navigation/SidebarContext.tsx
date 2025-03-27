import { useState, ReactNode } from "react";
import { SidebarContext } from "../navigation/SidebarContextDefinition"; // Corrected path

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
